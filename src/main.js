import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import { createRouter } from './router'
import { createStore } from './store'
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = createRouter();
const store = createStore();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
