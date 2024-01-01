<script setup lang="ts">
const { image, name, message } = defineProps<{
  image: string,
  name: string,
  message: string
}>()
</script>

<template>
  <div class="relative w-[calc(100vw-2rem)] max-w-[500px] aspect-[5/3] py-16 mx-8">
    <div class="card left-0 -translate-x-4 md:-translate-x-8 w-[81%]" />
    <div class="card right-0 translate-x-4 md:translate-x-8 w-[81%]" />
    <div class="card left-0 -translate-x-2 md:-translate-x-4 w-[90%]" />
    <div class="card right-0 translate-x-2 md:translate-x-4 w-[90%]" />
    <div
      class="flex flex-col justify-center items-center gap-6 rounded-3xl md:rounded-[2rem] p-6 md:p-16 w-full aspect-[5/3] text-center bg-white drop-shadow-md">
      <NuxtImg :src="image" :alt="name" class="absolute top-0 -translate-y-1/2 w-20 md:w-24" />
      <h4 class="text-xl text-primary-600 font-semi-bold">{{ name }}</h4>
      <p class="text-sm md:text-lg tracking-wide leading-[150%]">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply absolute top-1/2 -translate-y-1/2 rounded-3xl md:rounded-[2rem] aspect-[5/3] bg-white drop-shadow-lg opacity-40;
}

img {
  @apply [mask-image:url('assets/images/testimonial-mask.png')] [mask-size:85%] [mask-repeat:no-repeat] [mask-position:center]
}
</style>