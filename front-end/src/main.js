import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.use(router)

Vue.config.productionTip = false

new Vue({

  router,
  store,

  render: h => h(App)

}).$mount('#app')
