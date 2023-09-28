import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/common/css/_variables_color.scss";
import Multiselect from "vue-multiselect";
// import VueI18n from "vue-i18n";

import i18n from "@/i18n/i18n";

createApp(App).use(i18n).use(store).use(router).use(Multiselect).mount("#app");
