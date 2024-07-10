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
  <section class="mx-1.5 my-2.5 grid min-h-screen grid-cols-1 content-start justify-between justify-items-center gap-4 lg:my-4 lg:grid-cols-2 lg:grid-cols-3">
    <LocationCard
      v-for="{ id, image, name, address, avilableWeekdays, email, phone, website, location } in data"
      :id="id"
      :key="id"
      :image="image"
      :name="name"
      :address="address"
      :avilable-weekdays="avilableWeekdays"
      :email="email"
      :phone="phone"
      :website="website"
      :location="location" />
  </section>
</template>
