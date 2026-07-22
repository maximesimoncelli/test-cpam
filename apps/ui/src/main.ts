import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

const MyPreset = definePreset(Aura, {
  options: {
    prefix: "pattatras",
    darkModeSelector: "light",
  },
  semantic: {
    primary: {
      color: "light-dark({primary.900}, {primary.400})",
      contrastColor: "light-dark(#ffffff, {surface.900})",
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
  },
});

app.mount("#app");
