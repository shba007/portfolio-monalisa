<script setup lang="ts">
function onNavigate(section: string) {
  useTrackEvent('navigate', {
    section
  })
}
</script>

<template>
  <nav class="flex justify-between items-center py-3 md:py-4 z-20">
    <div class="flex-1 md:hidden" />
    <NuxtLink to="/" class="flex-grow-[2] md:flex-1 text-center md:text-left text-xl md:text-2xl whitespace-nowrap">
      Monalisa Bairagi
    </NuxtLink>
    <ul class="hidden md:flex flex-1 justify-center items-center gap-6">
      <li><NuxtLink to="/#testimonials" @click="onNavigate('testimonials')">Testimonials</NuxtLink></li>
      <li><NuxtLink to="/appointments" @click="onNavigate('appointments')">Appointments</NuxtLink></li>
      <li><NuxtLink to="/about" @click="onNavigate('about')">About Me</NuxtLink></li>
    </ul>
    <span class="flex-1">
      <button aria-label="menu" class="block w-fit ml-auto">
        <NuxtIcon name="hamburger" class="text-[28px] md:text-[40px]" />
      </button>
    </span>
  </nav>
</template>

<style scoped>
a {
  @apply whitespace-nowrap;
}
</style>