<script setup lang="ts">
import heroGrid from "~~/assets/images/grid.svg";
import personBefore from "~~/assets/images/person-before.png";
import personAfter from "~~/assets/images/person-after.png";
import heroImg from "~~/assets/images/hero.png";
</script>

<template>
  <picture class="absolute -top-20 bottom-0 -left-4 right-4 lg:left-auto -z-50 object-cover">
    <source :srcset="heroGrid" media="(min-width: 1024px)" />
    <source :srcset="heroGrid" media="(min-width: 768px)" />
    <source :srcset="heroGrid" media="(min-width: 100px)" />
    <NuxtImg :src="heroGrid" alt="Hero Grid" />
  </picture>
  <section id="hero" class="grid grid-flow-col grid-rows-[repeat(7,minmax(0,1fr))] grid-cols-5 gap-4">
    <div
      class="justify-self-start row-start-2 row-span-full col-start-1 col-span-2 relative grid grid-rows-2 grid-cols-2 pr-16 mix-blend-luminosity">
      <img :src="personBefore" alt="person-before"
        class="row-start-1 col-start-1 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500" />
      <img :src="personAfter" alt="person-after"
        class="row-start-2 col-start-2 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500" />
    </div>
    <div
      class="justify-self-center row-start-1 row-span-full col-start-2 col-span-3 flex flex-col justify-center items-center gap-4 text-center z-50 -translate-y-[15%]">
      <NuxtIcon name="logo" class="text-[184px] -mb-8" filled />
      <h1 class="text-5xl">Be Kind to Your Mind</h1>
      <p class="text-xl tracking-wide leading-9">
        A world-class psychologist will help you <br>
        to regain the control of your life
      </p>
      <button
        class="my-2 border-4 border-primary-400 rounded-full px-7 py-3 text-white text-xl tracking-wide leading-9 bg-primary-500">
        Get Appointment
      </button>
    </div>
    <div
      class="justify-self-end row-start-2 row-span-full col-start-4 col-span-2 relative grid grid-rows-2 grid-cols-2 pl-16 mix-blend-luminosity">
      <img :src="heroImg" alt="monalisa bairagi"
        class="row-start-1 row-span-full col-start-1 col-span-full aspect-[3/4] object-cover" />
      <NuxtIcon name="youtube" class="row-start-2 col-start-2 justify-items-start self-end text-[48px] text-light-600" />
    </div>
  </section>
</template>