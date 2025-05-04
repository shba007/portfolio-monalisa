<script setup lang="ts">
const splideOption = {
  arrows: true,
  type: 'loop',
  autoplay: true,
  autoWidth: true,
  padding: '4rem',
  gap: '4rem',
  focus: 'center',
  mediaQuery: 'min',
  breakpoints: {
    768: {
      padding: '16rem',
      gap: '16rem',
    },
  },
}

const { data: testimonials } = useFetch('/api/testimonial')
</script>

<template>
  <section id="testimonial" class="relative z-10">
    <h2 class="my-8 text-center lg:text-xl">All Testimonials</h2>
    <Splide :options="splideOption" tag="div" :has-track="false" class="relative left-1/2 w-screen max-w-[85rem] -translate-x-1/2">
      <SplideTrack>
        <SplideSlide v-for="{ image, name, message } in testimonials" :key="name">
          <CardTestimonal :image="image" :name="name" :message="message" />
        </SplideSlide>
      </SplideTrack>
      <div class="splide__arrows absolute left-0 right-0 top-1/2 mx-[6%] flex -translate-y-1/2 justify-between text-[16px] text-primary-400 lg:top-1/2 lg:mx-[18%] lg:text-[28px]">
        <button class="splide__arrow splide__arrow--prev relative drop-shadow-md transition-all hover:fill-primary-500 hover:drop-shadow-lg">
          <div class="absolute left-1/2 top-1/2 -z-10 aspect-square w-12 -translate-x-1/2 -translate-y-1/2 bg-white lg:w-[4.375rem]" />
          <NuxtIcon name="local:chevron-bold" />
        </button>
        <button class="splide__arrow splide__arrow--next relative drop-shadow-md transition-all [rotate:y_180deg] hover:fill-primary-500 hover:drop-shadow-lg">
          <div class="absolute left-1/2 top-1/2 -z-10 aspect-square w-12 -translate-x-1/2 -translate-y-1/2 bg-white lg:w-[4.375rem]" />
          <NuxtIcon name="local:chevron-bold" />
        </button>
      </div>
    </Splide>
  </section>
</template>

<style scoped>
.splide__arrow > div {
  clip-path: polygon(
    45.666% 0.07%,
    45.666% 0.07%,
    52.263% 0.058%,
    58.895% 0.578%,
    65.438% 1.672%,
    71.771% 3.384%,
    77.771% 5.756%,
    83.317% 8.832%,
    88.287% 12.653%,
    92.559% 17.262%,
    96.01% 22.703%,
    98.52% 29.018%,
    98.52% 29.018%,
    99.827% 35.663%,
    99.873% 42.156%,
    98.791% 48.468%,
    96.715% 54.571%,
    93.776% 60.437%,
    90.109% 66.039%,
    85.846% 71.347%,
    81.12% 76.334%,
    76.064% 80.972%,
    70.812% 85.232%,
    70.812% 85.232%,
    65.657% 88.891%,
    60.259% 92.134%,
    54.681% 94.87%,
    48.983% 97.013%,
    43.226% 98.472%,
    37.473% 99.158%,
    31.785% 98.984%,
    26.222% 97.859%,
    20.847% 95.694%,
    15.721% 92.402%,
    15.721% 92.402%,
    11.114% 88.12%,
    7.353% 83.207%,
    4.406% 77.761%,
    2.238% 71.878%,
    0.815% 65.655%,
    0.102% 59.19%,
    0.065% 52.58%,
    0.67% 45.921%,
    1.883% 39.312%,
    3.67% 32.848%,
    3.67% 32.848%,
    5.87% 27.208%,
    8.64% 22.018%,
    11.933% 17.306%,
    15.701% 13.1%,
    19.899% 9.428%,
    24.477% 6.319%,
    29.391% 3.801%,
    34.591% 1.901%,
    40.032% 0.648%,
    45.666% 0.07%
  );
}
</style>
