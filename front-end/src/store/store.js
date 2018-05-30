
import Vue from 'vue'
import Vuex from 'vuex'

import components from './modules/components'
import user from './modules/user'
import projects from './modules/projects'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {

    // API
    api: "http://127.0.0.1:5000/",
    testApi: "http://127.0.0.1:3000/",

    // regex
    regex: {
      login: /[~`<>|\n/\\/\/\\]+$/,
      letters: /^[\s/a-zA-Z]*$/,
      numbers: /^[\s/0-9.]+$/,
      alphanumeric: /^[\s/0-9a-zA-Z/ -]+$/,
      mail: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    },

  },

  modules: {
    components,
    user,
    projects
  }

})
