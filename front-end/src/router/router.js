import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import login from '../components/auth/login'
import dashboard from '../components/dashboard'

// User configuration components
import userConfig from '../components/app-config/user-config/user-config'
import addUser from '../components/app-config/user-config/add-user'
import editUser from '../components/app-config/user-config/edit-user'
import deleteUser from '../components/app-config/user-config/delete-user'

// Project configuration components
import projectConfig from '../components/app-config/project-config/project-config'
import addProject from '../components/app-config/project-config/add-project'
import editProject from '../components/app-config/project-config/edit-project'
import deleteProject from '../components/app-config/project-config/delete-project'

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
          name: 'user-config',
          component: userConfig,

          children: [

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

        },

        {
          path: 'project-config',
          name: 'project-config',
          component: projectConfig,

          children: [

            {
              path: 'add-project',
              name: 'add-project',
              component: addProject
            },

            {
              path: 'edit-project',
              name: 'edit-project',
              component: editProject
            },

            {
              path: 'delete-project',
              name: 'delete-project',
              component: deleteProject
            }

          ]

        }

      ]
    }

  ] // routes

})
