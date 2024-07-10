<script setup lang="ts">
const props = defineProps<{
  title: string
  thumbnail: string
  publishedAt: string
  views: number
  link: string
}>()

const timeAgo = useTimeAgo(props.publishedAt)
// const formatedViewCount = computed(() => props.views + 'K')
</script>

<template>
  <NuxtLink :to="link" target="__blank" class="relative w-full max-w-[384px] overflow-hidden rounded-[1.25rem] duration-200 hover:shadow-lg">
    <NuxtImg :src="thumbnail" :alt="title" :width="384" class="col-span-2 aspect-video rounded-[1.25rem] object-cover" />
    <div class="grid-row-[auto_auto] relative grid w-full grid-cols-[auto_auto] gap-2 p-4 pt-2">
      <span class="col-span-2 inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap text-base lg:text-[18px]">
        {{ title }}
      </span>
      <time :datetime="timeAgo" class="text-sm md:text-base">{{ timeAgo }}</time>
      <!-- <div class="flex items-center justify-center gap-1 justify-self-end">
        <NuxtIcon name="eye" class="text-[20px] lg:text-[24px]" />
        <span class="text-sm lg:text-base">{{ formatedViewCount }}</span>
      </div> -->
    </div>
  </NuxtLink>
</template>
