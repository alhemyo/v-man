import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/auth/login'
import dashboard from '../components/dashboard'

Vue.use(Router)

export default new Router({

  routes: [

    { path: '/login', name: 'login', component: login },
    { path: '/', name: 'dashboard', component: dashboard }

  ],

  mode: 'history'

})
