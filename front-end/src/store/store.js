import Vue from 'vue'
import Vuex from 'vuex'

import nav from './modules/nav'
import login from './modules/login'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    api: "http://127.0.0.1:5000/"
  },

  modules: {
    nav,
    login,
    user
  }

})
