import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import login from '../components/auth/login'
import dashboard from '../components/dashboard'
import userConfig from '../components/app-config/user-config'
import addUser from '../components/app-config/add-user'
import editUser from '../components/app-config/edit-user'
import deleteUser from '../components/app-config/delete-user'

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

        }

      ]
    }

  ]

})
