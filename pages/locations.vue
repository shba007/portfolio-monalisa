<script setup lang="ts">
const { data } = await useFetch('/api/locations')
</script>

<template>
  <section class="flex flex-wrap flex-col md:flex-row gap-8 mx-1.5 my-2.5 md:my-4">
    <LocationCard v-for="{ id, image, name, address, avilableWeekdays, email, phone, website, location } in data"
      :key="id" :id="id" :image="image" :name="name" :address="address" :avilableWeekdays="avilableWeekdays"
      :email="email" :phone="phone" :website="website" :location="location" />
  </section>
</template>