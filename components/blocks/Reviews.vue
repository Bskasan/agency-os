<script setup lang="ts">
import type { BlockReviews, BlockButtonGroup } from '~/types';
import { onMounted } from 'vue';
import { content } from '#tailwind-config';

withDefaults(
	defineProps<{
		data: BlockReviews;
	}>(),
	{
		data: () => ({
			alignment: 'center',
		}),
	},
);

// // Dynamically load the Elfsight script
// const loadElfsightScript = () => {
// 	if (!document.querySelector('script[src="https://apps.elfsight.com/p/platform.js"]')) {
// 		const script = document.createElement('script');
// 		script.src = 'https://apps.elfsight.com/p/platform.js';
// 		script.defer = true;
// 		document.head.appendChild(script);
// 	}
// };

// onMounted(() => {
// 	loadElfsightScript();
// });
</script>

<template>
	<BlockContainer>
		<section>
			<div class="grid max-w-full text-center px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<divs
					:class="[
						'place-self-center lg:col-span-4',
						{ 'text-left': data.alignment === 'left', 'text-center': data.alignment === 'center' },
					]"
					class="mr-auto"
				>
					<TypographyTitle
						v-if="data.title"
						class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none sm:text-5xl lg:text-6xl dark:text-white"
					>
						{{ data.title }}
					</TypographyTitle>
					<TypographyHeadline
						v-if="data.headline"
						:content="data.headline"
						size="lg"
						class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 sm:text-lg lg:text-xl dark:text-gray-400"
					/>
					<BlocksButtonGroup v-if="data.button_group" :data="data.button_group as BlockButtonGroup" />
				</divs>
				<div class="overflow-hidden lg:mt-0 lg:col-span-8 lg:flex">
					<!-- <div class="elfsight-app-bbd80397-1b9f-4f1a-8fb8-7c6904849934" data-elfsight-app-lazy></div> -->
					<TypographyHeadline v-if="data.reviews_section" :content="data.reviews_section" />
				</div>
			</div>
		</section>
	</BlockContainer>
</template>
