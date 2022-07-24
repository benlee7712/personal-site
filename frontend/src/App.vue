<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="mt-0 fixed w-full z-10 top-0 py-8 bg-white/40">
    <div class="flex-wrap flex mx-auto">
      <RouterLink to="/" class="flex w-1/2 justify-start content-start">
        <h1 class="flex flex-none justify-start pl-8 sm:pl-16 font-semibold font-rubik text-6xl md:text-8xl name-title">B<h1 class="font-semibold font-rubik text-6xl md:text-8xl hidden-title hidden lg:inline">en Lee</h1></h1>
      </RouterLink>
      <div class="flex w-1/2 content-center justify-end pr-2 md:pr-8 lg:pr-16 z-15">
        <nav class="list-reset flex justify-between flex-none items-center">
          <div class="px-1 sm:px-3 md:px-6 border-r-[1px] border-black">
            <RouterLink class="px-[2px] md:px-2 pb-[2px] text-base sm:text-lg md:text-xl lg:text-2xl font-open link-underline" to="/">Home</RouterLink>
          </div>
          <div class="px-1 sm:px-3 md:px-6 border-r-[1px] border-black">
            <RouterLink class="px-[2px] md:px-2 pb-[2px] text-base sm:text-lg md:text-xl lg:text-2xl font-open link-underline" to="/photography">Photography</RouterLink>
          </div>
          <div class="px-1 sm:px-3 md:px-6">
            <RouterLink class="px-[2px] md:px-2 pb-[2px] text-base sm:text-lg md:text-xl lg:text-2xl font-open link-underline" to="/contact-me">Contact Me</RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <RouterView class="selection:bg-coral"/>
</template>
