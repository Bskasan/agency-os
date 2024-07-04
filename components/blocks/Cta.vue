<script setup lang="ts">
import type { BlockButtonGroup, BlockCta } from '~/types';

defineProps<{
	data: BlockCta;
}>();
</script>

<template>
	<BlockContainer>
		<div class="relative overflow-hidden p-8 text-gray-900 md:px-10 md:py-8 border-primary/50 rounded-panel">
			<div class="absolute inset-0 bg-red-500" />
			<div class="absolute inset-0" />
			<div class="relative md:flex md:items-center md:justify-between md:space-x-4">
				<div class="mb-4 md:mb-0">
					<TypographyTitle v-if="data?.title" class="text-lg sm:text-xl md:text-2xl lg:text-3xl">
						{{ data.title }}
					</TypographyTitle>
					<TypographyHeadline
						v-if="data.headline"
						:content="data.headline"
						class="font-bold text-base text-white sm:text-lg md:text-xl lg:text-2xl"
					/>
					<TypographyProse
						v-if="data.content"
						:content="data.content"
						class="mt-1 text-sm text-white sm:text-base md:text-lg lg:text-xl"
					/>
				</div>
				<div class="flex-shrink-0 mt-4 md:mt-0">
					<BlocksButtonGroup v-if="data.button_group" :data="data.button_group as BlockButtonGroup" />
				</div>
			</div>
		</div>
	</BlockContainer>
</template>
