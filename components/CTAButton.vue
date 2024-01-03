<script setup lang="ts">
const { primary } = withDefaults(defineProps<{ primary?: boolean }>(), { primary: true })

const route = useRoute()
const router = useRouter()

function toggle() {
  if (route.query?.contact == undefined)
    router.replace({ query: { contact: 'open' } })
  else
    router.replace({ query: {} })
}
</script>

<template>
  <button @click="toggle"
    class="flex justify-between items-center gap-3 md:gap-5 rounded-full p-[6px] md:p-2 pl-5 md:pl-6 w-fit h-fit text-base md:text-lg font-semi-bold hover:text-white hover:bg-primary-400 transition-colors"
    :class="primary ? 'text-white bg-primary-500' : 'text-black border-[2.5px] border-primary-500'">
    <span>Book an Appointment</span>
    <span class="rounded-full p-2 md:p-3 rotate-180" :class="primary ? 'bg-white' : 'bg-primary-500'">
      <NuxtIcon name="chevron-bold" class="text[20px] md:text-[24px]"
        :class="primary ? 'text-primary-500' : 'text-white'" />
    </span>
  </button>
</template>