import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";

// import marterial icon fonts designed by google
import "material-design-icons-iconfont/dist/material-design-icons.css";

// import material design icon fonts
import "@mdi/font/css/materialdesignicons.css";

// import axios for ajax application
import axios from "axios";
<<<<<<< HEAD
axios.defaults.baseURL = "http://localhost:5000/";
=======
axios.defaults.baseURL = "http://10.10.10.200:55001/";
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
