<script setup lang="ts">
import arrow from '@/assets/images/arrow-2.svg?raw'

const emit = defineEmits<{
  contact: [action: boolean]
}>()
</script>

<template>
  <!-- <Teleport to="#footer-placeholder"> -->
  <footer
    class="relative max-w-[85rem] px-4 pb-4 pt-48 text-white before:absolute before:top-0 before:-z-10 before:h-full before:w-full before:bg-[url(assets/images/neuron.png)] before:bg-[length:320px_320px] before:bg-[24px_-24px] before:bg-no-repeat before:opacity-60 before:content-[''] lg:mx-12 lg:mx-8 lg:mt-12 lg:pb-9 lg:pl-12 lg:pt-64 lg:before:bg-[length:420px_420px] lg:before:bg-[128px_-32px] 2xl:mx-auto">
    <div class="absolute bottom-0 left-0 h-full w-screen bg-[url(assets/images/footer-bg.svg)] bg-[length:1024px_512px] bg-[center_bottom] bg-no-repeat lg:bg-[length:initial] lg:bg-left-bottom" />
    <CTAButton :primary="false" class="mx-auto -translate-y-40 lg:-translate-y-64" @click="emit('contact', true)" />
    <div class="relative mx-auto grid max-w-[85rem] grid-cols-[auto_1fr_auto] grid-rows-[repeat(2,min-content)] items-end gap-4 lg:grid-rows-1">
      <div class="row-start-2 flex flex-col gap-1 justify-self-start text-xs lg:row-start-1 lg:text-base">
        <span>&copy; 2023-2024</span>
        <NuxtLink to="https://shirsendu-bairagi.dev" target="__blank" class="flex items-center gap-1">
          <span>Made by</span>
          <NuxtIcon name="shba007" filled class="text-[20px]" />
        </NuxtLink>
      </div>
      <div class="col-span-full flex flex-col items-center justify-center gap-7 lg:col-span-1">
        <p class="whitespace-nowrap text-center lg:text-lg">
          Want to get tips of improving Mental Health <br />
          Join my Weekly Newsletter
        </p>
        <NewsletterBox />
      </div>
      <div class="relative mt-2 w-fit self-end justify-self-end lg:mt-12">
        <span class="mb-4 mr-auto block w-fit -rotate-6 font-sub text-xl font-semi-bold lg:text-2xl">Follow Me</span>
        <span class="absolute -left-12 top-1/2 w-10 -translate-y-1/2 scale-x-[-1] stroke-white lg:-left-16 lg:w-12" v-html="arrow" />
        <div class="col-start-3 row-start-2 flex gap-4 justify-self-end text-[28px] lg:row-start-1 lg:gap-6 lg:text-[42px]">
          <NuxtLink to="https://www.youtube.com/@mindful-healing-path" target="_blank" aria-label="youtube" class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="youtube" />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/mindful.healing.path/" target="_blank" aria-label="instagram" class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="instagram" />
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/monalisa-bairagi/" target="_blank" aria-label="linkedin" class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="linkedin" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
  <!-- </Teleport> -->
</template>
