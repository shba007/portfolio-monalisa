<script setup lang="ts">
const { data } = await useFetch('/api/locations')
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between justify-items-center gap-4 mx-1.5 my-2.5 md:my-4">
    <LocationCard v-for="{ id, image, name, address, avilableWeekdays, email, phone, website, location } in data"
      :key="id" :id="id" :image="image" :name="name" :address="address" :avilableWeekdays="avilableWeekdays"
      :email="email" :phone="phone" :website="website" :location="location" />
  </section>
</template>