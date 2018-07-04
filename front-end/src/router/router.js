import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)

// Import view components
import login from '../components/views/login'
import dashboard from '../components/views/dashboard'

// Import children components
import userSettings from '../components/settings/user/user-settings'
import addUser from '../components/settings/user/forms/add-user'
import editUser from '../components/settings/user/forms/edit-user'
import deleteUser from '../components/settings/user/forms/delete-user'


export default new Router({

  mode: 'history',

  routes: [

    {
      path: '/login',
      name: 'login',
      component: login,

      // route guard
      beforeEnter: ( ( to, from, next ) => {

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

      // route guard
      beforeEnter: ( ( to, from, next ) => {

        if ( !store.getters.isAuth )

        {
          next({ name: 'login' })
        }

        next()

      }),

      children: [

        {
          path: 'user-settings',
          name: 'user-settings',
          component: userSettings,

          children: [

            {
              path: 'add-user',
              name: 'addUser',
              alias: '',
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
