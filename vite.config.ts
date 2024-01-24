import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  assetsInclude: [
    "**/*.html"
  ],
  build: {
    minify: false,
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "PdfjsIframe",
      formats: ["es"],
      fileName: (format) => `pdfjs-iframe.${format}.js`,
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