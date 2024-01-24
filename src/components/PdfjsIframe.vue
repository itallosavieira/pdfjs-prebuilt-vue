<script setup lang="ts">

type Props = {
  width?: string;
  height?: string;
  pdfFile: string
};

withDefaults(defineProps<Props>(), {
  width: "100%",
  height: "1000px",
});

</script>

<template>
  <iframe 
    ref="pdfIframe"
     title="PDF" 
     :width="width" 
     :height="height" 
     :src="`/assets/pdfjs/web/viewer.html?file=${pdfFile}`|| ''">
  </iframe>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
