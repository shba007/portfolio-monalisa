<script setup lang="ts">
defineProps<{
  type: 'mobile' | 'desktop'
}>()
const emit = defineEmits<{
  (event: 'navigate'): void
}>()

function onNavigate(section: string) {
  useTrackEvent('navigate', {
    section,
  })
  emit('navigate')
}
</script>

<template>
  <ul
    class="flex-1 justify-center"
    :class="type === 'mobile' ? 'mobile fixed right-6 top-1/2 flex -translate-y-1/2 flex-col items-end gap-6 text-lg text-white' : 'desktop hidden items-center gap-6 lg:flex'">
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
