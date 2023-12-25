<script setup lang="ts">
import personBefore from "~~/assets/images/person-before.png";
import personAfter from "~~/assets/images/person-after.png";
</script>

<template>
  <picture class="absolute -top-7 md:-top-[5.5rem] bottom-0 left-0 md:-left-4 right-0 md:-right-4 -z-50 object-cover">
    <source src="/images/grid.svg" media="(min-width: 1024px)" />
    <source src="/images/grid.svg" media="(min-width: 768px)" />
    <source src="/images/grid.svg" media="(min-width: 100px)" />
    <NuxtImg src="/images/grid.svg" alt="Hero Grid" class="w-full" />
  </picture>
  <section id="hero"
    class="grid grid-flow-col grid-rows-[repeat(8,minmax(0,1fr))] md:grid-rows-[repeat(7,minmax(0,1fr))] grid-cols-5 md:gap-4">
    <div
      class="justify-self-start row-start-2 row-span-full col-start-1 col-span-2 relative hidden md:grid grid-rows-2 grid-cols-2 pr-16">
      <img :src="personBefore" alt="person-before"
        class="row-start-1 col-start-1 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 mix-blend-luminosity" />
      <img :src="personBefore" alt="person-before"
        class="row-start-1 col-start-1 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
      <img :src="personAfter" alt="person-after"
        class="row-start-2 col-start-2 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 mix-blend-luminosity" />
      <img :src="personAfter" alt="person-after"
        class="row-start-2 col-start-2 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
    </div>
    <div
      class="justify-self-center row-start-1 row-span-5 md:row-span-full col-start-1 md:col-start-2 col-span-full md:col-span-3 flex flex-col justify-center items-center gap-3 md:gap-4 text-center z-50 -translate-y-[15%]">
      <NuxtIcon name="logo" class="text-[160px] sm:text-[184px] -mb-6 md:-mb-8" filled />
      <h1 class="text-xl sm:text-4xl">Be Kind to Your Mind</h1>
      <p class="sm:text-lg tracking-wide !leading-[150%]">
        A world-class psychologist will help you <br>
        to regain the control of your life
      </p>
      <button
        class="sm:my-2 border-2 md:border-4 border-primary-400 rounded-full px-[1.125rem] sm:px-7 py-1 sm:py-3 text-white sm:text-lg tracking-wide leading-9 bg-primary-500">
        Get Appointment
      </button>
    </div>
    <div
      class="justify-self-center md:justify-self-end row-start-4 md:row-start-2 row-span-full col-start-1 md:col-start-4 col-span-full md:col-span-2 relative grid grid-rows-2 grid-cols-2 mt-8 sm:mt-16 md:m-0 md:pl-16 max-w-xs md:max-w-max">
      <img src="assets/images/hero.png" alt="monalisa bairagi"
        class="row-start-1 row-span-full col-start-1 col-span-full aspect-[3/4] object-cover mix-blend-luminosity" />
      <img src="assets/images/hero.png" alt="monalisa bairagi"
        class="row-start-1 row-span-full col-start-1 col-span-full aspect-[3/4] object-cover opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
      <NuxtLink to="https://www.youtube.com/@mindful-healing-path"
        class="relative row-start-2 col-start-2 justify-items-start self-end z-10" target="__blank">
        <NuxtIcon name="youtube" class="text-[48px] text-light-600" />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
img[alt="monalisa bairagi"] {
  -webkit-mask-image: url('assets/images/hero-mask.png');
  mask-image: url('assets/images/hero-mask.png');
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}
</style>