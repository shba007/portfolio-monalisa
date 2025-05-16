<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ participant?: string; workshopTitle?: string; workshopDate?: string }>(), {
  participant: 'Participant Name',
  workshopTitle: 'Workshop Name',
  workshopDate: '2020-01-01',
})

const formattedDate = computed(() => {
  const date = new Date(props.workshopDate)

  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return formatter.format(date)
})
</script>

<template>
  <section class="flex justify-center p-4">
    <svg class="h-auto w-full" width="892" viewBox="0 0 892 630" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <!-- Background & Decorators -->
      <g clip-path="url(#clip0)">
        <rect width="892" height="630" fill="white" />
        <rect x="48" y="48" width="796" height="534" fill="#ADE1A2" fill-opacity="0.5" />

        <!-- Left Decorators -->
        <g id="DecoratorsLeft">
          <rect id="Rectangle 31" x="-140" y="260.39" width="156" height="156" transform="rotate(-45.5645 -140 260.39)" fill="#ADE1A2" />
          <rect id="Rectangle 33" x="-100.045" y="62.3828" width="203.768" height="203.768" transform="rotate(-45.5645 -100.045 62.3828)" fill="#ADE1A2" />
          <rect id="Rectangle 36_2" x="-95.7393" y="12.1284" width="107.964" height="168.793" transform="rotate(-45.5645 -95.7393 12.1284)" stroke="#66CD5B" stroke-width="4" fill="none" />
          <rect id="Rectangle 35" x="83" y="-64.5015" width="203.768" height="203.768" transform="rotate(-45.5645 83 -64.5015)" fill="#ADE1A2" />
          <rect id="Rectangle 32" x="-170" y="172.39" width="156" height="156" transform="rotate(-45.5645 -170 172.39)" fill="#66CD5B" />
          <rect id="Rectangle 37" x="-152.651" y="172.219" width="131.464" height="131.464" transform="rotate(-45.5645 -152.651 172.219)" stroke="#ADE1A2" stroke-width="4" fill="none" />
          <rect id="Rectangle 34" x="20" y="-39.6099" width="156" height="156" transform="rotate(-45.5645 20 -39.6099)" fill="#66CD5B" />
        </g>

        <g id="DecoratorsRight">
          <rect id="Rectangle 31_2" x="1032" y="369.61" width="156" height="156" transform="rotate(134.436 1032 369.61)" fill="#ADE1A2" />
          <rect id="Rectangle 33_2" x="992.045" y="567.617" width="203.768" height="203.768" transform="rotate(134.436 992.045 567.617)" fill="#ADE1A2" />
          <rect id="Rectangle 36_3" x="987.739" y="617.872" width="107.964" height="168.793" transform="rotate(134.436 987.739 617.872)" stroke="#66CD5B" stroke-width="4" fill="none" />
          <rect id="Rectangle 35_2" x="809" y="694.501" width="203.768" height="203.768" transform="rotate(134.436 809 694.501)" fill="#ADE1A2" />
          <rect id="Rectangle 32_2" x="1062" y="457.61" width="156" height="156" transform="rotate(134.436 1062 457.61)" fill="#66CD5B" />
          <rect id="Rectangle 37_2" x="1044.65" y="457.781" width="131.464" height="131.464" transform="rotate(134.436 1044.65 457.781)" stroke="#ADE1A2" stroke-width="4" fill="none" />
          <rect id="Rectangle 34_2" x="872" y="669.61" width="156" height="156" transform="rotate(134.436 872 669.61)" fill="#66CD5B" />
        </g>
      </g>

      <!-- Certificate Text -->
      <text x="50%" y="120" text-anchor="middle" font-size="40" fill="black">Workshop Participation Certificate</text>

      <text x="50%" y="200" text-anchor="middle" font-size="28" fill="black">This is to certify that</text>

      <text x="50%" y="290" text-anchor="middle" font-family="Dancing Script" font-weight="500" font-size="60" fill="black">
        {{ participant }}
      </text>

      <line x1="148" y1="310" x2="744" y2="310" stroke="black" stroke-width="2" />

      <text x="50%" y="370" text-anchor="middle" font-size="20" fill="black">Completed the</text>

      <text x="50%" y="430" text-anchor="middle" font-size="28" fill="black">
        {{ workshopTitle }}
      </text>

      <!-- Signatures & Date -->
      <!-- Trainer -->

      <g transform="translate(100, 490)">
        <image href="/assets/images/signature.png" x="0" y="-50" width="162.6" height="81.4" />
        <text x="0" y="32" text-anchor="left" font-size="16" fill="black">
          <tspan x="0" dy="0">RCI Registered Clinical Psychologist</tspan>
          <tspan x="0" dy="24">CRR: A85263</tspan>
        </text>
      </g>

      <!-- Date -->
      <g transform="translate(700, 490)">
        <!-- Date, centered at the group origin -->
        <text x="0" y="0" text-anchor="right" font-size="16" fill="black">
          {{ formattedDate }}
        </text>

        <!-- Title, split into two lines using tspans -->
        <text x="0" y="32" text-anchor="middle" font-size="16" fill="black">
          <tspan x="0" dy="0">Healing Minds: Centre for</tspan>
          <tspan x="0" dy="24">Counseling and Education</tspan>
        </text>
      </g>

      <!-- Clip path -->
      <defs>
        <clipPath id="clip0">
          <rect width="892" height="630" />
        </clipPath>
      </defs>
    </svg>
  </section>
</template>

<style>
.text {
  @apply font-main;
}
</style>
