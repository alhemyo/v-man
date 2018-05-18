import Vue from 'vue'
import App from './App'
//import VueResource from 'vue-resource'

import { store } from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
