import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.filter('currency', value => {
  return '$' + value.toLocaleString()
})
Vue.use(VueResource)
Vue.http.options.root = 'https://stock-trader-21ccb.firebaseio.com/'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
