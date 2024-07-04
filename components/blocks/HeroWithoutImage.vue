<script setup lang="ts">
import type { BlockHeroWithoutImage, BlockButtonGroup } from '~/types';

defineProps<{
	data: BlockHeroWithoutImage;
}>();
</script>

<template>
	<BlockContainer class="h-screen flex items-center justify-center relative">
		<!-- Image -->
		<NuxtImg v-if="data.image" class="absolute inset-0 w-full h-full object-cover" :src="data.image as string" alt="" />

		<!-- Content -->
		<div class="relative z-10 flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg text-center">
			<TypographyTitle v-if="data.title" class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
				{{ data.title }}
			</TypographyTitle>
			<TypographyHeadline
				v-if="data.headline"
				:content="data.headline"
				size="title"
				as="h1"
				class="text-lg text-white drop-shadow-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
			/>
			<TypographyProse
				v-if="data.content"
				:content="data.content"
				size="lg"
				class="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
			/>
			<BlocksButtonGroup
				v-if="data.button_group"
				:data="data.button_group as BlockButtonGroup"
				class="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14"
			/>
		</div>
	</BlockContainer>
</template>
