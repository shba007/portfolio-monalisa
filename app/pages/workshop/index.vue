<script setup lang="ts">
const { data: workshops } = await useAPI('/api/workshop')

const title = `Workshops`
const description = `Workshops`
const {
  public: { siteUrl },
} = useRuntimeConfig()
const imageUrl = workshops.value?.length ? workshops.value[0]?.image : `${siteUrl}/preview/workshop.webp`

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  ogImage: imageUrl,
  twitterImage: imageUrl,
  ogUrl: `${siteUrl}/workshop`,
})
</script>

<template>
  <section class="mx-auto my-2.5 grid grid-cols-1 content-start justify-between justify-items-center gap-4 md:grid-cols-2 lg:my-4 xl:grid-cols-3">
    <CardWorkshop
      v-for="{ image, name, url, place, address, mapLink, registerLink, paymentLink, feedbackLink } in workshops"
      :key="name"
      :image="image"
      :name="name"
      :url="url"
      :place="place"
      :address="address"
      :map-link="mapLink"
      :register-link="registerLink"
      :payment-link="paymentLink"
      :feedback-link="feedbackLink" />
  </section>
</template>
