<template>
    <full-page :options="options">
        <section v-for="[key, image] in imageData.filter(image => image.location === title).entries()" :key="key" class="w-full h-screen px-[5vw] flex justify-center items-center section">
            <div>
                <img :src="'images/' + image.imagePath" class="max-w-full max-h-[50vh]">
            </div>
        </section>
    </full-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import imageData from '../constants/imageData'


const FULLPAGE_LICENSE = process.env.FULLPAGE_LICENSE

export default defineComponent({
  name: 'Project',
  computed: {
    title() {
        return this.$route.query.title
    }
  },
  data: () => ({
    imageData: imageData,
    options: {
        licenseKey: FULLPAGE_LICENSE,
    }
  }),
});
</script>
