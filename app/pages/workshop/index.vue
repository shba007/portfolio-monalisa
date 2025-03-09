<script setup lang="ts">
const title = `Workshops`
const description = `Workshops`
const url = 'https://monalisa-bairagi.com'

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + '/previews/workshops.webp',
  ogUrl: url + '/workshops',
})

const { data } = useFetch('/api/workshop')
</script>

<template>
  <section class="mx-auto my-2.5 grid grid-cols-1 content-start justify-between justify-items-center gap-4 md:grid-cols-2 lg:my-4 xl:grid-cols-3">
    <CardWorkshop
      v-for="{ image, name, url, place, address, mapLink, registerLink, paymentLink, feedbackLink } in data"
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
