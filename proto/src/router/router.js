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
      component: () => import('../views/login.vue'),
      beforeEnter: ((to,from,next) => {

        store.getters.isAuth ? next('/') : next()

      })
    },

    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue'),
      beforeEnter: ((to,from,next) => {

        !store.getters.isAuth ? next('/login') : next()

      }),

      children: [

        {
          path: '/myprofile',
          name: 'myprofile',
          component: () => import('../views/test.vue')
        },

        {
          path: '/myprojects',
          name: 'myprojects',
          components: {
            default: () => import('../views/myprojects/projectViewer.vue'),
            sideview: () => import('../views/myprojects/myprojects.vue')
          },

          children: [

            {
              path: '/myprojects/:id',
              name: 'project',
              component: () => import('../views/myprojects/project.vue')
            }

          ]

        },

        {
          path: '/myevents',
          name: 'myevents'
        }

      ]

    }

  ]

})
