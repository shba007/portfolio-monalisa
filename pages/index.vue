<script setup lang="ts">
const isModelContactOpen = ref<boolean>(false)

function onContact(action: boolean) {
  if (action) {
    isModelContactOpen.value = true
    useTrackEvent('contact_open')
  } else {
    isModelContactOpen.value = false
    useTrackEvent('contact_close')
  }
}
</script>

<template>
  <header
    class="relative flex flex-col gap-8 mx-auto px-4 md:px-12 max-w-[85rem] after:content-[''] after:absolute after:-left-8 after:-right-8 after:bottom-0 after:w-[110vw] after:h-[1px] after:bg-light-500 after:-z-50 snap-start">
    <Navbar />
  </header>
  <main
    class="relative flex flex-col gap-4 md:gap-24 mx-auto px-4 md:px-12 !pb-0 max-w-[85rem] before:content-[''] before:fixed before:left-12 before:top-0 before:w-[1px] before:h-full before:bg-light-500 after:content-[''] after:fixed after:right-12 after:top-0 after:w-[1px] after:h-full after:bg-light-500">
    <SectionHero @contact="onContact(true)" />
    <SectionTestimonials />
    <ModelContact :is-open="isModelContactOpen" @close="onContact(false)" />
  </main>
  <footer
    class="relative md:mt-12 p-4 md:p-9 md:pl-12 pt-48 md:pt-64 text-white bg-[url(assets/images/footer-bg.svg)] bg-no-repeat bg-[center_bottom] md:bg-left-bottom 2xl:bg-[length:1000%] overflow-hidden before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-[url(assets/images/neuron.png)] before:bg-[length:320px_320px] md:before:bg-[length:420px_420px] before:bg-no-repeat before:bg-[24px_-24px] md:before:bg-[128px_-32px] before:opacity-60 before:-z-10 snap-end">
    <CTAButton @click="onContact(true)" :primary="false" class="mx-auto -translate-y-40 md:-translate-y-64" />
    <div
      class="relative grid grid-rows-[repeat(2,min-content)] md:grid-rows-1 grid-cols-[auto_1fr_auto] gap-4 items-end mx-auto max-w-[85rem]">
      <div class="row-start-2 md:row-start-1 justify-self-start flex flex-col gap-1 text-xs md:text-base">
        <span>&copy; 2023-2024</span>
        <NuxtLink to="https://shirsendu-bairagi.dev" target="__blank" class="flex items-center gap-1">
          <span>Made by</span>
          <NuxtIcon name="shba007" filled class="text-[20px]" />
        </NuxtLink>
      </div>
      <div class="col-span-full md:col-span-1 flex flex-col justify-center items-center gap-7">
        <p class="text-center md:text-lg whitespace-nowrap">
          Want to get tips of improving Mental Health <br />
          Join my Weekly Newsletter
        </p>
        <NewsletterBox />
      </div>
      <div class="row-start-2 md:row-start-1 col-start-3 justify-self-end flex gap-4 md:gap-8 text-[32px] md:text-[48px]">
        <NuxtLink to="https://www.youtube.com/@mindful-healing-path" target="_blank"
          class="drop-shadow hover:drop-shadow-md">
          <NuxtIcon name="youtube" />
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/mindful.healing.path/" target="_blank"
          class="drop-shadow hover:drop-shadow-md">
          <NuxtIcon name="instagram" />
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/monalisa-bairagi/" target="_blank"
          class="drop-shadow hover:drop-shadow-md">
          <NuxtIcon name="linkedin" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>