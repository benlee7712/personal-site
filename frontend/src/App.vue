<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="mt-0 fixed w-full z-10 top-0 pt-2 md:pt-4">
    <div class="flex-wrap flex mx-auto" style="border-bottom: 1px solid #979797;">
      <div class="flex w-1/2 content-start justify-start pl-2 md:pl-8 lg:pl-16 pb-2 md:pb-4 z-15">
        <nav class="list-reset flex justify-between flex-none items-end">
          <div class="px-1 sm:px-3 md:px-4 lg:px-6">
            <RouterLink class="px-[2px] md:px-2 text-2xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-outfit link-highlight" to="/">PROJECTS</RouterLink>
          </div>
          <div class="px-[1.5rem] sm:px-[3rem] md:px-[4rem] xl:px-[8rem] 2xl:px-[12.5rem]">
            <RouterLink class="px-[2px] md:px-2 text-2xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-outfit link-highlight" to="/about">ABOUT</RouterLink>
          </div>
          <div class="px-1 sm:px-3 md:px-6">
            <RouterLink class="px-[2px] md:px-2 text-2xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-outfit link-highlight" to="/contact">CONTACT</RouterLink>
          </div>
        </nav>
      </div>
      <div class="flex flex-none w-1/2 justify-end content-end pr-4 sm:pr-8 md:pr-16 pb-2 md:pb-4">
        <RouterLink to="/" class="font-semibold font-oswald text-4xl md:text-5xl xl:text-7xl name-title">BEN LEE</RouterLink>
      </div>
    </div>
  </header>
  <RouterView class="selection:bg-dusty_red"/>
</template>
