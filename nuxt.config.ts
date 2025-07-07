import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { es } from "primelocale/js/es.js";

const currentPath = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@primevue/nuxt-module",
    "@vueuse/nuxt",
  ],

  css: [join(currentPath, "./assets/css/tailwind.css")],
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // ssr: false,
  icon: {
    // provider: 'server',
    customCollections: [
      {
        prefix: "x",
        dir: join(currentPath, "./assets/icons")
      }
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: false,
      sizeLimitKb: 5000
    }
  },
  primevue: {
    options: {
      theme: "none",
      locale: es
    }
  },
})