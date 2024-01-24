<script setup lang="ts">

import { onMounted, ref } from 'vue'

type Props = {
  width?: string;
  height?: string;
  pdfFile: string
};

withDefaults(defineProps<Props>(), {
  width: "100%",
  height: "1000px",
});

const iframeContent = ref(null);

onMounted(() => {
  // @ts-ignore
  import('../assets/pdfjs/web/viewer.html').then((htmlModule) => {
      iframeContent.value = htmlModule.default;
    });
})
</script>

<template>
  <iframe 
    ref="pdfIframe"
     title="PDF" 
     :width="width" 
     :height="height" 
     :src="`${iframeContent}?file=${pdfFile}`|| ''">
  </iframe>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
