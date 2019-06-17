import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { playFormat } from './utils/filters'

Vue.config.productionTip = false
Vue.filter('playFormat', playFormat)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
