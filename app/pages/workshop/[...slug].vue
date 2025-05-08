<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug?.toString()

const { data } = await useFetch(`/api/workshop/${slug}`)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = `Workshop - ${data.value.name}`
const description = `${data.value.name}`
const {
  public: { siteUrl },
} = useRuntimeConfig()
const imageUrl = `${siteUrl}/${data.value.image}`

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: imageUrl,
  ogUrl: `${siteUrl}/workshop/${slug}`,
})
</script>

<template>
  <section class="relative flex h-[calc(100vh-3.375rem)] items-center justify-center overflow-hidden p-[1px] lg:h-[calc(100vh-4.5rem)]">
    <NuxtImg :src="data.image" :alt="data.name" fit="fill" format="webp" loading="lazy" class="h-full rounded-sm object-contain dark:bg-dark-500" />
  </section>
</template>
