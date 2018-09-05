import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './modules/auth'
import thisUser from './modules/thisUser'
import thisUserProjects from './modules/projects/thisUserProjects'
import tasks from './modules/projects/tasks'
import addTask from './modules/projects/addTask'
import users from './modules/users/users'

export default new Vuex.Store({

  modules: {
    auth,
    thisUser,
    thisUserProjects,
    tasks,
    users,
    addTask
  },

  state: {

    // API
    api: "http://127.0.0.1:5000/",
    testApi: "http://127.0.0.1:3000/",

    // Regex
		regex: {

      login: /[~`<>|\n/\\//\\]+$/,
      letters: /^[\s/a-zA-Z]*$/,
      numbers: /^[\s/0-9.]+$/,
      alphanumeric: /^[\s/0-9a-zA-Z/ -]+$/,
      mail: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      
    },

    miniSidebar: false

  },
  mutations: {

    updateMiniSidebar( state, mini ) { state.miniSidebar = mini }

  },
  actions: {

  }
})
