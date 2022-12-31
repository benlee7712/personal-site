<template>
    <div>
        <full-page :options="{
          licenseKey: licenseKey,
          onLeave: onLeave,
          scrollBar: true,
          scrollOverflow: false,
          anchors: Array.from(filteredImageData.keys()).map(index => String('photo' + (index + 1))),
          menu: '#sideMenu',
        }" ref="fullpage" id="fullpage">
            <section v-for="[key, image] in filteredImageData.entries()"
                :key="key"
                class="w-full px-[10vw] flex justify-center items-center section"
                :style="{'height': `${innerHeight}px`}">
                <div>
                    <img :id="'img' + key" :src="'images/' + image.imagePath" class="max-w-full max-h-[50vh]">
                    <div class="flex pt-1">
                        <p class="font-outfit font-light text-2xs sm:text-xs 2xl:text-sm text-left w-1/2 whitespace-pre">
                          {{ `f/${exifData[key]?.tags?.FNumber}     ${floatToFraction(exifData[key]?.tags?.ExposureTime)}s     ${exifData[key]?.tags?.FocalLength}mm     ` }}
                        </p>
                        <p class="font-outfit font-light text-2xs sm:text-xs 2xl:text-sm text-right w-1/2 h-4 2xl:h-5 overflow-ellipsis">
                          {{ exifData[key]?.tags?.LensModel }}
                        </p>
                    </div>
                </div>
            </section>
        </full-page>
        <RouterLink to="/" class="next-arrow fixed left-[5vw] top-[10vh] sm:top-[12vh] cursor-pointer">
            <img class="h-6 md:h-7 lg:h-7 2xl:h-10 px-2 float-left rotate-180" src="@/assets/icons/next-arrow.svg">
            <h1 class="text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-outfit font-medium float-left red-underline">BACK</h1>
        </RouterLink>
        <ul id="sideMenu" class="fixed right-[3vw] top-[50vh] translate-y-[-50%]">
            <li v-for="key in filteredImageData.keys()"
                :key="key"
                :data-menuanchor="'photo' + (key + 1)"
            >
                <a :href="'#photo' + (key + 1)" class="sideMenuItem"></a>
            </li>
        </ul>
        <div class="fixed bottom-0 pb-[10vh] sm:pb-[8vh] w-full text-center z-10">
            <h2 class="font-outfit font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl red-underline w-fit ml-[50%] translate-x-[-50%] translate-y-[-25%] pb-5%">{{ String(currentSection).padStart(3, '0') }}</h2>
            <h2 class="font-outfit font-normal text-lg sm:text-xl lg:text-2xl xl:text-3xl">{{ `${filteredImageData[currentSection - 1].location}, ${filteredImageData[currentSection - 1].country}` }}</h2>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { ExifParserFactory, ExifData } from "ts-exif-parser";
import { defineComponent } from 'vue';
import { RouterLink} from 'vue-router';

import '../css/projects.css';

import imageData from '../constants/imageData';


var innerHeight = window.innerHeight;

var gcd = function(a: number, b: number): number {
  if (b < 0.0000001) return a;

  return gcd(b, Math.floor(a % b));
};

var floatToFraction = function(float: number): String {
    if (typeof float !== "number") {
        return "NaN"
    }

    var len = String(float).length - 2;

    var denominator = Math.pow(10, len);
    var numerator = float * denominator;

    var divisor = gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    return Math.floor(numerator) + '/' + Math.floor(denominator);
}


export default defineComponent({
  name: 'Project',
  components: {
    RouterLink
  },
  computed: {
      filteredImageData() {
          return imageData.filter(image => image.location === this.$route.query.title)
      },
  },
  data: () => ({
      licenseKey: '9KZA7-ETX07-241IK-0Q37I-JJORP',
      currentSection: 1,
      exifData: Array<ExifData>(),
      innerHeight: innerHeight,
  }),
  methods: {
      onLeave: function(origin: any, destination: any, direction: string, trigger: string) {
          this.currentSection = destination.index + 1
      },
      setSection(key: number): void {
          this.currentSection = key;
          let fp: any = this.$refs.fullpage
          fp.api.moveTo(key);
      },
      updateInnerHeight: function() {
          this.innerHeight = window.innerHeight;
          let fp: any = this.$refs.fullpage
          fp.build();
      },
      floatToFraction,
  },
  created() {
      window.addEventListener("resize", this.updateInnerHeight);
  },
  destroyed() {
      window.removeEventListener("resize", this.updateInnerHeight);
  },
  mounted() {
        this.setSection(1);
        this.filteredImageData.forEach( (image, index: number) => {
            var ref = this;
            axios.get(`images/${image.imagePath}`, { responseType: 'arraybuffer' }).then(response => {
                ref.exifData.push(ExifParserFactory.create(response.data).parse());
            });
        });
  }
});
</script>
