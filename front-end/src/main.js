import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Bars from 'vuebars'

Vue.config.productionTip = false

Vue.use(Bars)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
