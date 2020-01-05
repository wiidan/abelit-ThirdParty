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
axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

console.log("starting app ...")

axios.get("/api/answer/version").then(res => {
  console.log(res.data)
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
