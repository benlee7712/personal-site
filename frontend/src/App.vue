<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="mt-0 fixed w-full z-10 top-0 pt-2 md:pt-4">
    <div class="flex-wrap flex mx-auto" style="border-bottom: 1px solid #979797;">
      <div class="flex w-1/2 content-start justify-start pl-2 md:pl-8 lg:pl-16 pb-2 md:pb-4 z-15">
        <nav class="list-reset flex justify-between flex-none items-end">
          <div class="px-1 sm:px-3 md:px-6">
            <RouterLink class="px-[2px] md:px-2 text-sm sm:text-base md:text-lg lg:text-xl font-outfit link-highlight" to="/">PROJECTS</RouterLink>
          </div>
          <div class="px-[5rem] sm:px-[8rem] md:px-[12.5rem]">
            <RouterLink class="px-[2px] md:px-2 text-sm sm:text-base md:text-lg lg:text-xl font-outfit link-highlight" to="/about">ABOUT</RouterLink>
          </div>
          <div class="px-1 sm:px-3 md:px-6">
            <RouterLink class="px-[2px] md:px-2 text-sm sm:text-base md:text-lg lg:text-xl font-outfit link-highlight" to="/contact">CONTACT</RouterLink>
          </div>
        </nav>
      </div>
      <RouterLink to="/" class="flex w-1/2 justify-end content-end">
        <h1 class="flex flex-none justify-end pr-8 sm:pr-16 pb-2 md:pb-4 font-semibold font-oswald text-4xl md:text-7xl name-title">BEN LEE</h1>
      </RouterLink>
    </div>
  </header>
  <RouterView class="selection:bg-dusty_red"/>
</template>
