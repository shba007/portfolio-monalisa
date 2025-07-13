<script setup lang="ts">
const title = `All Appointment Locations`
const description = `All Appointment Locations where clinical Clinical Psychologist is Available`
const {
  public: { siteUrl },
} = useRuntimeConfig()
const imageUrl = `${siteUrl}/previews/locations.webp`

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  ogImage: imageUrl,
  twitterImage: imageUrl,
  ogUrl: `${siteUrl}/location`,
})

const { data } = await useAPI('/api/location')
</script>

<template>
  <section class="mx-auto my-2.5 grid grid-cols-1 content-start justify-between justify-items-center gap-4 md:grid-cols-2 lg:my-4 xl:grid-cols-3">
    <CardLocation
      v-for="{ id, image, name, address, mapLink, availableWeekdays, email, phone, website } in data"
      :id="id"
      :key="id"
      :image="image"
      :name="name"
      :address="address"
      :map-link="mapLink"
      :available-weekdays="availableWeekdays"
      :email="email"
      :phone="phone"
      :website="website" />
  </section>
</template>
