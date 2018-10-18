import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import VueSocketio from 'vue-socket.io'

Vue.use( VueSocketio, 'http://localhost:5000', store )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
