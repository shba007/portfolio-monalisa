<script setup lang="ts">
import footerBg from "~~/assets/images/footer-bg.svg"
</script>

<template>
  <header class="relative flex flex-col gap-8 mx-auto px-4 md:px-12 max-w-[85rem]">
    <Navbar />
  </header>
  <main class="relative flex flex-col gap-8 mx-auto px-4 md:px-12 !pb-0 max-w-[85rem]">
    <SectionHero />
    <!-- <SectionTestimonials /> -->
  </main>
  <footer class="relative overflow-y-hidden" :class="`bg-[url(${footerBg})]`">
    <img src="assets/images/neuron.png" alt="neuron-img"
      class="absolute -z-30 -top-10 overflow-y-hidden rotate-[10deg]" />
    <div class="max-w-7xl ml-auto">
      <p class="text-center text-xl pt-80 text-white">
        Want to get tips about improving Mental Health <br />
        Join my Weekly Newsletter
      </p>
      <div class="flex flex-wrap items-center mx-12 py-6 justify-center">
        <div class="text-base text-white basis-1/3 pl-4 max-lg:basis-1/2">
          <p>&copy; 2023-2024</p>
          <p>MIT License</p>
        </div>
        <NewsletterBox />
        <div class="basis-1/3 max-lg:basis-1/2">
          <div class="flex gap-8 justify-end">
            <NuxtLink to="https://www.youtube.com/@mindful-healing-path" target="_blank">
              <NuxtIcon name="youtube" />
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com/mindful.healing.path/" target="_blank">
              <NuxtIcon name="instagram" />
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/in/monalisa-bairagi/" target="_blank">
              <NuxtIcon name="linkedin" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>