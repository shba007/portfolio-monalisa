<script setup lang="ts">
const route = useRoute()
const workshopId = route.params.workshopId?.toString()

const { data: workshop } = await useAPI(`/api/workshop/${workshopId}`)

if (!workshop.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = `Workshop - ${workshop.value.name}`
const description = `${workshop.value.name}`
const {
  public: { siteUrl },
} = useRuntimeConfig()
const imageUrl = workshop.value.image

useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  ogImage: imageUrl,
  twitterImage: imageUrl,
  ogImageWidth: 768,
  ogImageHeight: 1024,
  ogUrl: `${siteUrl}/workshop/${workshopId}`,
})
</script>

<template>
  <section v-if="workshop" class="relative flex h-[calc(100vh-3.375rem)] items-center justify-center gap-4 overflow-hidden p-[1px] lg:h-[calc(100vh-4.5rem)]">
    <NuxtImg :src="workshop.image" :alt="workshop.name" fit="fill" format="webp" loading="lazy" class="h-full rounded-sm object-contain dark:bg-dark-500" />
  </section>
</template>
