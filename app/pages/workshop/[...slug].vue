<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug?.toString()

const { data } = await useFetch(`/api/workshop/${slug}`)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = `Workshop - ${data.value.title}`
const description = `${data.value.title}`
const url = 'https://monalisa-bairagi.com'

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: `${url}${data.value.id}`,
  ogUrl: `${url}/workshop/${slug}`,
})
</script>

<template>
  <section class="relative flex h-[calc(100vh-3.375rem)] items-center justify-center overflow-hidden p-[1px] lg:h-[calc(100vh-4.5rem)]">
    <NuxtImg :src="data.id" :alt="data.title" fit="fill" format="webp" loading="lazy" class="h-full rounded-sm object-contain dark:bg-dark-500" />
  </section>
</template>
