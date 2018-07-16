import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import auth from './modules/auth'
import user from './modules/user/user'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {

    auth,
    user
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
    menubar: false

  },

  mutations: {

    // components mutations
    updateSidebar( state, sidebar ) { state.sidebar = sidebar },
    updateMenubar( state, menubar ) { state.menubar = menubar }
  }

})
