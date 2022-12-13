<template>
    <body class="overflow-hidden">
        <Carousel id="project_titles" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
            <Slide v-for="[key, project] of projectData.entries()" :key="key"><div class="carousel__item">
                <h1 class="text-3xl md:text-3xl lg:text-5xl 2xl:text-7xl 2xl:mb-[-1rem] font-cormorant font-light italic w-fit">{{ project.country }}</h1>
                <h1 class="text-6xl md:text-[4.25rem] lg:text-7xl 2xl:text-10xl font-oswald float-left">{{ project.location }}</h1>
                <p class="text-xs md:text-sm 2xl:text-lg font-outfit font-medium text-dusty_red float-left pt-[2.8rem] sm:pt-[2.8rem] md:pt-[2.9rem] lg:pt-[3.7rem] 2xl:pt-[8.7rem] pl-1 md:pl-2">[{{ project.year }}]</p>
            </div></Slide>
        </Carousel>
        <div class="next-arrow fixed right-[5vw] bottom-[55vh] sm:bottom-[55vh] cursor-pointer" @click="slideTo(currentSlide + 1)">
            <img class="h-8 md:h-8 lg:h-10 2xl:h-16 px-2 float-right" src="@/assets/icons/next-arrow.svg">
            <h1 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-outfit font-medium float-right red-underline">ANOTHER</h1>
        </div>
        <Carousel
            id="thumbnails"
            :settings="thumbnailCarouselSettings"
            v-model="currentSlide"
            ref="carousel"
        >
            <Slide :key="0"><div class="carousel__item">
                <img src="@/assets/images/_MG_7395_browsable.jpg">
            </div></Slide>
            <Slide :key="1"><div class="carousel__item">
                <img src="@/assets/images/_MG_7015_browsable.jpg">
            </div></Slide>
            <Slide :key="2"><div class="carousel__item">
                <img src="@/assets/images/_MG_6320_browsable.jpg">
            </div></Slide>
        </Carousel>
        <div class="flex fixed bottom-0 sm:hidden w-full justify-center items-start h-[18vh] pt-[5vh]">
            <h1 class="text-lg font-outfit red-underline">SEE PROJECT</h1>
        </div>
    </body>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import { useMediaQuery } from '@vueuse/core'

import "../css/carousel.css"

const isDesktop = useMediaQuery('(min-width: 640px)')

const projectData = [
    {
        'location': 'CALIFORNIA',
        'country': 'USA',
        'year': '2022',
        'thumbnailImage': '_MG_7395_browsable.jpg',
    },
    {
        'location': 'CORFU',
        'country': 'GREECE',
        'year': '2022',
        'thumbnailImage': '_MG_7015_browsable.jpg',
    },
    {
        'location': 'SANTORINI',
        'country': 'GREECE',
        'year': '2022',
        'thumbnailImage': '_MG_6320_browsable.jpg',
    },
]

export default defineComponent({
  name: 'Projects',
  components: {
    Carousel,
    Slide,
    Navigator,
  },
  data: () => ({
    currentSlide: 0,
    thumbnailCarouselSettings: {
        itemsToShow: ((isDesktop.value) ? 2.25 : 1.4),
        wrapAround: true,
        snapAlign: ((isDesktop.value) ? 'start' : 'start'),
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
