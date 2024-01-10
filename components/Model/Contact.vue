<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean,
}>()
const emit = defineEmits<{
  (event: 'close'): void,
}>()

const methods = ref([
  { method: 'call', icon: 'phone', link: 'tel:+91798-002-4961' },
  { method: 'whatsapp', icon: 'whatsapp', link: 'https://wa.me/917980024961' }
])

function contact(method: string) {
  useTrackEvent('contact', {
    method
  })
}

function close() {
  emit('close')
}

function flippedClass(method: string) {
  return ({ 'flipped': method === 'whatsapp' });
}
</script>

<template>
  <ModelBase :is-open="isOpen" @close="close"
    innerClass="grid grid-rows-1 grid-cols-2 gap-4 pt-6 !max-w-[24.5rem] overflow-hidden">
    <span class="col-span-2 mx-auto text-lg mb-2">Book an Appointment via</span>
    <NuxtLink v-for="{ method, icon, link } of methods" :key="method" :to="link" target="__blank" @click="contact(method)"
      class="flex flex-col items-center justify-center gap-3 px-9 pt-6 text-white bg-[url('assets/images/contact-bg.svg')] bg-cover bg-no-repeat aspect-square cursor-pointer transition-colors"
      :class="flippedClass(method)">
      <NuxtIcon :name="icon" class="text-[56px]" :class="flippedClass(method)" />
      <span class="font-semi-bold capitalize" :class="flippedClass(method)">{{ method }}</span>
    </NuxtLink>
  </ModelBase>
</template>

<style scoped>
.flipped {
  @apply -scale-x-[1] [filter:FlipH];
  /* filter: FlipH; */
}
</style>