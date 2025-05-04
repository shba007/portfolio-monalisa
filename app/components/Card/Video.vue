<script setup lang="ts">
import type { Video } from '~~/shared/types'
const props = defineProps<Video>()

const categories: Record<string, BulletLegendItemInterface> = {
  view: { name: 'view', color: '#98DA8B' },
}

const totalViews = computed(() => {
  const totalCount = props.viewData.reduce((total, { view }) => total + view, 0)

  if (totalCount > 10e8) {
    return Math.round((totalCount * 10) / 10e8) / 10 + 'B'
  } else if (totalCount > 10e5) {
    return Math.round((totalCount * 10) / 10e5) / 10 + 'M'
  } else if (totalCount > 10e2) {
    return Math.round((totalCount * 10) / 10e2) / 10 + 'K'
  } else {
    return totalCount
  }
})
</script>

<template>
  <NuxtLink :to="url" target="__blank" external class="relative w-full max-w-[384px] overflow-hidden rounded-[1.25rem] duration-200 hover:shadow-lg">
    <NuxtImg :src="thumbnail" :alt="title" :width="384" loading="lazy" class="col-span-2 aspect-video rounded-[1.25rem] object-cover" />
    <div class="grid-row-[auto_auto] relative grid w-full grid-cols-5 gap-2 p-4 py-2">
      <span class="col-span-full inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap text-base lg:text-[18px]">
        {{ title }}
      </span>
      <div class="col-span-3 flex h-6 items-center justify-center gap-1 self-start justify-self-start whitespace-nowrap text-xs opacity-60 md:text-sm">
        <NuxtIcon name="local:eye" class="text-[16px] lg:text-[20px]" />
        <span>{{ totalViews }}</span>
        •
        <NuxtTime :datetime="publishedAt" relative />
      </div>
      <div class="col-span-2">
        <AreaChart :data="viewData" :categories="categories" :height="24" :hide-legend="true" :hide-tooltip="true" :x-formatter="() => ''" :y-formatter="() => ''" />
      </div>
    </div>
  </NuxtLink>
</template>
