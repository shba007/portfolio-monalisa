<script setup lang="ts">
import { differenceInYears, formatDuration } from 'date-fns'
import arrow from '@/assets/images/arrow-2.svg?raw'

const title = `About Me`
const description = `Details About Monalisa Bairagi Clinical Psychologist`
const url = 'https://monalisa-bairagi.com'

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + '/previews/about.webp',
  ogUrl: url + '/about',
})

const DOE = '2021-01-01'

const now = useNow()

const experience = computed(() => {
  return formatDuration({ years: differenceInYears(now.value, DOE) }, { format: ['years'] })
})
</script>

<template>
  <section class="relative flex flex-col justify-between lg:flex-row">
    <div class="my-4 flex flex-col justify-center gap-4 px-4 lg:my-12 lg:pl-6 xl:px-0">
      <NuxtIcon name="local:logo" class="-mb-4 self-center text-[96px] lg:-translate-x-4 lg:text-[112px]" filled />
      <h1 class="text-xl font-semi-bold lg:text-2xl">Hello,</h1>
      <h2 class="text-2xl lg:text-4xl">I'm Monalisa Bairagi</h2>
      <h3 class="text-md lg:text-xl">A Passionate Clinical Psychologist</h3>
      <p class="mt-2 md:max-w-full lg:mt-8 lg:max-w-[36.25rem]">
        I completed M.Phil. in Clinical Psychology. With a {{ experience }} of experience, I have worked in clinical settings helping individuals overcome various challenges. I utilize evidence-based
        approaches such as CBT, DBT and mindfulness, tailoring each session to meet the unique needs of my clients. <br /><br />
        My expertise includes dealing with anxiety, depression, obsessions and behavioral and emotional problems of child and adolescence. I believe in creating a safe and non-judgmental space where
        clients can explore their thoughts and feelings. I am committed to fostering positive change, resilience, and empowering individuals to lead fulfilling lives.
        <br /><br />
        Outside of my practice, I am working with NGOs for community based intervention and spreading awareness about mental health
      </p>
      <div class="relative mt-2 w-fit lg:mt-12">
        <span class="mb-6 ml-auto block w-fit font-sub text-xl font-semi-bold lg:text-2xl">Follow Me</span>
        <span class="absolute -right-16 top-1/2 w-10 -translate-y-1/2 stroke-black lg:w-12" v-html="arrow" />
        <div class="col-start-3 row-start-2 flex gap-4 justify-self-end text-[28px] lg:row-start-1 lg:gap-6 lg:text-[42px]">
          <NuxtLink to="https://www.youtube.com/@mindful-healing-path" target="_blank" aria-label="youtube" class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="local:youtube" />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/mindful.healing.path/" target="_blank" aria-label="instagram" class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="local:instagram" />
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/monalisa-bairagi/" target="_blank" aria-label="linkedin" class="drop-shadow hover:drop-shadow-md">
            <NuxtIcon name="local:linkedin" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="relative -left-4 z-10 flex w-screen items-end justify-start bg-dark-400 lg:left-9 lg:max-w-[36rem]">
      <NuxtImg src="/images/grid.svg" loading="lazy" class="absolute left-0 right-0 top-0 -z-50 h-3/4 object-cover opacity-20" aria-hidden="true" />
      <NuxtImg src="/images/hero-transparent.png" alt="hero-transparent" loading="lazy" class="object-contain sm:w-3/4 lg:w-full" />
    </div>
  </section>
</template>
