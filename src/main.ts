import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { playFormat, playCountFormat } from './utils/filters'

Vue.config.productionTip = false
Vue.filter('playFormat', playFormat)
Vue.filter('playCountFormat', playCountFormat)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
