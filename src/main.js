import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import { createRouter } from './router'
import { createStore } from './store'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const router = createRouter();
const store = createStore();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
