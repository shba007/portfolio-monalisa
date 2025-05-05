<script setup lang="ts" generic="T">
import { CurveType } from '@unovis/ts'
import type { NumericAccessor, BulletLegendItemInterface } from '@unovis/ts'
import { VisArea, VisLine, VisXYContainer } from '@unovis/vue'

export interface AreaChartProps<T> {
  data: T[]
  height: number
  xLabel?: string
  yLabel?: string
  categories: Record<string, BulletLegendItemInterface>
  curveType?: CurveType
  xNumTicks?: number
  xExplicitTicks?: number
  minMaxTicksOnly?: boolean
  yNumTicks?: number
  hideLegend?: boolean
  hideTooltip?: boolean
  xDomainLine?: boolean
  yDomainLine?: boolean
  xTickLine?: boolean
  yTickLine?: boolean
  xGridLine?: boolean
  yGridLine?: boolean
}

// Constants for default values
const DEFAULT_TICK_COUNT = 24
const DEFAULT_TICK_DIVISOR = 4
const DEFAULT_OPACITY = 0.5
const DEFAULT_COLOR = '#3b82f6'

const props = withDefaults(defineProps<AreaChartProps<T>>(), {
  xNumTicks: (props) => (props.data.length > DEFAULT_TICK_COUNT ? DEFAULT_TICK_COUNT / DEFAULT_TICK_DIVISOR : props.data.length - 1),
  yNumTicks: (props) => (props.data.length > DEFAULT_TICK_COUNT ? DEFAULT_TICK_COUNT / DEFAULT_TICK_DIVISOR : props.data.length - 1),
})

const colors = Object.values(props.categories).map((c) => c.color)

function accessors(id: string): { y: NumericAccessor<T>; color: string } {
  return {
    y: (d: T) => Number(d[id as keyof T]),
    color: props.categories[id]?.color ?? DEFAULT_COLOR,
  }
}

function generateCSSVarsSvg(index: number, color: string) {
  return `
  <linearGradient id="gradient${index}-${color}" gradientTransform="rotate(90)">
  <stop offset="0%" style="stop-color:var(--vis-color0);stop-opacity:1" />
    <stop offset="100%" style="stop-color:var(--vis-color0);stop-opacity:0" />
  </linearGradient>
`
}

function generateSvg(index: number, color: string) {
  return `
  <linearGradient id="gradient${index}-${color}" gradientTransform="rotate(90)">
    <stop offset="0%" stop-color="${color}" stop-opacity="1" />
    <stop offset="100%" stop-color="${color}" stop-opacity="0" />
  </linearGradient>
`
}

const svgDefs = computed(() => colors.map((color, index) => (color?.includes('#') ? generateSvg(index, color) : generateCSSVarsSvg(index, color ?? DEFAULT_COLOR))).join(''))
</script>

<template>
  <div class="flex flex-col space-y-4">
    <VisXYContainer :data="data" :height="height" :svg-defs="svgDefs">
      <template v-for="(i, iKey) in Object.keys(props.categories)" :key="iKey">
        <VisArea :x="(_: T, i: number) => i" v-bind="accessors(i)" :color="`url(#gradient${iKey}-${colors[iKey]})`" :opacity="DEFAULT_OPACITY" :curve-type="curveType ?? CurveType.MonotoneX" />
        <VisLine :x="(_: T, i: number) => i" :y="(d: T) => d[i as keyof T]" :color="colors[iKey]" :curve-type="curveType ?? CurveType.MonotoneX" />
      </template>
    </VisXYContainer>
  </div>
</template>
