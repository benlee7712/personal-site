<template>
    <body class="overflow-hidden">
        <Carousel id="project_titles" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
            <Slide v-for="[key, project] of projectData.entries()" :key="key"><div class="carousel__item">
                <h1 class="text-3xl md:text-3xl lg:text-[2.5rem] 2xl:text-6xl 2xl:mb-[-1rem] font-cormorant font-light italic w-fit">{{ project.country }}</h1>
                <h1 class="text-6xl md:text-[4.25rem] lg:text-7xl 2xl:text-10xl font-oswald float-left">{{ project.location }}</h1>
                <p class="text-xs md:text-sm 2xl:text-lg font-outfit font-medium text-dusty_red float-left pt-[2.8rem] sm:pt-[2.8rem] md:pt-[2.9rem] lg:pt-[3.7rem] 2xl:pt-[6.65rem] pl-1 md:pl-2">[{{ project.year }}]</p>
            </div></Slide>
        </Carousel>
        <div class="next-arrow absolute right-[5vw] bottom-[55vh] sm:bottom-[60vh] cursor-pointer" @click="slideTo(currentSlide + 1)">
            <img class="h-8 md:h-8 lg:h-10 2xl:h-16 px-2 float-right" src="@/assets/icons/next-arrow.svg">
            <h1 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-outfit font-medium float-right red-underline">ANOTHER</h1>
        </div>
        <Carousel
            id="thumbnails"
            :settings="thumbnailCarouselSettings"
            v-model="currentSlide"
            ref="carousel"
        >
            <Slide v-for="[key, project] of projectData.entries()" :key="key"><div class="carousel__item">
                <RouterLink :to="{ path: '/project', query: { title: projectData[key % projectData.length].location }}" class="relative inline-block">
                  <span class="text-overlay">
                    <h2 class="text-lg font-outfit link-underline">SEE PROJECT</h2>
                  </span>
                  <img :src="'images/' + project.imagePath">
                </RouterLink>
            </div></Slide>
        </Carousel>
        <RouterLink :to="{ path: '/project', query: { title: projectData[currentSlide % projectData.length].location }}" class="flex fixed bottom-0 w-full justify-center items-start sm:items-center h-[18vh] sm:h-[8vh] pt-[5vh] sm:pt-0">
            <h1 class="text-lg font-outfit red-underline">{{ `SEE THE ${projectData[currentSlide % projectData.length].location} PROJECT`}}</h1>
        </RouterLink>
    </body>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink} from "vue-router";
import { Carousel, Slide } from 'vue3-carousel'
import { useMediaQuery } from '@vueuse/core'

import "../css/carousel.css"
import imageData from "../constants/imageData"

const isDesktop = useMediaQuery('(min-width: 640px)')

const projectData = imageData.filter(image => image.isThumbnail === true)

export default defineComponent({
  name: 'Projects',
  components: {
    Carousel,
    Navigator,
    RouterLink,
    Slide,
  },
  data: () => ({
    currentSlide: 0,
    thumbnailCarouselSettings: {
        itemsToShow: ((isDesktop.value) ? 2.25 : 1.4),
        wrapAround: true,
        snapAlign: 'start',
    },
    projectData: projectData,
  }),
  methods: {
    slideTo(val: number) {
      this.currentSlide = val
    },
  },
})
</script>
