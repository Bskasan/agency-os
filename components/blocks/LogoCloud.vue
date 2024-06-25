<script setup lang="ts">
import type { BlockLogocloud, BlockLogocloudFile, File } from '~/types';

defineProps<{
	data: BlockLogocloud;
}>();

const { fileUrl } = useFiles();
</script>
<template>
	<BlockContainer>
		<TypographyTitle v-if="data?.title">{{ data?.title }}</TypographyTitle>
		<TypographyHeadline v-if="data?.headline" :content="data?.headline" size="lg" />
		<div class="flow-root mt-8 lg:mt-10">
			<div v-if="data.logos && data.logos.length > 0" class="grid gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-10">
				<div
					v-for="(logo, fileIdx) in data?.logos as BlockLogocloudFile[]"
					:key="logo.id"
					class="flex items-center justify-center"
				>
					<NuxtImg
						v-if="(logo.directus_files_id as File)?.id"
						class="h-32"
						:src="(logo.directus_files_id as File)?.id"
						:alt="(logo.directus_files_id as File)?.description ?? ''"
					/>
				</div>
			</div>
		</div>
	</BlockContainer>
</template>
