<script setup lang="ts">
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

const splideOption: Options = {
  type: 'loop',
  arrows: false,
  autoplay: true,
  cover: true,
  heightRatio: 0.56,
};
</script>

<template>
  <section id="testimonials" class="text-3xl mx-12 border-solid border-light-500 border-x max-md:mx-4">
    <h2 class="text-center">All Testimonials</h2>
    <!-- carousel -->
    <section id="image-carousel" class="splide" aria-label="Beautiful Images">
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <img src="assets/images/arrow-left.svg" alt="prev" />
        </button>
        <button class="splide__arrow splide__arrow--next">
          <img src="assets/images/arrow-right.svg" alt="next" />
        </button>
      </div>
      <Splide ref="splide" :options="splideOption" tag="div" :has-track="false">
        <SplideTrack>
          <SplideSlide v-for="testimonial in [1, 2, 3]" :key="testimonial"
            class="flex justify-center items-center mb-4 mt-24 gap-24">
            <div
              class="flex flex-col justify-center items-center w-[31.25rem] h-[18.75rem] bg-white shadow-xl rounded-3xl relative">
              <!-- layer 1 -->
              <div class="w-[28.125rem] h-[16.875rem] bg-white shadow-xl rounded-3xl absolute -right-4 -z-10 opacity-60">
              </div>
              <div class="w-[28.125rem] h-[16.875rem] bg-white shadow-xl rounded-3xl absolute -left-4 -z-10 opacity-60">
              </div>
              <!-- layer 2 -->
              <div
                class="w-[25.3125rem] h-[15.1875rem] bg-white shadow-xl rounded-3xl absolute -right-8 -z-20 opacity-40">
              </div>
              <div class="w-[25.3125rem] h-[15.1875rem] bg-white shadow-xl rounded-3xl absolute -left-8 -z-20 opacity-40">
              </div>
              <!-- layer 0 -->
              <img src="assets/images/testimonials-pic-1.png" alt="" class="absolute -top-16" />
              <h4 class="text-[2rem] py-1 text-primary-600">
                Aarushi Kaur
              </h4>
              <p class="text-2xl leading-relaxed text-dark-400 text-center px-12">
                You won't Regret it. Thank you. It helped me in the longer
                run, for the better future
              </p>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </section>
  </section>
</template>