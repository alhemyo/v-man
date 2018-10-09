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
      component: () => import( '../views/login.vue' ),
      beforeEnter: ((to,from,next) => {

        store.getters.isAuth ? next('/') : next()

      })
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/dashboard.vue'),
      beforeEnter: ((to,from,next) => {

        !store.getters.isAuth ? next('/login') : next()

      }),
      children: [
        {
          path: '/myprojects',
          name: 'myprojects',
          components: {
            default: () => import('../views/main-view.vue'),
            sideview: () => import('../views/myprojects/my-projects.vue')
          },
          children: [
            {
              path: '/myprojects/project/:id',
              name: 'project',
              component: () => import('../views/myprojects/my-project.vue')
            }
          ]
        }
      ]
    }
  ]
})
