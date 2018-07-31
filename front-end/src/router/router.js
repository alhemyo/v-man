import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)

// Import Auth
import login from '../components/auth/login'

// Import dashboard
import dashboard from '../components/dashboard'
import timeline from '../components/timeline'

// import user routes
import users from '../components/users/users'
import allUsers from '../components/users/all-users'
import addUser from '../components/users/forms/add-user'
import editUser from '../components/users/forms/edit-user'
import deleteUser from '../components/users/forms/delete-user'

// import project routes
import projects from '../components/projects/projects'
import project from '../components/projects/project'
import allProjects from '../components/projects/all-projects'
import addProject from '../components/projects/forms/add-project'
import editProject from '../components/projects/forms/edit-project'
import deleteProject from '../components/projects/forms/delete-project'

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
          path: 'timeline',
          name: 'timeline',
          component: timeline
        },

        {
          path: 'users',
          name: 'users',
          component: users,
          children: [

            {
              path: 'all-users',
              name: 'allUsers',
              component: allUsers
            },

            {
              path: 'add-user',
              name: 'addUser',
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
          path: 'project/:name',
          name: 'project',
          component: project
        },

        {
          path: 'projects',
          name: 'projects',
          component: projects,
          children: [

            {
              path: 'all-projects',
              name: 'allProjects',
              component: allProjects
            },

            {
              path: 'add-project',
              name: 'addProject',
              component: addProject
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
            },

          ]
        }

      ]
    }

  ]

})
