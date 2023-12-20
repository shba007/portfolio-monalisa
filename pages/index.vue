<script setup lang="ts">
</script>

<template>
  <header class="relative flex flex-col gap-8 mx-auto px-4 md:px-12 max-w-[85rem]">
    <Navbar />
  </header>
  <main class="relative flex flex-col gap-8 mx-auto px-4 md:px-12 !pb-0 max-w-[85rem]">
    <SectionHero />
    <!-- <SectionTestimonials /> -->
  </main>
  <footer
    class="relative grid grid-rows-1 grid-cols-3 items-end ml-12 p-9 pt-64 text-white bg-[url(assets/images/footer-bg.svg)] bg-no-repeat bg-left-bottom overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-[url(assets/images/neuron.png)] before:bg-[length:420px_420px] before:bg-no-repeat before:bg-[128px_-32px] before:opacity-60 before:-z-10 ">
    <div class="justify-self-start flex flex-col gap-1">
      <span>&copy; 2023-2024</span>
      <span>MIT License</span>
    </div>
    <div class="flex flex-col justify-center items-center gap-7">
      <p class="text-center text-lg whitespace-nowrap">
        Want to get tips about improving Mental Health <br />
        Join my Weekly Newsletter
      </p>
      <NewsletterBox />
    </div>
    <div class="justify-self-end flex gap-8">
      <NuxtLink to="https://www.youtube.com/@mindful-healing-path" target="_blank">
        <NuxtIcon name="youtube" class="text-[48px]" />
      </NuxtLink>
      <NuxtLink to="https://www.instagram.com/mindful.healing.path/" target="_blank">
        <NuxtIcon name="instagram" class="text-[48px]" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/monalisa-bairagi/" target="_blank">
        <NuxtIcon name="linkedin" class="text-[48px]" />
      </NuxtLink>
    </div>
  </footer>
</template>