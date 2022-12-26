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
              </div>
            </section>
        </full-page>
        <div class="fixed bottom-0 pb-[5vh] w-full text-center z-10 font-outfit font-semibold text-6xl">
            <h2>{{ String(currentSection).padStart(3, '0') }}</h2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import imageData from '../constants/imageData'


const FULLPAGE_LICENSE = process.env.FULLPAGE_LICENSE
let currentSection = 1


export default defineComponent({
  name: 'Project',
  computed: {
      title() {
          return this.$route.query.title
      }
  },
  data: () => ({
      imageData: imageData,
      licenseKey: '9KZA7-ETX07-241IK-0Q37I-JJORP',
      currentSection: currentSection,
  }),
  methods: {
      onLeave: function(origin: any, destination: any, direction: string, trigger: string) {
          this.currentSection = destination.index + 1
      }
  }
});
</script>
