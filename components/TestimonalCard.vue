<script setup lang="ts">
const { image, name, message } = defineProps<{
  image: string,
  name: string,
  message: string
}>()
</script>

<template>
  <div class="relative w-[calc(100vw-2rem)] max-w-[364px] md:max-w-[422px] lg:max-w-[480px] aspect-[5/3] py-16 mx-8">
    <div class="card left-0 -translate-x-4 md:-translate-x-8 w-[81%]" />
    <div class="card right-0 translate-x-4 md:translate-x-8 w-[81%]" />
    <div class="card left-0 -translate-x-2 md:-translate-x-4 w-[90%]" />
    <div class="card right-0 translate-x-2 md:translate-x-4 w-[90%]" />
    <div
      class="flex flex-col justify-start items-center gap-2 md:gap-6 rounded-3xl md:rounded-[2rem] p-6 md:p-16 w-full aspect-[5/3] text-center bg-white drop-shadow-md">
      <NuxtImg :src="image" :alt="name" loading="lazy"
        class="absolute top-0 -translate-y-1/2 w-20 md:w-24 aspect-[0.86] object-cover" />
      <h3 class="mt-10 text-xl text-primary-600 font-semi-bold">{{ name }}</h3>
      <p class="text-sm md:text-lg tracking-wide leading-[150%]">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply absolute top-1/2 -translate-y-1/2 rounded-3xl md:rounded-[2rem] aspect-[5/3] bg-white drop-shadow-lg opacity-40;
}

img {
  clip-path: polygon(50.093% 0.755%, 50.093% 0.755%, 56.969% 1.252%, 63.403% 2.756%, 69.379% 5.164%, 74.88% 8.372%, 79.891% 12.277%, 84.395% 16.774%, 88.377% 21.759%, 91.819% 27.13%, 94.707% 32.781%, 97.023% 38.61%, 97.023% 38.61%, 98.512% 44.034%, 99.268% 49.481%, 99.3% 54.896%, 98.616% 60.225%, 97.222% 65.412%, 95.128% 70.404%, 92.341% 75.145%, 88.868% 79.579%, 84.717% 83.654%, 79.896% 87.313%, 79.896% 87.313%, 74.034% 90.85%, 67.813% 93.885%, 61.321% 96.359%, 54.646% 98.209%, 47.876% 99.375%, 41.098% 99.796%, 34.402% 99.411%, 27.875% 98.158%, 21.604% 95.977%, 15.678% 92.807%, 15.678% 92.807%, 10.669% 88.911%, 6.75% 84.462%, 3.84% 79.545%, 1.86% 74.245%, 0.732% 68.646%, 0.375% 62.835%, 0.711% 56.894%, 1.661% 50.91%, 3.145% 44.968%, 5.085% 39.151%, 5.085% 39.151%, 7.459% 33.419%, 10.283% 27.806%, 13.567% 22.426%, 17.318% 17.39%, 21.544% 12.812%, 26.254% 8.806%, 31.456% 5.484%, 37.158% 2.96%, 43.367% 1.346%, 50.093% 0.755%);
}
</style>