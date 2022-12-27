<template>
    <div>
        <full-page :options="{
          licenseKey: licenseKey,
          onLeave: onLeave,
          scrollBar: true,
        }" ref="fullpage" id="fullpage">
            <section v-for="[key, image] in imageData.filter(image => image.location === title).entries()"
                :key="key"
                class="w-full h-screen px-[5vw] flex justify-center items-center section">
                <div>
                    <img :id="'img' + key" :src="'images/' + image.imagePath" class="max-w-full max-h-[50vh]">
                    <p class="font-outfit font-light text-sm" :id="'imageDetails' + key">
                      {{ `f/${exifData[key]?.tags?.FNumber} ISO ${exifData[key]?.tags?.ISO} ${exifData[key]?.tags?.FocalLength}mm ${exifData[key]?.tags?.LensModel}` }}
                    </p>
                </div>
            </section>
        </full-page>
        <div class="fixed bottom-0 pb-[5vh] w-full text-center z-10 font-outfit font-semibold text-6xl">
            <h2>{{ String(currentSection).padStart(3, '0') }}</h2>
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
      title() {
          return this.$route.query.title
      },
  },
  data: () => ({
      imageData: imageData,
      licenseKey: '9KZA7-ETX07-241IK-0Q37I-JJORP',
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
      imageData.filter(image => image.location === this.title).forEach( (image, index: number) => {
          var ref = this;
          axios.get(`images/${image.imagePath}`, { responseType: 'arraybuffer' }).then(response => {
              ref.exifData.push(ExifParserFactory.create(response.data).parse());
          });
      });
  }
});
</script>
