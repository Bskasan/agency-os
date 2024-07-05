<script setup lang="ts">
interface BlockContainerProps {
	fullWidth?: boolean;
}

withDefaults(defineProps<BlockContainerProps>(), {
	fullWidth: false,
});
</script>

<template>
	<section :class="['py-2 mx-auto', !fullWidth ? 'px-4 sm:px-4 lg:px-6 lg:py-6 max-w-screen-2xl' : 'px-2']">
		<slot />
	</section>
</template>
