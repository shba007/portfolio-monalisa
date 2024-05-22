<script setup lang="ts">
const isMenuOpen = useState('menu', () => false)
const animateClass = useState('menu- animate', () => '')

const { start } = useTimeoutFn(() => {
  animateClass.value = ''
}, 300)

watch(isMenuOpen, (value) => {
  if (value)
    animateClass.value = 'overflow-hidden h-screen'
  else
    start()
})
</script>

<template>
  <!-- Links -->
  <Navbar type="mobile" @navigate="isMenuOpen = false" />
  <!-- Links -->
  <div class="relative bg-light-400 duration-300 z-20"
    :class="[isMenuOpen && 'rounded-2xl scale-[80%] -translate-x-[40%]', animateClass]">
    <AppHeader @toggle-menu="isMenuOpen = !isMenuOpen" />
    <main
      class="relative flex flex-col gap-4 md:gap-24 mx-auto px-4 md:px-12 !pb-0 max-w-[85rem] min-h-full before:content-[''] before:fixed before:left-4 md:before:left-8 lg:before:left-12 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-screen before:bg-light-500 after:content-[''] after:fixed after:right-4 md:after:right-8 lg:after:right-12 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-screen after:bg-light-500 overflow-hidden">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>