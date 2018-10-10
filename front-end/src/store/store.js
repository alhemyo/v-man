import Vue from 'vue'
import Vuex from 'vuex'

// IMPORT STORE MODULES

import auth from './modules/auth/auth'
import thisUser from './modules/auth/thisUser'
import myProjects from './modules/myprojects/myProjects'
import users from './modules/users/users'
import tasks from './modules/myprojects/tasks'
import notes from './modules/myprojects/notes'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: { auth, thisUser, myProjects, users, tasks, notes },

  state: {

    // API
    api: "http://127.0.0.1:5000/api/",

    // Regex
		regex: {

      login: /[~`<>|\n/\\//\\]+$/,
      letters: /^[\s/a-zA-Z]*$/,
      numbers: /^[\s/0-9.]+$/,
      alphanumeric: /^[\s/0-9a-zA-Z/ -]+$/,
      mail: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      
    },

    // SIDEBAR
    sidebar: true
    
  },

  mutations: {
    updateSidebar(state, sidebar) { state.sidebar = sidebar }
  }

})
