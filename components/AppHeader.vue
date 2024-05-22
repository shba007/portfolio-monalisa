<script setup lang="ts">
const emit = defineEmits<{
  (event: 'toggleMenu'): void;
}>()
</script>

<template>
  <header
    class="relative flex flex-col gap-8 mx-auto px-4 md:px-12 max-w-[85rem] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[110vw] after:h-[1px] after:bg-light-500 after:-z-50">
    <nav class="flex justify-between items-center py-3 md:py-4 z-20">
      <div class="flex-1 md:hidden" />
      <NuxtLink to="/"
        class="flex-grow-[2] md:flex-1 text-center md:text-left !text-black text-xl md:text-2xl whitespace-nowrap">
        Monalisa Bairagi
      </NuxtLink>
      <Navbar type="desktop" />
      <span class="flex-1 md:invisible">
        <button aria-label="menu" class="block w-fit ml-auto" @click="emit('toggleMenu')">
          <NuxtIcon name="hamburger" class="text-[28px] md:text-[40px]" />
        </button>
      </span>
    </nav>
  </header>
</template>
