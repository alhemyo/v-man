import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)

export default new Router({

  mode: 'history',
  base: process.env.BASE_URL,

  routes: [

    {
      path: '/login',
      name: 'login',
      component: () => import( '../components/main/login.vue' ),
      beforeEnter: ((to,from,next) => {

        store.getters.isAuth ? next('/') : next()

      })
    },

    {
      path: '/',
      name: 'dashboard',
      component: () => import( '../components/main/dashboard.vue' ),
      beforeEnter: ((to,from,next) => {

        !store.getters.isAuth ? next('/login') : next()

      }),

      children: [

        {
          path: '/project/:id',
          name: 'project',
          component: () => import('../components/templates/project/project.vue')
        }

      ]

    }

  ]

})
