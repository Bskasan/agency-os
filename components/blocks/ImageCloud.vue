<script setup lang="ts">
import type { BlockImageCloud, BlockImageCloudFile, File } from '~/types';

defineProps<{
	data: BlockImageCloud;
}>();

const { fileUrl } = useFiles();
</script>

<template>
	<BlockContainer>
		<TypographyTitle v-if="data?.title">{{ data?.title }}</TypographyTitle>
		<TypographyHeadline v-if="data?.headline" :content="data?.headline" size="lg" />
		<div class="flow-root mt-8 lg:mt-10">
			<div v-if="data.images && data.images.length > 0" class="grid gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-10">
				<div
					v-for="(image, fileIdx) in data.images as BlockImageCloudFile[]"
					:key="image.id"
					class="flex items-center justify-center"
				>
					<NuxtImg
						v-if="image.directus_files_id && (image.directus_files_id as File)?.id"
						class="h-32"
						:src="(image.directus_files_id as File)?.id"
						:alt="(image.directus_files_id as File)?.description ?? ''"
					/>
				</div>
			</div>
		</div>
	</BlockContainer>
</template>
