<script setup lang="ts">
import arrow from '@/assets/images/arrow-1.svg?raw'

const emit = defineEmits<{ (event: 'contact'): void }>()

const counter = useInterval(4000)
const person = computed(() => (counter.value % 2) + 1)
</script>

<template>
  <NuxtImg src="/images/grid.svg" class="absolute right-0 top-[5%] -z-50 object-cover" aria-hidden="true" />
  <section id="hero" class="grid grid-flow-col grid-cols-5 grid-rows-[repeat(8,minmax(0,1fr))] lg:grid-rows-[repeat(7,minmax(0,1fr))] lg:gap-4">
    <div class="relative col-span-2 col-start-1 row-span-full row-start-2 hidden grid-cols-2 grid-rows-2 justify-self-start pr-16 lg:grid">
      <TransitionGroup name="fade">
        <NuxtImg
          :key="`person-${person}-before`"
          :src="`/images/person-${person}-before.jpg`"
          :alt="`person-${person}-before`"
          :width="250"
          loading="lazy"
          class="col-start-1 row-start-1 aspect-[3/4] rounded-2xl bg-light-500 object-cover grayscale hover:grayscale-0" />
        <NuxtImg
          :key="`person-${person}-after`"
          :src="`/images/person-${person}-after.jpg`"
          :alt="`person-${person}-after`"
          :width="250"
          loading="lazy"
          class="col-start-2 row-start-2 aspect-[3/4] rounded-2xl bg-light-500 object-cover grayscale hover:grayscale-0" />
      </TransitionGroup>
    </div>
    <div
      class="z-10 col-span-full col-start-1 row-span-5 row-start-1 flex flex-col items-center justify-center gap-4 self-start justify-self-center text-center lg:col-span-3 lg:col-start-2 lg:row-span-full lg:gap-6">
      <NuxtIcon name="logo" class="-mb-6 text-[144px] lg:-mb-8 lg:text-[160px]" filled />
      <h1 class="text-xl lg:text-3xl xl:text-4xl">Be Kind to Your Mind</h1>
      <p class="max-w-[35rem] text-sm !leading-[150%] tracking-wide lg:text-base">
        A RCI registered clinical psychologist will help you by providing counseling sessions with a range of therapeutic approaches tailored to your unique needs
      </p>
      <CTAButton @click="emit('contact')" />
    </div>
    <div
      class="relative col-span-full col-start-1 row-span-full row-start-4 mt-8 grid max-w-xs grid-cols-2 grid-rows-2 justify-self-center sm:mt-16 lg:col-span-2 lg:col-start-4 lg:row-start-2 lg:m-0 lg:max-w-max lg:justify-self-end lg:pl-16">
      <NuxtImg
        src="/images/hero.jpg"
        alt="monalisa bairagi"
        :width="512"
        loading="lazy"
        class="col-span-full col-start-1 row-span-full row-start-1 aspect-[3/4] object-cover grayscale hover:grayscale-0" />
      <h2 class="relative col-start-2 row-start-2 translate-y-[80%] -rotate-[15deg] self-start justify-self-center font-sub text-base font-semi-bold lg:translate-y-full lg:text-xl">
        Stay healthy with<br />mental wellness
      </h2>
      <div class="relative col-start-2 row-start-2 w-14 translate-y-1/3 self-center justify-self-center opacity-50 lg:w-20" v-html="arrow" />
      <NuxtLink to="https://www.youtube.com/@mindful-healing-path" class="relative z-10 col-start-2 row-start-2 self-end justify-self-start" target="__blank" aria-label="youtube">
        <NuxtIcon name="youtube" class="text-[40px] text-light-600 hover:text-dark-600 hover:transition-colors lg:text-[48px]" />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
img[alt='monalisa bairagi'] {
  @apply [mask-image:url('assets/images/hero-mask.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%];
}

img {
  -webkit-transition: 1s -webkit-filter ease-out;
  -moz-transition: 1s -moz-filter ease-out;
  -moz-transition: 1s filter ease-out;
  -ms-transition: 1s -ms-filter ease-out;
  -o-transition: 1s -o-filter ease-out;
  transition:
    1s filter ease-out,
    1s -webkit-filter ease-out,
    2s opacity ease-in-out;
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
