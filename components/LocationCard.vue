<script setup lang="ts">
// import { type Location } from "~/utils/types";

interface Location {
  id: string
  image: string
  name: string
  address: string
  avilableWeekdays: string[]
  email: string
  phone: string
  website: string
  location: string
}

defineProps<Location>()
const weekdays = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun']
</script>

<template>
  <div
    class="flex w-fit scale-75 md:scale-90 xl:scale-100 max-w-[25.5rem] flex-col overflow-hidden rounded-2xl bg-white shadow-md lg:rounded-3xl">
    <NuxtImg :src="`/images/${image}.jpg`" :alt="name" :width="416" :height="234"
      class="w-full rounded-b-2xl object-cover lg:rounded-b-3xl" />
    <div class="flex flex-1 flex-col gap-3 p-2.5 lg:p-3">
      <h2 class="line-clamp-1 font-semi-bold lg:text-lg">{{ name }}</h2>
      <p class="flex-1 text-xs lg:text-base">{{ address }}</p>
      <ul class="flex justify-between gap-1.5 text-xs lg:gap-2 lg:text-base">
        <li v-for="weekday in weekdays" :key="weekday"
          class="flex aspect-[6/7] flex-1 items-center justify-center rounded-md border border-dashed p-1.5 lg:p-2"
          :class="avilableWeekdays.includes(weekday) ? 'bg-primary-500' : 'bg-light-500'">
          {{ weekday }}
        </li>
      </ul>
      <div class="flex justify-between gap-3">
        <NuxtLink :href="`mailto:${email}`" target="_blank">
          <NuxtIcon name="email" class="text-[24px] transition-colors hover:text-primary-500 lg:text-[32px]" />
        </NuxtLink>
        <NuxtLink :href="`tel:+91${phone}`" target="_blank">
          <NuxtIcon name="phone" class="text-[24px] transition-colors hover:text-primary-500 lg:text-[32px]" />
        </NuxtLink>
        <NuxtLink class="ml-auto" :href="`https://maps.app.goo.gl/${location}`" target="_blank">
          <NuxtIcon name="map" class="text-[24px] transition-colors hover:text-primary-500 lg:text-[32px]" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
