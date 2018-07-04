import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Import STORE modules
import users from './modules/users'
import projects from './modules/projects'

export default new Vuex.Store({

  modules: {
    users,
    projects
  },

  state: {

    // API
    api: "http://127.0.0.1:5000/",
    testApi: "http://127.0.0.1:3000/",

    // Regex
		regex: {

      login: /[~`<>|\n/\\/\/\\]+$/,
      letters: /^[\s/a-zA-Z]*$/,
      numbers: /^[\s/0-9.]+$/,
      alphanumeric: /^[\s/0-9a-zA-Z/ -]+$/,
      mail: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      
    },

    // Pop
    popValue: "",
    popData: {}

  },
  
  mutations: {

    // Pop mutations
    updatePopValue( state, popValue ) { return state.popValue = popValue },
    updatePopData( state, popData ) { return state.popData = popData }
  },

  actions: {

  }

})
