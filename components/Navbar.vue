<script setup lang="ts">
function onNavigate(section: string) {
  useTrackEvent('navigate', {
    section
  })
}
</script>

<template>
  <nav class="flex justify-between items-center py-3 md:py-6 z-20">
    <NuxtLink to="/" class="flex-grow-[2] md:flex-1 text-center md:text-left text-xl md:text-2xl whitespace-nowrap">
      Monalisa Bairagi
    </NuxtLink>
    <ul class="hidden md:flex flex-1 justify-center items-center gap-6">
      <li><NuxtLink to="#testimonials" @click="onNavigate('testimonials')">Testimonials</NuxtLink></li>
      <li><NuxtLink to="#about" @click="onNavigate('about')">About Me</NuxtLink></li>
    </ul>
    <span class="flex-1">
      <NuxtLink to="#" class="block w-fit ml-auto">
        <NuxtIcon name="hamburger" class="text-[40px]" />
      </NuxtLink>
    </span>
  </nav>
</template>