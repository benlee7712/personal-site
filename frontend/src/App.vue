<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="mt-0 fixed w-full z-10 top-0 pt-2 lg:pt-3 xl:pt-4 bg-off_white">
    <div class="flex-wrap flex mx-auto" style="border-bottom: 1px solid #979797;">
      <div class="flex w-1/2 content-start justify-start pl-[calc(5vw-8px)] pb-2 lg:pb-3 xl:pb-4 z-15">
        <nav class="list-reset flex justify-between flex-none items-end">
          <div>
            <RouterLink class="mx-2 pb-0.5 text-2xs sm:text-xs lg:text-sm xl:text-base 2xl:text-xl font-outfit link-underline" to="/">PROJECTS</RouterLink>
          </div>
          <div class="px-[1.5rem] sm:px-[3rem] md:px-[4rem] xl:px-[8rem] 2xl:px-[12.5rem]">
            <RouterLink class="mx-2 pb-0.5 text-2xs sm:text-xs lg:text-sm xl:text-base 2xl:text-xl font-outfit link-underline" to="/about">ABOUT</RouterLink>
          </div>
          <div>
            <RouterLink class="mx-2 pb-0.5 text-2xs sm:text-xs lg:text-sm xl:text-base 2xl:text-xl font-outfit link-underline" to="/contact">CONTACT</RouterLink>
          </div>
        </nav>
      </div>
      <div class="flex flex-none w-1/2 justify-end content-end pr-[5vw] pb-2 lg:pb-3 xl:pb-4">
        <RouterLink to="/" class="font-semibold font-oswald text-4xl lg:text-5xl 2xl:text-7xl name-title">BEN LEE</RouterLink>
      </div>
    </div>
  </header>
  <RouterView class="selection:bg-dusty_red"/>
</template>
