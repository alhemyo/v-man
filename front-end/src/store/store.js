import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import auth from './modules/auth'

export default new Vuex.Store({

	modules: {
		auth
	},

	state: {

    settings: false,

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
    }

  },
  
  mutations: {
    updateSettings(state, settings) { this.state.settings = settings }
  }
  
})
