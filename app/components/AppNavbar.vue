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

const urls = ref([
  {
    url: '/#testimonial',
    id: 'testimonial',
    title: 'Testimonials',
  },
  {
    url: '/location',
    id: 'location',
    title: 'Locations',
  },
  {
    url: '/workshop',
    id: 'workshop',
    title: 'Workshops',
  },
  {
    url: '/about',
    id: 'about',
    title: 'About Me',
  },
])
</script>

<template>
  <ul
    class="flex-1 justify-center"
    :class="type === 'mobile' ? 'mobile fixed right-6 top-1/2 flex -translate-y-1/2 flex-col items-end gap-6 text-lg text-white' : 'desktop hidden items-center gap-6 lg:flex'">
    <li v-for="{ id, url, title } of urls" :key="id">
      <NuxtLink :to="url" active-class="active-link" @click="onNavigate(id)">{{ title }}</NuxtLink>
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
