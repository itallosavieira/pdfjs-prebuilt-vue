import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  assetsInclude: [
    "**/*.html"
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "PdfjsIframe",
    },
    rollupOptions: {
      external: ["vue", "@vueuse/core"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "@vueuse/core": "VueUse",
        },
      },
    },
  },
});
