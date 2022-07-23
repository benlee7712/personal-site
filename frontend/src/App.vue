<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="mt-0 fixed w-full z-10 top-0 py-8">
    <div class="flex-wrap flex mx-auto">
      <div class="flex w-1/2 justify-start content-start">
        <h1 class="flex flex-none justify-start pl-16 text-slate-500 font-semibold font-rubik text-6xl md:text-8xl name-title">B<h1 class="text-slate-500 font-semibold font-rubik text-6xl md:text-8xl hidden-title inline">EN LEE</h1></h1>
      </div>
      <div class="flex w-1/2 content-center justify-end pr-2 md:pr-8 lg:pr-16">
        <nav class="list-reset flex justify-between flex-none items-center">
          <div class="px-5 md:px-8">
            <RouterLink class="text-base md:text-lg lg:text-2xl font-open link-underline" to="/">Home</RouterLink>
          </div>
          <div class="px-5 md:px-8">
            <RouterLink class="text-base md:text-lg lg:text-2xl font-open link-underline" to="/photography">Photography</RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>
