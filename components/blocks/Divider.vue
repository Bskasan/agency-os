<script setup lang="ts">
interface DividerBlockProps {
	title?: string;
	headline?: string;
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
	</BlockContainer>
</template>
