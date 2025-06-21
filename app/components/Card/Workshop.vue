<script setup lang="ts">
import type { Workshop } from '~~/shared/types'

defineProps<Workshop>()
</script>

<template>
  <div class="flex aspect-[1.14] w-full max-w-[25.5rem] flex-col overflow-hidden rounded-2xl bg-white shadow-md lg:rounded-3xl">
    <NuxtLink :to="url">
      <NuxtImg :src="image" :alt="name" fit="cover" :width="416" :height="234" loading="lazy" class="aspect-video w-full rounded-b-2xl object-cover lg:rounded-b-3xl" />
    </NuxtLink>
    <div class="flex flex-1 flex-col gap-3 p-2.5 lg:p-3">
      <h2 class="line-clamp-1 text-sm font-semi-bold lg:text-lg">{{ name }}</h2>
      <p class="flex-1 text-xs lg:text-base">{{ address }}</p>
      <div class="flex justify-between gap-3">
        <NuxtLink :to="mapLink" target="_blank">
          <NuxtIcon name="local:map" class="text-[24px] transition-colors hover:fill-primary-500 lg:text-[32px]" />
        </NuxtLink>
        <NuxtLink v-if="registerLink" :to="registerLink" target="_blank" class="ml-auto rounded-lg bg-primary-500 px-3 py-1 transition-colors hover:bg-primary-400">Register</NuxtLink>
        <NuxtLink v-if="paymentLink" :to="paymentLink" target="_blank" class="rounded-lg bg-primary-500 px-3 py-1 transition-colors hover:bg-primary-400">Pay</NuxtLink>
        <NuxtLink v-if="feedbackLink" :to="feedbackLink" target="_blank" class="rounded-lg bg-primary-500 px-3 py-1 transition-colors hover:bg-primary-400">Feedback</NuxtLink>
      </div>
    </div>
  </div>
</template>
