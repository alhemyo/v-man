import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)

// Import Auth
import login from '../components/auth/login'

// Import dashboard
import dashboard from '../components/dashboard'
import users from '../components/users/users'
import allUsers from '../components/users/all-users'
import addUser from '../components/users/add-user'
import editUser from '../components/users/edit-user'
import deleteUser from '../components/users/delete-user'

export default new Router({

  mode: 'history',

  routes: [

    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: (( to, from, next ) => {

        if ( store.getters.isAuth ) {

          next({ name: 'dashboard' })

        }

        next()

      })
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      alias: '/',
      component: dashboard,
      beforeEnter: (( to, from, next ) => {

        if ( !store.getters.isAuth ) {

          next({ name: 'login' })

        }

        next()

      }),
      children: [

        {
          path: 'users',
          name: 'users',
          component: users,
          children: [

            {
              path: 'all-users',
              name: 'all-users',
              component: allUsers
            },

            {
              path: 'add-user',
              name: 'add-user',
              component: addUser
            },

            {
              path: 'edit-user',
              name: 'edit-user',
              component: editUser
            },

            {
              path: 'delete-user',
              name: 'delete-user',
              component: deleteUser
            }

          ]
        }

      ]
    }

  ]

})
