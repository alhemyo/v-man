import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)

export default new Router({

  mode: "history",

  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue'),
      beforeEnter: ((to, from, next) => {

        if ( store.getters.isAuth ) {
          next('/')
        }

        next()

      })
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../components/dashboard.vue'),
      beforeEnter: ((to,from,next) => {

        if ( !store.getters.isAuth ) {
          next('/login')
        }

        next()

      }),
      children: [

        {
          path: '/project/:name',
          name: 'project',
          component: () => import('../components/templates/project.vue')
        }
        
      ]
    }
  ]

})
