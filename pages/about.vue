<script setup lang="ts">
import arrow from "@/assets/images/arrow-2.svg?raw";
</script>

<template>
  <section class="relative flex flex-col md:flex-row justify-between">
    <div class="flex flex-col gap-4 justify-center my-4 md:my-12 px-4 md:px-5 lg:px-6 xl:px-0">
      <NuxtIcon name="logo" class="self-center md:-translate-x-4 -mb-4 text-[96px] md:text-[112px]" filled />
      <h2 class="text-xl md:text-2xl font-semi-bold">Hello,</h2>
      <h1 class="text-2xl md:text-4xl">I'm Monalisa Bairagi</h1>
      <h3 class="text-md md:text-xl">A Passionate Clinical Psychologist</h3>
      <p class="mt-2 md:mt-8 max-w-[36.25rem]">
        I completed M.Phil. in Clinical Psychology. With a 3+ year of experience, I have worked in clinical settings
        helping individuals overcome various challenges. I utilize evidence-based approaches such as CBT, DBT and
        mindfulness, tailoring each session to meet the unique needs of my clients.
        <br /><br />
        My expertise includes dealing with anxiety, depression, obsessions and behavioral and emotional problems of
        child and adolescence. I believe in creating a safe and non-judgmental space where clients can explore their
        thoughts and feelings. I am committed to fostering positive change, resilience, and empowering individuals to
        lead fulfilling lives.
        <br /><br />
        Outside of my practice, I am working with NGOs for community based intervention and spreading awareness about
        mental health
      </p>
      <div class="relative mt-2 md:mt-12 w-fit">
        <span class="block ml-auto mb-6 w-fit font-sub text-xl md:text-2xl font-semi-bold">Follow Me</span>
        <span v-html="arrow" class="absolute top-1/2 -translate-y-1/2 -right-16 w-10 md:w-12 stroke-black" />
        <div
          class="row-start-2 md:row-start-1 col-start-3 justify-self-end flex gap-4 md:gap-6 text-[28px] md:text-[42px]">
          <NuxtLink to="https://www.youtube.com/@mindful-healing-path" target="_blank" aria-label="youtube"
            class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="youtube" />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/mindful.healing.path/" target="_blank" aria-label="instagram"
            class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="instagram" />
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/monalisa-bairagi/" target="_blank" aria-label="linkedin"
            class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="linkedin" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="relative flex items-end justify-start w-screen md:max-w-[36rem] bg-dark-400 z-10">
      <img src="/images/hero-transparent.png" alt="hero-transparent" class="sm:w-3/4 md:w-full object-contain" />
    </div>
  </section>
</template>