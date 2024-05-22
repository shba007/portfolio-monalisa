<script setup lang="ts">
import arrow from "@/assets/images/arrow-2.svg?raw";

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
  <footer
    class="relative md:mx-8 lg:mx-12 2xl:mx-auto md:mt-12 pt-48 md:pt-64 pb-4 md:pb-9 px-4 md:pl-12 max-w-[85rem] text-white before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-[url(assets/images/neuron.png)] before:bg-[length:320px_320px] md:before:bg-[length:420px_420px] before:bg-no-repeat before:bg-[24px_-24px] md:before:bg-[128px_-32px] before:opacity-60 before:-z-10">
    <div
      class="absolute left-0 bottom-0 w-screen h-full bg-[url(assets/images/footer-bg.svg)] bg-no-repeat bg-[center_bottom] md:bg-left-bottom bg-[length:1024px_512px] md:bg-[length:initial]" />
    <!-- TODO: Make it functional -->
    <!-- <CTAButton :primary="false" class="mx-auto -translate-y-40 md:-translate-y-64" @click="onContact(true)" /> -->
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
      <div class="self-end justify-self-end relative mt-2 md:mt-12 w-fit">
        <span class="block mr-auto mb-4 w-fit font-sub text-xl md:text-2xl font-semi-bold -rotate-6">Follow Me</span>
        <span v-html="arrow"
          class="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-16 w-10 md:w-12 stroke-white scale-x-[-1]" />
        <div
          class="row-start-2 md:row-start-1 col-start-3 justify-self-end flex gap-4 md:gap-6 text-[28px] md:text-[42px]">
          <NuxtLink to="https://www.youtube.com/@mindful-healing-path" target="_blank" aria-label="youtube"
            class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="youtube" />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/mindful.healing.path/" target="_blank" aria-label="instagram"
            class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="instagram" />
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/monalisa-bairagi/" target="_blank" aria-label="linkedin"
            class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="linkedin" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>