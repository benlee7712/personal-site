<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="mt-0 fixed w-full z-10 top-0 py-8">
    <div class="flex-wrap flex mx-auto">
      <div class="flex w-1/2 content-start justify-start pl-2 md:pl-8 lg:pl-16 z-15">
        <nav class="list-reset flex justify-between flex-none items-center">
          <div class="px-1 sm:px-3 md:px-6 border-r-[1px] border-black">
            <RouterLink class="px-[2px] md:px-2 pb-[2px] text-base sm:text-lg md:text-xl lg:text-2xl font-open link-highlight" to="/">Home</RouterLink>
          </div>
          <div class="px-1 sm:px-3 md:px-6 border-r-[1px] border-black">
            <RouterLink class="px-[2px] md:px-2 pb-[2px] text-base sm:text-lg md:text-xl lg:text-2xl font-open link-highlight" to="/photography">Photography</RouterLink>
          </div>
          <div class="px-1 sm:px-3 md:px-6">
            <RouterLink class="px-[2px] md:px-2 pb-[2px] text-base sm:text-lg md:text-xl lg:text-2xl font-open link-highlight" to="/contact-me">Contact Me</RouterLink>
          </div>
        </nav>
      </div>
      <RouterLink to="/" class="flex w-1/2 justify-end content-end">
        <h1 class="flex flex-none justify-end pr-8 sm:pr-16 font-semibold font-oswald text-6xl md:text-8xl name-title">BEN LEE</h1>
      </RouterLink>
    </div>
  </header>
  <RouterView class="selection:bg-dusty_red"/>
</template>
