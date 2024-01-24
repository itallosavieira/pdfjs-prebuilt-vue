<script setup lang="ts">
import { computed } from "vue";
type PdfViewerProps = {
  width?: string;
  height?: string;
};

const props = withDefaults(defineProps<PdfViewerProps>(), {
  width: '100%',
  height: '1000px'
});

computed(() => ({
  '--width': props.width,
  '--height': props.height,
}));
</script>

<template>
  <div id="pdfViewer">
    <h1> This is a </h1>
    <slot />
  </div>
</template>

<style>
#pdfViewer {
  width: var(--width);
  height: var(--height);
}
</style>