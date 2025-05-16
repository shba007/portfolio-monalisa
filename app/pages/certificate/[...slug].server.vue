<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug?.toString()

definePageMeta({
  layout: false,
})

const { data } = await useFetch(`/api/certificate/${slug}`)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)

  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return formatter.format(date)
}

const title = `Certificate - ${data.value.participant}`
const description = `Certificate of ${data.value.workshopTitle} at ${formatDate(data.value.workshopDate.start)}`
const {
  public: { siteUrl },
} = useRuntimeConfig()
// const imageUrl = `${siteUrl}/${data.value.image}`

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  // ogImage: imageUrl,
  // twitterImage: imageUrl,
  ogUrl: `${siteUrl}/certificate/${slug}`,
})

defineOgImageScreenshot({
  selector: '.content',
})
</script>

<template>
  <main class="content flex min-h-screen w-full items-center justify-center bg-light-400">
    <TemplateCertificate v-if="data" :participant="data.participant" :workshop-title="data.workshopTitle" :workshop-date="data.workshopDate.start" />
  </main>
</template>
