<script setup lang="ts">
const title = `Locations`
const description = `Appointment Locations`
const url = 'https://monalisa-bairagi.com'

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + '/previews/locations.webp',
  ogUrl: url + '/locations',
})

const { data } = useFetch('/api/location')
</script>

<template>
  <section class="mx-auto my-2.5 grid min-h-screen w-fit grid-cols-1 content-start justify-between justify-items-center gap-4 md:grid-cols-2 lg:my-4 lg:grid-cols-3">
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
