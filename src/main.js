import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {  } from "../src/assets/photon/css/photon.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
