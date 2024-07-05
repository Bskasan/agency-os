<script setup lang="ts">
import type { BlockInfoBox, BlockInfoBoxItem } from '~/types/';
import { computed, unref } from 'vue';

const props = defineProps<{
	data: BlockInfoBox;
}>();

const steps = computed(() => {
	if (!unref(props.data?.items)) return [];
	return unref(props.data)?.items as BlockInfoBoxItem[];
});

const isEven = (index: number) => index % 2 === 0;
</script>

<template>
	<BlockContainer>
		<TypographyTitle v-if="data.title">{{ data.title }}</TypographyTitle>
		<TypographyHeadline v-if="data.headline" :content="data.headline" size="lg" />
		<div class="mt-8 grid gap-8 lg:grid-cols-2">
			<div
				v-for="(item, itemIdx) in steps"
				:key="itemIdx"
				:class="[
					'relative p-6 ring-primary/50 ring-1 rounded-panel flex flex-col',
					{ 'lg:flex-row': isEven(itemIdx), 'lg:flex-row-reverse': !isEven(itemIdx) },
				]"
			>
				<div
					v-if="item.image"
					class="flex-shrink-0 dark:bg-white dark:brightness-90 rounded-panel mb-4 lg:mb-0 lg:w-48"
				>
					<NuxtImg
						class="object-cover w-full h-32 rounded-card lg:h-full"
						:src="safeRelationId(item.image) as string"
						:alt="safeRelation(item.image)?.description ?? ''"
					/>
				</div>
				<div class="w-full text-left">
					<TypographyHeadline v-if="item.title" :content="item.title" size="sm" />
					<TypographyProse v-if="item.content" :content="item.content" class="mt-4" />
				</div>
			</div>
		</div>
	</BlockContainer>
</template>
