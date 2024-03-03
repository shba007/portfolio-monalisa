<script setup lang="ts">
definePageMeta({
  layout: 'footer'
})
const isModelContactOpen = ref<boolean>(false)

function onContact(action: boolean) {
  if (action) {
    isModelContactOpen.value = true
    useTrackEvent('contact_open')
  } else {
    isModelContactOpen.value = false
    useTrackEvent('contact_close')
  }
}
</script>

<template>
  <SectionHero @contact="onContact(true)" />
  <SectionTestimonials />
  <ModelContact :is-open="isModelContactOpen" @close="onContact(false)" />
</template>