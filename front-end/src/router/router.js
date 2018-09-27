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

                store.commit( 'updateMiniSidebar', true )
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

                store.commit( 'updateMiniSidebar', true )
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

        // Regular routes

        {
          path: '/myprofile',
          name: 'myprofile',
          alias: '/',
          components: {
            default: () => import('../components/templates/user/timeline.vue'),
            sideview: () => import('../components/nav/side-bar/user-profile.vue')
          }
        },
        {
          path: '/myprojects',
          name: 'myprojects',
          components: {
            default: () => import('../components/templates/mainview.vue'),
            sideview: () => import('../components/nav/side-bar/user-projects.vue')
          },
          children: [

            {
              path: ':id',
              name: 'myproject',
              components: {
                mainview: () => import('../components/templates/project/project.vue')
              }
            }

          ]
        },
        {
          path: '/myevents',
          name: 'myevents',
          components: {
            sideview: () => import('../components/nav/side-bar/user-events.vue')
          }
        }

      ]

    }

  ]

})
