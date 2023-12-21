<script setup lang="ts">
const { image, name, message } = defineProps<{
  image: string,
  name: string,
  message: string
}>()
</script>

<template>
  <div class="relative w-[500px] aspect-[5/3] py-16 ">
    <div class="card left-0 -translate-x-8 w-[405px]" />
    <div class="card right-0 translate-x-8 w-[405px]" />
    <div class="card left-0 -translate-x-4 w-[450px]" />
    <div class="card right-0 translate-x-4 w-[450px]" />
    <div
      class="flex flex-col justify-center items-center gap-6 rounded-[2rem] p-16 w-full aspect-[5/3] text-center bg-white drop-shadow-md">
      <img :src="image" alt="aarushi kaur" class="absolute top-0 -translate-y-1/2 w-24 ">
      <h4 class="text-xl text-primary-600 font-semi-bold">{{ name }}</h4>
      <p class="text-lg tracking-wide leading-[150%]">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply absolute top-1/2 -translate-y-1/2 rounded-[2rem] aspect-[5/3] bg-white drop-shadow-lg opacity-40;
}

img {
  -webkit-mask-image: url('assets/images/testimonial-mask.png');
  mask-image: url('assets/images/testimonial-mask.png');
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}
</style>