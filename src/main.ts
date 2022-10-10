import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";

import App from "./App.vue";
import router from "./router";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
// Import css animate files
import "@quasar/extras/animate/fadeInRight.css";
import "@quasar/extras/animate/fadeOutRight.css";

// Import icon libraries
import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";

import "./assets/main.css";

import i18next from "i18next";
import i18nextVue from "i18next-vue";
i18next.init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: { test: "test1" },
    },
    da: {
      translation: { test: "test2" },
    },
  },
});
const app = createApp(App);

app.use(i18nextVue, {
  i18next,
  rerenderOn: ["initialized", "languageChanged", "loaded"],
});

app.use(createPinia());
app.use(router);

app.use(Quasar, {
  plugins: { Notify }, // import Quasar plugins and add here
});

app.mount("#app");
