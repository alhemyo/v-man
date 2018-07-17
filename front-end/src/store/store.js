import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import auth from './modules/auth'
import user from './modules/user/user'
import addUser from './modules/user/addUser'
import addProject from './modules/project/addProject'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {

    auth,
    user,
    addUser,
    addProject
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

    // components
    sidebar: true,
    menubar: false,

    // Pop
    popName: "",
    popData: "",

  },

  mutations: {

    // components mutations
    updateSidebar( state, sidebar ) { state.sidebar = sidebar },
    updateMenubar( state, menubar ) { state.menubar = menubar },

    // Pop mutations
    updatePopName( state, name ) { state.popName = name },
    updatePopData( state, data ) { state.popData = data }
  }

})
