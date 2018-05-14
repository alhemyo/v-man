import Vue from 'vue'
import Vuex from 'vuex'

import nav from './modules/nav'
import login from './modules/login'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    api: "http://127.0.0.1:5000/",
    regex: {
      letters: /^[a-zA-Z]*$/,
      numbers: /^[\s/0-9.]+$/,
      alphanumeric: /^[\s/0-9a-zA-Z/ -]+$/,
      mail: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    }
  },

  modules: {
    nav,
    login,
    user
  }

})
