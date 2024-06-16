<script setup lang="ts">
const emit = defineEmits<{ (event: 'subscribe', email: string): void }>()

const email = ref<string>()
</script>

<template>
  <div
    class="mx-auto flex h-fit w-full max-w-[328px] justify-between rounded-full bg-white py-[6px] pl-6 pr-[6px] align-middle text-black shadow-[2px_2px_6px_0px_rgba(0,0,0,0.38)] outline-2 outline-offset-2 outline-white transition-[outline] duration-300 focus-within:outline dark:bg-dark-500 dark:text-white sm:max-w-[400px] lg:max-w-[472px]">
    <ClientOnly>
      <input v-model="email" type="email" placeholder="Email address" class="mr-2 w-full bg-transparent outline-none" />
    </ClientOnly>
    <button type="submit" aria-label="subscribe" class="hover:bg-primary-300 justify-self-end rounded-full bg-primary-400 p-2 transition-colors" @click="email && emit('subscribe', email)">
      <NuxtIcon name="paper-plane" class="text-[24px] text-light-400 dark:text-dark-400" />
    </button>
  </div>
</template>
