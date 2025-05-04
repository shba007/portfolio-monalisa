<script setup lang="ts">
const { data: videos } = useFetch('/api/video')
</script>

<template>
  <section id="video">
    <h2 class="my-8 text-center lg:text-xl">Featured Talks</h2>
    <div class="grid grid-cols-1 items-center justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
      <CardVideo v-for="{ title, publishedAt, thumbnail, viewData, url } of videos" :key="url" :title="title" :published-at="publishedAt" :thumbnail="thumbnail" :view-data="viewData" :url="url" />
    </div>
  </section>
</template>
