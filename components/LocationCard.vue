<script setup lang="ts">
// import { type Location } from "~/utils/types";
interface Location {
  id: string;
  image: string;
  name: string;
  address: string;
  avilableWeekdays: string[];
  email: string;
  phone: string;
  website: string;
  location: string;
}

const props = defineProps<Location>()
const weekdays = ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"]
</script>

<template>
  <div class="flex flex-col rounded-2xl md:rounded-3xl w-fit max-w-[25.5rem] bg-white overflow-hidden shadow-md">
    <NuxtImg :src="`/images/${image}.jpg`" :alt="name" :width="416" :height="234"
      class="rounded-b-2xl md:rounded-b-3xl w-full object-cover" />
    <div class="flex-1 flex flex-col p-2.5 md:p-3 gap-3">
      <h2 class="md:text-lg font-semi-bold line-clamp-1">{{ name }}</h2>
      <p class="flex-1 text-xs md:text-base">{{ address }}</p>
      <ul class="flex justify-between gap-1.5 md:gap-2 text-xs md:text-base">
        <li v-for="weekday in weekdays" :key="weekday"
          class="flex-1 flex items-center justify-center rounded-md border border-dashed p-1.5 md:p-2 aspect-[6/7]"
          :class="avilableWeekdays.includes(weekday) ? 'bg-primary-500' : 'bg-light-500'">
          {{ weekday }}
        </li>
      </ul>
      <div class="flex justify-between gap-3">
        <NuxtLink :href="`mailto:${email}`" target="_blank">
          <NuxtIcon name="email" class="text-[24px] md:text-[32px] hover:text-primary-500 transition-colors" />
        </NuxtLink>
        <NuxtLink :href="`tel:+91${phone}`" target="_blank">
          <NuxtIcon name="phone" class="text-[24px] md:text-[32px] hover:text-primary-500 transition-colors" />
        </NuxtLink>
        <NuxtLink class="ml-auto" :href="`https://maps.app.goo.gl/${location}`" target="_blank">
          <NuxtIcon name="map" class="text-[24px] md:text-[32px] hover:text-primary-500 transition-colors" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>