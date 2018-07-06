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

import projectSettings from '../components/settings/project/project-settings'
import createProject from '../components/settings/project/forms/create-project'
import editProject from '../components/settings/project/forms/edit-project'
import deleteProject from '../components/settings/project/forms/delete-project'


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
              name: 'editUser',
              component: editUser
            },

            {
              path: 'delete-user',
              name: 'deleteUser',
              component: deleteUser
            }

          ]
        },

        {
          path: 'project-settings',
          name: 'project-settings',
          component: projectSettings,

          children: [

            {
              path: 'create-project',
              name: 'createProject',
              alias: '',
              component: createProject
            },

            {
              path: 'edit-project',
              name: 'editProject',
              component: editProject
            },

            {
              path: 'delete-project',
              name: 'deleteProject',
              component: deleteProject
            }

          ]
        }

      ]
    }

  ]
})
