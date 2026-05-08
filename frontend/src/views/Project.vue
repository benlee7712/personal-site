<template>
    <div>
        <full-page
            v-if="filteredImageData && filteredImageData.length"
            :options="fpOptions"
            ref="fullpage"
            id="fullpage"
        >
            <section v-for="[key, image] in filteredImageData.entries()"
                :key="key"
                class="w-full px-[10vw] flex justify-center items-center section z-[8]"
                :style="{'height': `${innerHeight}px`}">
                <div class="flex flex-col items-center">
                    <img :id="'img' + key" :src="'images/' + image.imagePath" class="max-w-full max-h-[50vh] simple-box-shadow" @click="fullScreenImages[key] = true">
                    <v-overlay v-model="fullScreenImages[key]">
                        <div class="w-screen h-screen overflow-hidden flex justify-center items-center" @click="fullScreenImages[key] = false">
                            <div class="flex-col items-center text-center">
                                <v-img :src="'images/' + image.imagePath" max-height="80vh" width="85vw">
                                    <template v-slot:placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular
                                            color="grey-lighten-4"
                                            indeterminate
                                            ></v-progress-circular>
                                        </div>
                                    </template>
                                </v-img>
                                <v-card class="text-white font-outfit mt-[2.5vh] pa-4 w-full sm:w-[75%] xl:w-[50%] sm:ml-[12.5%] xl:ml-[25%]" variant="elevated" color="#424242">
                                    <strong>{{ `${filteredImageData[currentSection - 1].location}, ${filteredImageData[currentSection - 1].country}:` }}</strong>
                                    {{ `Image ${currentSection} / ${filteredImageData.length}` }}
                                    <br>
                                    <strong>Lens:</strong> {{ exifData[key]?.tags?.LensModel }}
                                    <br>
                                    <strong>Settings:</strong> {{ `f/${exifData[key]?.tags?.FNumber} | ${floatToFraction(exifData[key]?.tags?.ExposureTime)}s | ${exifData[key]?.tags?.FocalLength}mm` }}
                                    <br>
                                    <strong>Displaying at lower resolution for copyright reasons</strong>
                                </v-card>
                            </div>
                        </div>
                    </v-overlay>
                    <div class="flex pt-1 w-full">
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
        <RouterLink to="/" class="next-arrow fixed left-[5vw] top-[10vh] sm:top-[15vh] xl:top-[12.5vh] cursor-pointer z-10">
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
        <div class="fixed bottom-0 pb-[10vh] sm:pb-[12vh] w-full text-center z-1">
            <h2 class="font-outfit font-normal text-lg sm:text-xl lg:text-2xl xl:text-3xl simple-text-shadow w-fit ml-[50%] translate-x-[-50%]">
                {{ `${filteredImageData[currentSection - 1].location}, ${filteredImageData[currentSection - 1].country}` }}
            </h2>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { ExifParserFactory, ExifData } from "ts-exif-parser";
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

import '../css/projects.css';

import imageData from '../constants/imageData';


var innerHeight = window.innerHeight;

var gcd = function(a: number, b: number): number {
    if (b < 0.001) return a;
    if (a < 0.001) return b;

    return gcd(a, a % b);
};

var floatToFraction = function(float: number | undefined): String {
    if (typeof float !== "number") {
        return "NaN"
    }

    var len = String(float).length - 2;

    var denominator = Math.pow(10, len);
    var numerator = float * denominator;

    var divisor = Math.floor(gcd(numerator, denominator));

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
    anchors() {
        return Array.from(this.filteredImageData.keys()).map(i => `photo${i + 1}`);
    },
    filteredImageData() {
        return imageData.filter(image => image.location === this.$route.query.title)
    },
    fpOptions() {
        return {
            licenseKey: this.licenseKey,
            onLeave: this.onLeave,
            scrollBar: true,
            scrollOverflow: false,
            anchors: this.anchors,
            menu: '#sideMenu',
            lockAnchors: true,
            scrollingSpeed: '400',
        };
    },
  },
  data: () => ({
      licenseKey: '8N1JI-ALT18-10IR8-5Q5CI-STSWO',
      currentSection: 1,
      exifData: Array<ExifData>(),
      innerHeight: innerHeight,
      fullScreenImages: Array<boolean>(),
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
  beforeUnmount() {
      window.removeEventListener("resize", this.updateInnerHeight);
      // fullPage.js sets `position: relative` and `height: 100%` on all
      // ancestors up to <body> in prepareDom(), but destroy('all') only
      // cleans the container itself. Clear the persistent ancestors so that
      // #app doesn't become the containing block for Home's absolute-
      // positioned carousels (which would collapse them off-screen).
      const container = document.getElementById('fullpage');
      if (container) {
          let el: HTMLElement | null = container.parentElement;
          while (el && el !== document.documentElement) {
              el.style.height = '';
              el.style.position = '';
              el = el.parentElement;
          }
      }
  },
  mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
            // fullPage init handled by component OR manual refresh
            }, 0);
        });
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
