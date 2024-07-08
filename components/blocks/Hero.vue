<script setup lang="ts">
import type { BlockHero, BlockButtonGroup } from '~/types';

defineProps<{
	data: BlockHero;
}>();
</script>

<template>
	<BlockContainer class="relative grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
		<!-- Content -->
		<div class="md:pt-12 lg:col-span-2">
			<TypographyTitle v-if="data.title">
				{{ data.title }}
			</TypographyTitle>
			<TypographyHeadline v-if="data.headline" :content="data.headline" size="title" as="h1" class="text-lg" />
			<TypographyProse
				v-if="data.content"
				:content="data.content"
				class="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 font-display text-base"
			/>
			<BlocksButtonGroup
				v-if="data.button_group"
				:data="data.button_group as BlockButtonGroup"
				class="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14"
			/>
		</div>
		<!-- Image -->
		<div
			class="flex overflow-hidden items-center justify-center lg:relative lg:h-full lg:col-span-1"
			:class="data.image_position === 'left' ? 'order-first lg:-ml-48 md:-ml-16' : 'lg:-mr-48 md:-mr-16'"
		>
			<NuxtImg
				v-if="data.image"
				class="w-full h-full overflow-hidden dark:brightness-90 max-h-[700px] object-cover rounded-card"
				:src="data.image as string"
				alt=""
			/>

			<div v-if="data.image_position === 'right-content'" class="w-full h-full">
				<TypographyProse
					v-if="data.right_content"
					:content="data.right_content"
					:class="['py-6 font-display w-full h-full']"
				/>
			</div>
		</div>
	</BlockContainer>
</template>
