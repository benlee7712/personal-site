<template>
    <body>
        <Carousel id="project_titles" :items-to-show="4" :wrap-around="false" v-model="currentSlide">
            <Slide v-for="slide in 9" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
            </Slide>
        </Carousel>

        <Carousel
            id="thumbnails"
            :items-to-show="2.5"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
        >
            <Slide :key="1"><div class="carousel__item">
                <img src="@/assets/images/_MG_7395_browsable.jpg">
            </div></Slide>
            <Slide :key="2"><div class="carousel__item">
                <img src="@/assets/images/_MG_7015_browsable.jpg">
            </div></Slide>
            <Slide :key="3"><div class="carousel__item">
                <img src="@/assets/images/_MG_7246_browsable.jpg">
            </div></Slide>
            <Slide :key="4"><div class="carousel__item">
                <img src="@/assets/images/_MG_7407_browsable.jpg">
            </div></Slide>
            <Slide :key="5"><div class="carousel__item">
                <img src="@/assets/images/_MG_7571_browsable.jpg">
            </div></Slide>
            <Slide :key="6"><div class="carousel__item">
                <img src="@/assets/images/_MG_7741_browsable.jpg">
            </div></Slide>
            <Slide :key="7"><div class="carousel__item">
                <img src="@/assets/images/_MG_6478_browsable.jpg">
            </div></Slide>
            <Slide :key="8"><div class="carousel__item">
                <img src="@/assets/images/_MG_6320_browsable.jpg">
            </div></Slide>
            <Slide :key="9"><div class="carousel__item">
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
