# Vue PDF Viewer

`vue3-pdf-render` is a Vue.js library that provides a pre-styled component for PDF viewing in the browser using the PDF.js library.


## Installation

You can install the library via:

npm:
```bash
npm install vue3-pdf-render
```

yarn:
```bash
yarn add vue3-pdf-render
```

pnpm:
```bash
pnpm add vue3-pdf-render
```


## Usage

### Component Usage
import { PdfViewer } from 'vue3-pdf-render';

```vue
<script setup lang="ts">
  pdfUrl: 'path/to/your/file.pdf',
  viewerOptions: {
    // additional PDF.js options
  },
</script>

<template>
  <div>
    <PdfViewer :pdf-url="pdfUrl" :options="viewerOptions" />
  </div>
</template>
```


### Properties

- pdf-url (String): URL of the PDF file to be displayed.
- options (Object): Additional options for PDF.js.


### Contributions
Contributions are welcome! Feel free to open issues, submit pull requests, or report problems.
