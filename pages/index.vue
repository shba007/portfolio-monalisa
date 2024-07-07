<script setup lang="ts">
const title = `RCI Registered Clinical Psychologist in Kolkata`
const description = `Monalisa Bairagi is a trusted RCI registered clinical psychologist based in Kolkata.
She provides counseling sessions tailored to your unique needs near Rajpur, Sonarpur, Baruipur, Subhasgram, Harinavi & Narendrapur Area`
const url = 'https://monalisa-bairagi.com'

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + '/previews/landing.webp',
  ogUrl: url,
})

const isModelContactOpen = useState<boolean>('model-contact', () => false)

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
  <div>
    <SectionHero @contact="onContact(true)" />
    <SectionVideo />
    <SectionTestimonial />
    <ModelContact :is-open="isModelContactOpen" @close="onContact(false)" />
    <!-- <AppFooter @contact="onContact" /> -->
  </div>
</template>
