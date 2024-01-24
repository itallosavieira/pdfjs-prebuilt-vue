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
yarn add vue-pdf-viewer
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
<template>
  <div>
    <VuePdfViewer :pdf-url="pdfUrl" :options="viewerOptions" />
  </div>
</template>

<script setup lang="ts">
  pdfUrl: 'path/to/your/file.pdf',
  viewerOptions: {
    // additional PDF.js options
  },
</script>
```

### Properties

- pdf-url (String): URL of the PDF file to be displayed.
- options (Object): Additional options for PDF.js.

### Customization
You can customize the appearance of the PDF viewer by adjusting the CSS classes or adding custom styles to the component.

### Contributions
Contributions are welcome! Feel free to open issues, submit pull requests, or report problems.

### License
This project is licensed under the MIT License - see the LICENSE.md file for more details.

Feel free to copy and use it as needed. If you have any further modifications or questions, please let me know!
