# Vue PDF Viewer

`vue-pdf-viewer` is a Vue.js library that provides a pre-styled component for PDF viewing in the browser using the PDF.js library.


## Installation

You can install the library via:

npm:
```bash
npm install vue-pdf-viewer
```

yarn:
```bash
yarn add vue-pdf-viewer
```

pnpm:
```bash
pnpm add vue-pdf-viewer
```


## Usage

### Global Registration

```javascript
import Vue from 'vue';
import VuePdfViewer from 'vue-pdf-viewer';

Vue.use(VuePdfViewer);
```


### Component Usage
```vue
<script setup lang="ts">
  pdfUrl: 'path/to/your/file.pdf',
  viewerOptions: {
    // additional PDF.js options
  },
</script>

<template>
  <div>
    <VuePdfViewer :pdf-url="pdfUrl" :options="viewerOptions" />
  </div>
</template>
```


### Properties

- pdf-url (String): URL of the PDF file to be displayed.
- options (Object): Additional options for PDF.js.


### Contributions
Contributions are welcome! Feel free to open issues, submit pull requests, or report problems.
