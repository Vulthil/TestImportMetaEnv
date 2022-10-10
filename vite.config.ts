import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ImportMetaEnvPlugin from "@import-meta-env/unplugin";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vueJsx(),
    quasar({
      sassVariables: "src/assets/quasar-variables.scss",
    }),
    ImportMetaEnvPlugin.vite({ example: ".env.example.public", env: ".env" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
