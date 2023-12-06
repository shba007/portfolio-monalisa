<script setup lang="ts">
import heroGrid from "~~/assets/images/grid.svg";
</script>

<template>
	<header class="absolute top-0 left-0 right-0 flex items-center px-16 py-6">
		<span class="text-2xl whitespace-nowrap basis-1/3">Monalisa Bairagi</span>
		<nav class="basis-1/3 max-lg:hidden">
			<ul class="flex justify-center items-center text-lg space-x-6">
				<li><a href="#home">Home</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
		<span class="basis-1/3 flex flex-row-reverse max-lg:flex-grow">
			<NuxtLink href="#">
				<NuxtIcon name="hamburger" class="text-[40px]" />
			</NuxtLink>
		</span>
	</header>
	<main class="relative pt-24 px-12">
		<picture class="absolute top-0 bottom-0 left-0 right-0 w-full lg:left-auto -z-50 object-cover">
			<source :srcset="heroGrid" media="(min-width: 1024px)" />
			<source :srcset="heroGrid" media="(min-width: 768px)" />
			<source :srcset="heroGrid" media="(min-width: 100px)" />
			<NuxtImg :src="heroGrid" alt="Hero Grid" />
		</picture>
		<section id="hero" class="relative flex flex-col max-h-screen">
			<div class="flex flex-col items-center z-10">
				<NuxtIcon name="logo" class="text-[184px]" filled />
				<h1 class="text-[3.5rem] text-center w-fit">Be Kind to Your Mind</h1>
				<p class="text-xl text-center leading-relaxed max-w-[33rem] mt-4">
					A world-class psychologist will help you to regain the control of your life
				</p>
				<button
					class="mt-6 text-xl text-white py-4 px-8 bg-primary-500 border-4 border-primary-400 rounded-full shadow-md">
					Get Appointment
				</button>
			</div>
			<div class="grid grid-cols-4 -translate-y-[30%] mix-blend-luminosity">
				<img class="relative left-2 top-12" src="assets/images/depressed.png" alt="depressed-logo" />
				<div class="relative">
					<img class="absolute -left-20 top-24 -z-50" src="assets/images/arrow.svg" alt="arrow" />
					<img class="absolute bottom-0 " src="assets/images/smiling.png" alt="smiling-logo" />
				</div>
				<img class="row-start-1 col-start-3 col-span-2 justify-self-end" src="assets/images/doc.png" alt="doctor" />
				<NuxtLink href="https://youtube.com/@mindful-healing-path" target="_blank"
					class="row-start-1 col-start-4 self-end cursor-pointer">
					<NuxtIcon name="youtube" class="text-[48px] text-light-600" />
				</NuxtLink>
			</div>
		</section>
	</main>
</template>