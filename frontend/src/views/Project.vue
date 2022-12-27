<template>
    <div>
        <full-page :options="{
          licenseKey: licenseKey,
          onLeave: onLeave,
          scrollBar: true,
        }" ref="fullpage" id="fullpage">
            <section v-for="[key, image] in filteredImageData.entries()"
                :key="key"
                class="w-full h-full px-[5vw] flex justify-center items-center section">
                <div>
                    <img :id="'img' + key" :src="'images/' + image.imagePath" class="max-w-full max-h-[50vh]">
                    <div class="flex pt-1">
                        <p class="font-outfit font-light text-xs 2xl:text-sm text-left w-1/2 whitespace-pre">
                          {{ `f/${exifData[key]?.tags?.FNumber}     ISO ${exifData[key]?.tags?.ISO}     ${exifData[key]?.tags?.FocalLength}mm` }}
                        </p>
                        <p class="font-outfit font-light text-xs 2xl:text-sm text-right w-1/2 h-4 2xl:h-5 overflow-ellipsis">
                          {{ exifData[key]?.tags?.LensModel }}
                        </p>
                    </div>
                </div>
            </section>
        </full-page>
        <div class="fixed bottom-0 pb-[10vh] w-full text-center z-10">
            <h2 class="font-outfit font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl red-underline w-fit ml-[50%] translate-x-[-50%] translate-y-[-25%] pb-5%">{{ String(currentSection).padStart(3, '0') }}</h2>
            <h2 class="font-outfit font-normal text-lg sm:text-xl lg:text-2xl xl:text-3xl">{{ `${filteredImageData[currentSection - 1].location}, ${filteredImageData[currentSection - 1].country}` }}</h2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ExifParserFactory, ExifData } from "ts-exif-parser";
import axios from 'axios';

import imageData from '../constants/imageData';


const FULLPAGE_LICENSE = process.env.FULLPAGE_LICENSE
var currentSection = 1


var gcd = function(a: number, b: number): number {
  if (b < 0.0000001) return a;

  return gcd(b, Math.floor(a % b));
};


export default defineComponent({
  name: 'Project',
  computed: {
      filteredImageData() {
          return imageData.filter(image => image.location === this.$route.query.title)
      },
  },
  data: () => ({
      licenseKey: FULLPAGE_LICENSE,
      currentSection: currentSection,
      exifData: Array<ExifData>(),
  }),
  methods: {
      onLeave: function(origin: any, destination: any, direction: string, trigger: string) {
          this.currentSection = destination.index + 1
      },
      setSection(key: number): void {
          this.currentSection = key
      }
  },
  mounted() {
      this.filteredImageData.forEach( (image, index: number) => {
          var ref = this;
          axios.get(`images/${image.imagePath}`, { responseType: 'arraybuffer' }).then(response => {
              ref.exifData.push(ExifParserFactory.create(response.data).parse());
          });
      });
  }
});
</script>
