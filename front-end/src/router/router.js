import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import login from '../components/auth/login'
import dashboard from '../components/dashboard'
import userConfig from '../components/app-config/user-config'

Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [

    { 
      path: '/login', 
      name: 'login', 
      component: login,
      beforeEnter: ((to, from, next) => {

        if ( store.getters.isAuth )
        {

          next({ name: 'dashboard' })

        }

        next()

      })
    },
    
    { 
      path: '/dashboard',
      alias: '/',
      name: 'dashboard',
      component: dashboard,
      beforeEnter: ((to, from, next) => {

        if ( !store.getters.isAuth ) 
        {

          next({ name: 'login' })

        }

        next()

      }),
      children: [
        {
          path: 'user-config',
          component: userConfig
        }
      ]
    }

  ]

})
