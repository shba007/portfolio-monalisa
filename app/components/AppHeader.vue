<script setup lang="ts">
const emit = defineEmits<{
  toggleMenu: []
}>()
</script>

<template>
  <header
    class="relative flex max-w-[85rem] flex-col gap-8 px-4 after:absolute after:bottom-0 after:left-1/2 after:-z-50 after:h-[1px] after:w-[110vw] after:-translate-x-1/2 after:bg-light-500 after:content-[''] lg:px-12">
    <nav class="z-20 flex items-center justify-between py-3 lg:py-4">
      <div class="flex-1 lg:hidden" />
      <NuxtLink to="/" class="flex-grow-[2] whitespace-nowrap text-center text-xl !text-black lg:flex-1 lg:text-left lg:text-2xl"> Monalisa Bairagi </NuxtLink>
      <AppNavbar type="desktop" />
      <span class="flex-1 lg:invisible">
        <button aria-label="menu" class="ml-auto block w-fit" @click="emit('toggleMenu')">
          <NuxtIcon name="hamburger" class="text-[28px] lg:text-[40px]" />
        </button>
      </span>
    </nav>
  </header>
</template>
