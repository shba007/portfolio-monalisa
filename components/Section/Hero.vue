<script setup lang="ts">
</script>

<template>
  <NuxtPicture src="/images/grid.svg" class="absolute top-[5%] right-0 -z-50 object-cover">
    <source media="(min-width: 1024px)" src="/images/grid.svg" />
    <source media="(min-width: 768px)" src="/images/grid.svg" />
    <source media="(min-width: 100px)" src="/images/grid.svg" />
  </NuxtPicture>
  <section id="hero"
    class="grid grid-flow-col grid-rows-[repeat(8,minmax(0,1fr))] md:grid-rows-[repeat(7,minmax(0,1fr))] grid-cols-5 md:gap-4">
    <div
      class="justify-self-start row-start-2 row-span-full col-start-1 col-span-2 relative hidden md:grid grid-rows-2 grid-cols-2 pr-16">
      <NuxtImg src="/images/person-before.png" alt="person-before"
        class="row-start-1 col-start-1 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 mix-blend-luminosity" />
      <NuxtImg src="/images/person-before.png" alt="person-before"
        class="row-start-1 col-start-1 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
      <NuxtImg src="/images/person-after.png" alt="person-after"
        class="row-start-2 col-start-2 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 mix-blend-luminosity" />
      <NuxtImg src="/images/person-after.png" alt="person-after"
        class="row-start-2 col-start-2 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
    </div>
    <div
      class="justify-self-center row-start-1 row-span-5 md:row-span-full col-start-1 md:col-start-2 col-span-full md:col-span-3 flex flex-col justify-center items-center gap-4 md:gap-5 text-center z-10 -translate-y-[15%]">
      <NuxtIcon name="logo" class="text-[160px] sm:text-[184px] -mb-6 md:-mb-8" filled />
      <h1 class="text-xl sm:text-4xl">Be Kind to Your Mind</h1>
      <p class="sm:text-lg tracking-wide !leading-[150%]">
        A clinical psychologist will help you <br>
        to regain the control of your life
      </p>
      <CTAButton />
    </div>
    <div
      class="justify-self-center md:justify-self-end row-start-4 md:row-start-2 row-span-full col-start-1 md:col-start-4 col-span-full md:col-span-2 relative grid grid-rows-2 grid-cols-2 mt-8 sm:mt-16 md:m-0 md:pl-16 max-w-xs md:max-w-max">
      <!-- TODO: change to NuxtImg -->
      <img src="/images/hero.png" alt="monalisa bairagi"
        class="row-start-1 row-span-full col-start-1 col-span-full aspect-[3/4] object-cover mix-blend-luminosity" />
      <img src="/images/hero.png" alt="monalisa bairagi"
        class="row-start-1 row-span-full col-start-1 col-span-full aspect-[3/4] object-cover opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
      <NuxtLink to="https://www.youtube.com/@mindful-healing-path"
        class="relative row-start-2 col-start-2 justify-items-start self-end z-10" target="__blank">
        <NuxtIcon name="youtube" class="text-[48px] text-light-600 hover:text-black/40 hover:transition-colors" />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
img[alt="monalisa bairagi"] {
  @apply [mask-image:url('assets/images/hero-mask.png')] [mask-size:100%] [mask-repeat:no-repeat] [mask-position:center]
}
</style>