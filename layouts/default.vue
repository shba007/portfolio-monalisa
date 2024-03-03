<template>
  <header
    class="relative flex flex-col gap-8 mx-auto px-4 md:px-12 max-w-[85rem] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[110vw] after:h-[1px] after:bg-light-500 after:-z-50">
    <Navbar />
  </header>
  <main
    class="relative flex flex-col gap-4 md:gap-24 mx-auto px-4 md:px-12 !pb-0 max-w-[85rem] min-h-full before:content-[''] before:fixed before:left-4 md:before:left-8 lg:before:left-12 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-screen before:bg-light-500 after:content-[''] after:fixed after:right-4 md:after:right-8 lg:after:right-12 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-screen after:bg-light-500 overflow-hidden">
    <slot />
  </main>
  <!-- <slot name="footer" /> -->
</template>