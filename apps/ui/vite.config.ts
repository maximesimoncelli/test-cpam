import { fileURLToPath, URL } from "node:url";

import { PrimeVueResolver } from "@primevue/auto-import-resolver";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  root: "apps/ui", // This is relative to the root
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  build: {
    outDir: "../../dist/ui",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000000, // 1Mo, chunking primevue actually comes with a slight performance hit
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@pattatras": fileURLToPath(
        new URL("../../libs/pattatras/src", import.meta.url),
      ),
    },
  },
});
