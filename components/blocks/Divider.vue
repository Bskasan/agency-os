<script setup lang="ts">
interface DividerBlockProps {
	title?: string;
	headline?: string;
	description?: string;
}

defineProps<{ data: DividerBlockProps }>();
</script>

<template>
	<BlockContainer class="flex flex-col items-center">
		<div v-if="data.title" class="flex flex-col items-center text-center mb-4">
			<TypographyTitle>
				{{ data.title }}
			</TypographyTitle>
			<TypographyHeadline :content="data.headline" />
		</div>
		<div class="w-full h-px bg-gray-300 dark:bg-gray-700"></div>
		<TypographyHeadline
			v-if="data.description"
			:content="data.description"
			size="lg"
			class="max-w-full text-center my-6 mx-6 font-light text-gray-500 lg:mb-8 sm:text-lg lg:text-xl dark:text-gray-400"
		/>
	</BlockContainer>
</template>
