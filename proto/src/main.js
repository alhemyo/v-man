import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import VueDragscroll from 'vue-dragscroll'

import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use( VueSocketio, 'http://localhost:5000', store )
Vue.use(VueDragscroll)

new Vue({

  router,
  store,
  render: h => h(App)

})
.$mount('#app')
