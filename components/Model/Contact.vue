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
</script>

<template>
  <ModelBase :is-open="isOpen" @close="close" innerClass="grid grid-rows-1 grid-cols-2 gap-4 p-4 pt-6 !max-w-[24.5rem]">
    <span class="col-span-2 mx-auto text-lg mb-2">Book an Appointment via</span>
    <NuxtLink v-for="{ method, icon, link } of methods" :key="method" :to="link" target="__blank" @click="contact(method)"
      class="flex flex-col items-center justify-center gap-3 rounded-2xl px-9 text-white bg-primary-500 hover:bg-primary-400 aspect-square cursor-pointer transition-colors">
      <ClientOnly>
        <NuxtIcon :name="icon" class="text-[48px]" />
      </ClientOnly>
      <span class="capitalize">{{ method }}</span>
    </NuxtLink>
  </ModelBase>
</template>