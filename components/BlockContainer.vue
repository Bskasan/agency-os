<script setup lang="ts">
interface BlockContainerProps {
	fullWidth?: boolean;
}

withDefaults(defineProps<BlockContainerProps>(), {
	fullWidth: false,
});
</script>
<template>
	<section :class="['py-2 mx-auto', !fullWidth ? 'px-2 lg:px-4 lg:py-8 max-w-screen-2xl' : '']">
		<slot />
	</section>
</template>
