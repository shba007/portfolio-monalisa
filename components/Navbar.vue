<script setup lang="ts">
const props = defineProps<{
  type: "mobile" | "desktop"
}>()
const emit = defineEmits<{
  (event: 'navigate'): void;
}>()

function onNavigate(section: string) {
  useTrackEvent('navigate', {
    section
  })
  emit('navigate')
}
</script>

<template>
  <ul class="flex-1 justify-center"
    :class="type === 'mobile' ? 'fixed top-1/2 -translate-y-1/2 right-6 flex flex-col gap-6 text-lg items-end text-white mobile' : 'hidden md:flex items-center gap-6 desktop'">
    <li>
      <NuxtLink to="/#testimonials" @click="onNavigate('testimonials')">Testimonials</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/locations" @click="onNavigate('locations')">Locations</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about" @click="onNavigate('about')">About Me</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
a {
  @apply whitespace-nowrap;
}

.desktop a.router-link-active {
  @apply text-primary-500;
}
</style>