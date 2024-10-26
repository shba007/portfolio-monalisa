<script setup lang="ts">
// TODO: Refactor props type when supported
// import type { Workshop } from "~/utils/types";

interface Workshop {
  image: string
  name: string
  place: string
  address: string
  location: string
  formLink: string
  paymentLink: string
}

defineProps<Workshop>()
</script>

<template>
  <div class="flex w-full max-w-[25.5rem] flex-col overflow-hidden rounded-2xl bg-white shadow-md lg:rounded-3xl">
    <NuxtLink :to="`/workshops/${slugify(name)}`">
      <NuxtImg :src="`/images/${image}.jpg`" :alt="name" :width="416" :height="234" loading="lazy" class="w-full rounded-b-2xl object-cover lg:rounded-b-3xl" />
    </NuxtLink>
    <div class="flex flex-1 flex-col gap-3 p-2.5 lg:p-3">
      <h2 class="line-clamp-1 text-sm font-semi-bold lg:text-lg">{{ name }}</h2>
      <p class="flex-1 text-xs lg:text-base">{{ address }}</p>
      <div class="flex justify-between gap-3">
        <NuxtLink :href="`https://maps.app.goo.gl/${location}`" target="_blank">
          <NuxtIcon name="map" class="text-[24px] transition-colors hover:text-primary-500 lg:text-[32px]" />
        </NuxtLink>
        <NuxtLink :href="formLink" target="_blank" class="ml-auto rounded-lg bg-primary-500 px-3 py-1 transition-colors hover:bg-primary-400"> Register </NuxtLink>
        <NuxtLink :href="paymentLink" target="_blank" class="rounded-lg bg-primary-500 px-3 py-1 transition-colors hover:bg-primary-400"> Pay</NuxtLink>
      </div>
    </div>
  </div>
</template>
