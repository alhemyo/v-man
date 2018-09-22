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

        // Admin routes

        {
          path: '/admin/projects',
          name: 'projects',
          component: () => import( '../components/templates/admin/projects/projects.vue' ),
          beforeEnter: (( to, from, next ) => {

            if ( store.state.thisUser.is_admin === 'true' ) {

              if ( store.state.thisUser.admin_type === 'uber admin' || store.state.thisUser.admin_type === 'project admin' ) {

                next()

              }

              else {

                next('/')

              }

            }

            else {

              next('/')

            }

          })
        },
        {
          path: '/admin/users',
          name: 'users',
          component: () => import( '../components/templates/admin/users/users.vue' ),
          beforeEnter: (( to, from, next ) => {

            if ( store.state.thisUser.is_admin === 'true' ) {

              if ( store.state.thisUser.admin_type === 'uber admin' || store.state.thisUser.admin_type === 'user admin' ) {

                next()

              }

              else {

                next('/')

              }

            }

            else {

              next('/')

            }

          })
        },

        // Dynamic project routes

        {
          path: '/project/:id',
          name: 'project',
          component: () => import('../components/templates/project/project.vue')
        },

        {
          path: '/calendar',
          name: 'calendar',
          component: () => import('../components/templates/events/calendar.vue')
        }

      ]

    }

  ]

})
