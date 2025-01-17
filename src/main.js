import "./assets/main.css";

import { createApp } from "vue";

import i18n from "./i18n"; // Import the i18n instance
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");
