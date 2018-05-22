import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueResource from 'vue-resource'
//import VueResource from 'vue-resource'

import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
