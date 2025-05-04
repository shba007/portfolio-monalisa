<script setup lang="ts">
withDefaults(defineProps<{ primary?: boolean }>(), {
  primary: true,
})
</script>

<template>
  <button
    class="flex h-fit w-fit items-center justify-between gap-3 rounded-full p-[6px] pl-5 text-base font-semi-bold transition-colors hover:bg-primary-400 hover:text-white lg:gap-5 lg:p-2 lg:pl-6 lg:text-lg"
    :class="primary ? 'bg-primary-500 text-white' : 'border-[2.5px] border-primary-500 text-black'">
    <span>Book an Appointment</span>
    <span class="rotate-180 rounded-full p-2 lg:p-3" :class="primary ? 'bg-white fill-primary-500' : 'bg-primary-500 fill-white'">
      <NuxtIcon name="local:chevron-bold" class="text[20px] lg:text-[24px]" />
    </span>
  </button>
</template>
