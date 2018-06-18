import Vue from 'vue'
import axios from 'axios'

export default {

	state: {

		// User authentication
		username: "",
		password: "",
		token: null

	},

	mutations: {

		// User auth mutations
		updateUsername(state, username) { return state.username = username },
		updatePassword(state, password) { return state.password = password },
		updateToken(state, token) { return state.token = token }
	},

	actions: {

		// Login API request
		LOGIN({ commit }) {
			
			let data = {
          url: this.state.api + 'login',
          method: 'POST',
          headers: { Authorization: 'Basic ' + btoa( this.state.auth.username + ':' + this.state.auth.password ) }
        }

      axios(data).then(response => console.log(response))

		}

	}

}