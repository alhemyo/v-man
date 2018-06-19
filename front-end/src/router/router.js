import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import app from '../App'
import login from '../components/auth/login'
import dashboard from '../components/dashboard'

Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [

    { 
      path: '/login', 
      name: 'login', 
      component: login
    },
    { 
      path: '/dashboard',
      alias: '/',
      name: 'dashboard',
      component: dashboard,
      beforeEnter: ((to, from, next) => {
        if( !store.getters.isAuth ) {
          next({ name: 'login' })
        }
        next()
      })
    }

  ]

})
