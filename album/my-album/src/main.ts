import Vue from "vue";
import App from "./App.vue";
import Album from "./views/Album.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Album)
}).$mount("#app");
