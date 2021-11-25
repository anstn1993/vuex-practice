import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";

const app = createApp(App)
  .use(store)
  .mount("#app");

app.config.globalProperties.$filters = {
  currency(value) {
    return "$" + value;
  },
};
