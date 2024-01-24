<script setup lang="ts">
import PdfjsIframe from './components/PdfjsIframe.vue'
import SamplePdf from '/assets/sample.pdf'
</script>

<template>
  <PdfjsIframe :pdf-file="SamplePdf" />
</template>

