<script setup lang="ts">
const route = useRoute()
const showFooter = computed(() => route.name === 'index')

const isMenuOpen = useState('menu', () => false)
const animateClass = useState('menu-animate', () => '')

const { start } = useTimeoutFn(() => {
  animateClass.value = ''
}, 300)

watch(isMenuOpen, (value) => {
  if (value) animateClass.value = 'overflow-hidden h-screen'
  else start()
})

const isModalContactOpen = useState<boolean>('Modal-contact', () => false)

function onContact(action: boolean) {
  if (action) {
    isModalContactOpen.value = true
    gaProxy.gtag('event', 'contact_open')
  } else {
    isModalContactOpen.value = false
    gaProxy.gtag('event', 'contact_close')
  }
}
</script>

<template>
  <div>
    <!-- Links -->
    <AppNavbar type="mobile" @navigate="isMenuOpen = false" />
    <!-- Links -->
    <div
      class="relative z-10 flex flex-col overflow-hidden bg-light-400 transition-transform duration-300"
      :class="[isMenuOpen ? '-translate-x-[40%] scale-[80%] rounded-2xl' : 'h-full', animateClass]">
      <AppHeader @toggle-menu="isMenuOpen = !isMenuOpen" />
      <main
        class="grow-1 relative mx-auto flex h-full min-h-screen w-full max-w-[85rem] flex-col gap-4 px-4 !pb-0 pt-4 before:fixed before:left-4 before:top-1/2 before:h-screen before:w-[1px] before:-translate-y-1/2 before:bg-light-500 before:content-[''] after:fixed after:right-4 after:top-1/2 after:h-screen after:w-[1px] after:-translate-y-1/2 after:bg-light-500 after:content-[''] md:px-10 md:before:left-8 md:after:right-8 lg:gap-24 lg:px-12 lg:before:left-12 lg:after:right-12">
        <slot />
      </main>
      <AppFooter v-if="showFooter" @contact="onContact" />
    </div>
  </div>
</template>
