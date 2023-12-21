<script setup lang="ts">
import sliderBtn from "~~/assets/images/slider-button.svg?raw";
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

const splideOption: Options = {
  arrows: true,
  type: 'loop',
  autoplay: true,
  padding: '16rem',
  autoWidth: true,
  focus: 'center',
  gap: '16rem'
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
  <section id="testimonials">
    <h2 class="text-center text-xl my-8">All Testimonials</h2>
    <!-- class="flex justify-center items-center gap-40 my-24" -->
    <Splide :options="splideOption" tag="div" :has-track="false">
      <SplideTrack>
        <SplideSlide v-for="{ image, name, message } in testimonials">
          <TestimonalCard :image="image" :name="name" :message="message" />
        </SplideSlide>
      </SplideTrack>
      <div
        class="splide__arrows absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between mx-[18%] text-primary-400">
        <button class="splide__arrow splide__arrow--prev relative drop-shadow-md">
          <div v-html="sliderBtn" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
          <NuxtIcon name="chevron-bold" class="text-[28px]" />
        </button>
        <button class="splide__arrow splide__arrow--next relative drop-shadow-md [rotate:y_180deg]">
          <div v-html="sliderBtn" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 " />
          <NuxtIcon name="chevron-bold" class="text-[28px]" />
        </button>
      </div>
    </Splide>
  </section>
</template>