<script setup lang="ts">
import arrow from "@/assets/images/arrow-1.svg?raw";

const emit = defineEmits<{ (event: 'contact'): void }>()

const counter = useInterval(4000)
const person = computed(() => counter.value % 2 + 1)
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
      <Transition name="fade">
        <img :src="`/images/person-${person}-before.jpg`" :alt="`person-${person}-before`"
          :key="`person-${person}-before`"
          class="row-start-1 col-start-1 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 mix-blend-luminosity" />
      </Transition>
      <Transition name="fade">
        <img :src="`/images/person-${person}-before.jpg`" :alt="`person-${person}-before`"
          :key="`person-${person}-before`"
          class="row-start-1 col-start-1 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
      </Transition>
      <Transition name="fade">
        <img :src="`/images/person-${person}-after.jpg`" :alt="`person-${person}-after`" :key="`person-${person}-after`"
          class="row-start-2 col-start-2 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 mix-blend-luminosity" />
      </Transition>
      <Transition name="fade">
        <img :src="`/images/person-${person}-after.jpg`" :alt="`person-${person}-after`" :key="`person-${person}-after`"
          class="row-start-2 col-start-2 rounded-2xl w-[250px] aspect-[3/4] object-cover bg-light-500 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
      </Transition>
    </div>
    <div
      class="justify-self-center self-start row-start-1 row-span-5 md:row-span-full col-start-1 md:col-start-2 col-span-full md:col-span-3 flex flex-col justify-center items-center gap-4 md:gap-6 text-center z-10">
      <NuxtIcon name="logo" class="text-[144px] lg:text-[184px] -mb-6 md:-mb-8" filled />
      <h1 class="text-xl md:text-3xl lg:text-4xl">Be Kind to Your Mind</h1>
      <p class="max-w-[35rem] text-sm md:text-base lg:text-lg tracking-wide !leading-[150%]">
        A RCI approved clinical psychologist will help you by
        providing counseling sessions with a range of therapeutic
        approaches tailored to your unique needs
      </p>
      <CTAButton @click="emit('contact')" />
    </div>
    <div
      class="justify-self-center md:justify-self-end row-start-4 md:row-start-2 row-span-full col-start-1 md:col-start-4 col-span-full md:col-span-2 relative grid grid-rows-2 grid-cols-2 mt-8 sm:mt-16 md:m-0 md:pl-16 max-w-xs md:max-w-max">
      <!-- TODO: change to NuxtImg -->
      <img src="/images/hero.jpg" alt="monalisa bairagi"
        class="row-start-1 row-span-full col-start-1 col-span-full aspect-[3/4] object-cover mix-blend-luminosity" />
      <img src="/images/hero.jpg" alt="monalisa bairagi"
        class="row-start-1 row-span-full col-start-1 col-span-full aspect-[3/4] object-cover opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out" />
      <h3
        class="relative row-start-2 col-start-2 justify-self-center self-start text-base md:text-xl font-semi-bold font-sub -rotate-[15deg] translate-y-[80%] md:translate-y-full">
        Stay healthy with<br />mental wellness
      </h3>
      <div v-html="arrow"
        class="relative row-start-2 col-start-2 justify-self-center self-center w-14 md:w-20 translate-y-1/3 opacity-50" />
      <NuxtLink to="https://www.youtube.com/@mindful-healing-path"
        class="relative row-start-2 col-start-2 justify-self-start self-end z-10" target="__blank" aria-label="youtube">
        <NuxtIcon name="youtube"
          class="text-[40px] md:text-[48px] text-light-600 hover:text-dark-600 hover:transition-colors" />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
img[alt="monalisa bairagi"] {
  @apply [mask-image:url('assets/images/hero-mask.png')] [mask-size:100%] [mask-repeat:no-repeat] [mask-position:center]
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-[2s];
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>