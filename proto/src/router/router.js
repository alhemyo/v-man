import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

  mode: 'history',
  base: process.env.BASE_URL,

  routes: [

    {
      path: '/login',
      name: 'login'
    },

    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue'),

      children: [

        {
          path: '/myprofile',
          name: 'myprofile'
        },

        {
          path: '/myprojects',
          name: 'myprojects',
          components: {
            default: () => import('../views/myprojects/project.vue'),
            sideview: () => import('../views/myprojects/myprojects.vue')
          },

          children: [

            {
              path: '/myprojects/project/:id',
              name: 'project'
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
