<template>
  <nav class="flex justify-between items-center py-6">
    <NuxtLink to="/" class="flex-1 text-2xl whitespace-nowrap">Monalisa Bairagi</NuxtLink>
    <ul class="flex-1 flex justify-center items-center gap-6 text-lg">
      <li><NuxtLink to="#home">Home</NuxtLink></li>
      <li><NuxtLink to="#testimonials">Testimonials</NuxtLink></li>
      <li><NuxtLink to="#contact">Contact</NuxtLink></li>
    </ul>
    <span class="flex-1">
      <NuxtLink to="#" class="block w-fit ml-auto">
        <NuxtIcon name="hamburger" class="text-[40px]" />
      </NuxtLink>
    </span>
  </nav>
</template>