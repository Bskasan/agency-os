<script setup lang="ts">
import type { BlockStep, BlockStepItem } from '~/types/';
import { computed, unref } from 'vue';

const props = defineProps<{
	data: BlockStep;
}>();

const steps = computed(() => {
	if (!unref(props.data?.steps)) return [];
	return unref(props.data)?.steps as BlockStepItem[];
});
</script>

<template>
	<BlockContainer
		class="relative flex flex-col justify-between text-center h-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto"
	>
		<div class="w-full">
			<!-- First row of steps -->
			<div class="flex flex-col w-full mb-5 sm:flex-row sm:space-x-4">
				<div v-for="(step, stepIdx) in steps.slice(0, 2)" :key="stepIdx" class="w-full mb-5 sm:mb-0 sm:w-1/2">
					<div class="relative h-full ml-0 mr-0">
						<div class="relative h-full p-3 bg-white text-center border-2 rounded-lg">
							<NuxtImg :src="step.image" alt="" class="h-32 w-32 mx-auto rounded-lg" />
							<div class="flex items-center justify-center -mt-1">
								<h3 class="ml-3 text-lg font-bold text-gray-800 text-center">{{ step.title }}</h3>
							</div>
							<div class="mb-2 text-gray-600" v-html="step.content"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- Second row of steps -->
			<div class="flex flex-col w-full sm:flex-row sm:space-x-4">
				<div v-for="(step, stepIdx) in steps.slice(2, 5)" :key="stepIdx + 2" class="w-full mb-5 sm:mb-0 sm:w-1/3">
					<div class="relative h-full ml-0 mr-0">
						<div class="relative h-full p-3 bg-white border-2 rounded-lg">
							<NuxtImg :src="step.image" alt="" class="w-32 h-32 mx-auto mb-3 rounded-lg" />
							<div class="flex items-center justify-center">
								<h3 class="ml-3 text-lg font-bold text-gray-800 text-center">{{ step.title }}</h3>
							</div>
							<div class="mb-2 text-gray-600" v-html="step.content"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</BlockContainer>
</template>

<style scoped>
/* Additional styles if needed */
</style>
