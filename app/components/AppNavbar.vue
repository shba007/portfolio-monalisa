<script setup lang="ts">
defineProps<{
  type: 'mobile' | 'desktop'
}>()

const emit = defineEmits<{
  navigate: []
}>()

const { proxy: gaProxy } = useScriptGoogleAnalytics()

function onNavigate(section: string) {
  gaProxy.gtag('event', 'navigate', { section })
  emit('navigate')
}
</script>

<template>
  <ul
    class="flex-1 justify-center"
    :class="type === 'mobile' ? 'mobile fixed right-6 top-1/2 flex -translate-y-1/2 flex-col items-end gap-6 text-lg text-white' : 'desktop hidden items-center gap-6 lg:flex'">
    <li>
      <NuxtLink to="/#testimonial" active-class="active-link" @click="onNavigate('testimonial')">Testimonials</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/locations" active-class="active-link" @click="onNavigate('locations')">Locations</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/workshops" active-class="active-link" @click="onNavigate('workshops')">Workshops</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about" active-class="active-link" @click="onNavigate('about')">About Me</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
a {
  @apply whitespace-nowrap;
}

.desktop .active-link {
  @apply text-primary-500;
}
</style>
