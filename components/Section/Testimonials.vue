<script setup lang="ts">
import sliderBtn from "~~/assets/images/slider-button.svg?raw";
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

const splideOption: Options = {
  arrows: true,
  type: 'loop',
  autoplay: true,
  autoWidth: true,
  padding: '16rem',
  gap: '16rem',
  focus: 'center',
  breakpoints: {
    768: {
      padding: '4rem',
      gap: '4rem'
    }
  }
};

const testimonials = ref([{
  image: '/images/testimonial-1.jpg',
  name: 'Aarushi Kaur',
  message: `You won't Regret it. Thank you. It helped
        me in the longer run, for the better future`,
}, {
  image: '/images/testimonial-1.jpg',
  name: 'Aarushi Kaur',
  message: `You won't Regret it. Thank you. It helped
        me in the longer run, for the better future`,
}, {
  image: '/images/testimonial-1.jpg',
  name: 'Aarushi Kaur',
  message: `You won't Regret it. Thank you. It helped
        me in the longer run, for the better future`,
}])
</script>

<template>
  <section id="testimonials" class="relative z-10">
    <h2 class="text-center text-xl my-8">All Testimonials</h2>
    <Splide :options="splideOption" tag="div" :has-track="false" class="carousal relative -left-4 md:-left-16 w-screen">
      <SplideTrack>
        <SplideSlide v-for="{ image, name, message } in testimonials">
          <TestimonalCard :image="image" :name="name" :message="message" />
        </SplideSlide>
      </SplideTrack>
      <div
        class="splide__arrows absolute top-[40%] md:top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between mx-[6%] md:mx-[18%] text-[20px] md:text-[28px] text-primary-400">
        <button
          class="splide__arrow splide__arrow--prev relative drop-shadow-md hover:drop-shadow-lg hover:text-primary-500 transition-all">
          <div v-html="sliderBtn"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 md:w-[4.375rem] -z-10" />
          <NuxtIcon name="chevron-bold" />
        </button>
        <button
          class="splide__arrow splide__arrow--next relative drop-shadow-md hover:drop-shadow-lg [rotate:y_180deg] hover:text-primary-500 transition-all">
          <div v-html="sliderBtn"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 md:w-[4.375rem] -z-10" />
          <NuxtIcon name="chevron-bold" />
        </button>
      </div>
    </Splide>
  </section>
</template>

<style scoped>
.carousal {
  @apply [mask-image:url('assets/images/carousal-mask.png')] [mask-size:400%] md:[mask-size:200%] lg:[mask-size:150%] [mask-repeat:no-repeat] [mask-position:center]
}
</style>