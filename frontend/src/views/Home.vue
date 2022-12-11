<template>
    <body>
        <Carousel id="project_titles" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
            <Slide :key="0"><div class="carousel__item">
                <h1 class="text-3xl sm:text-[2.5rem] md:text-5xl 2xl:text-7xl 2xl:mb-[-1rem] font-cormorant font-light w-fit">USA</h1>
                <h1 class="text-6xl sm:text-6xl md:text-7xl 2xl:text-9xl font-oswald float-left">CALIFORNIA</h1>
                <p class="text-xs md:text-sm 2xl:text-lg font-outfit font-medium text-dusty_red float-left pt-[2.8rem] sm:pt-[2.8rem] md:pt-[3.7rem] 2xl:pt-[8.7rem] pl-1 md:pl-2">[2022]</p>
            </div></Slide>
            <Slide :key="2"><div class="carousel__item">
                <h1 class="text-3xl sm:text-[2.5rem] md:text-5xl 2xl:text-7xl 2xl:mb-[-1rem] font-cormorant font-light w-fit">GREECE</h1>
                <h1 class="text-6xl sm:text-6xl md:text-7xl 2xl:text-9xl font-oswald float-left">CORFU</h1>
                <p class="text-xs md:text-sm 2xl:text-lg font-outfit font-medium text-dusty_red float-left pt-[2.8rem] sm:pt-[2.8rem] md:pt-[3.7rem] 2xl:pt-[8.7rem] pl-1 md:pl-2">[2022]</p>
            </div></Slide>
            <Slide :key="2"><div class="carousel__item">
                <h1 class="text-3xl sm:text-[2.5rem] md:text-5xl 2xl:text-7xl 2xl:mb-[-1rem] font-cormorant font-light w-fit">GREECE</h1>
                <h1 class="text-6xl sm:text-6xl md:text-7xl 2xl:text-9xl font-oswald float-left">SANTORINI</h1>
                <p class="text-xs md:text-sm 2xl:text-lg font-outfit font-medium text-dusty_red float-left pt-[2.8rem] sm:pt-[2.8rem] md:pt-[3.7rem] 2xl:pt-[8.7rem] pl-1 md:pl-2">[2022]</p>
            </div></Slide>
        </Carousel>
        <div class="next-arrow fixed link-highlight right-[5vw] bottom-[56vh] sm:bottom-[60vh] cursor-pointer" @click="slideTo(currentSlide + 1)">
            <img class="h-8 md:h-10 2xl:h-16 px-2 float-right" src="@/assets/icons/next-arrow.svg">
            <h1 class="text-2xl md:text-4xl 2xl:text-6xl font-outfit font-medium float-right pl-2">ANOTHER</h1>
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
    </body>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import { useMediaQuery } from '@vueuse/core'

import "../css/carousel.css"

const isDesktop = useMediaQuery('(min-width: 640px)')
console.log(isDesktop.value)

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
        itemsToShow: ((isDesktop.value) ? 2.25 : 1.5),
        wrapAround: true,
        snapAlign: ((isDesktop.value) ? 'center' : 'start'),
    },
  }),
  methods: {
    slideTo(val: number) {
      this.currentSlide = val
    },
  },
})
</script>
