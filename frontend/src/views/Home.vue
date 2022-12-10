<template>
    <body>
        <Carousel id="project_titles" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
            <Slide :key="0"><div class="carousel__item">
                <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-cormorant font-light w-fit">LOS</h1>
                <div class="inline-block">
                    <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-oswald">ANGELES</h1>
                    <p class="text-lg font-outfit font-medium text-dusty_red">[2022]</p>
                </div>
            </div></Slide>
            <Slide :key="1"><div class="carousel__item">
                <h1 class="text-lg sm:text-xl md:text-4xl lg:text-9xl font-oswald">CORFU</h1>
            </div></Slide>
            <Slide :key="2"><div class="carousel__item">
                <h1 class="text-lg sm:text-xl md:text-4xl lg:text-9xl font-oswald">SICILY</h1>
            </div></Slide>
            <Slide :key="3"><div class="carousel__item">
                <h1 class="text-lg sm:text-xl md:text-4xl lg:text-9xl font-oswald">NEW YORK</h1>
            </div></Slide>
            <Slide :key="4"><div class="carousel__item">
                <h1 class="text-lg sm:text-xl md:text-4xl lg:text-9xl font-oswald">BERLIN, GERMANY</h1>
            </div></Slide>
            <Slide :key="5"><div class="carousel__item">
                <h1 class="text-lg sm:text-xl md:text-4xl lg:text-9xl font-oswald">CORNWALL</h1>
            </div></Slide>
            <Slide :key="6"><div class="carousel__item">
                <h1 class="text-lg sm:text-xl md:text-4xl lg:text-9xl font-oswald">SANTORINI</h1>
            </div></Slide>
            <Slide :key="7"><div class="carousel__item">
                <h1 class="text-lg sm:text-xl md:text-4xl lg:text-9xl font-oswald">JAPAN</h1>
            </div></Slide>
            <Slide :key="8"><div class="carousel__item">
                <h1 class="text-lg sm:text-xl md:text-4xl lg:text-9xl font-oswald">FIJI</h1>
            </div></Slide>
        </Carousel>

        <Carousel
            id="thumbnails"
            :items-to-show="2.5"
            :wrap-around="true"
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
                <img src="@/assets/images/_MG_7246_browsable.jpg">
            </div></Slide>
            <Slide :key="3"><div class="carousel__item">
                <img src="@/assets/images/_MG_7407_browsable.jpg">
            </div></Slide>
            <Slide :key="4"><div class="carousel__item">
                <img src="@/assets/images/_MG_7571_browsable.jpg">
            </div></Slide>
            <Slide :key="5"><div class="carousel__item">
                <img src="@/assets/images/_MG_7741_browsable.jpg">
            </div></Slide>
            <Slide :key="6"><div class="carousel__item">
                <img src="@/assets/images/_MG_6478_browsable.jpg">
            </div></Slide>
            <Slide :key="7"><div class="carousel__item">
                <img src="@/assets/images/_MG_6320_browsable.jpg">
            </div></Slide>
            <Slide :key="8"><div class="carousel__item">
                <img src="@/assets/images/_MG_7715_browsable.jpg">
            </div></Slide>
        </Carousel>
    </body>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import "../css/carousel.css"

export default defineComponent({
  name: 'Projects',
  components: {
    Carousel,
    Slide,
    Navigator,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val: number) {
      this.currentSlide = val
    },
  },
})
</script>
