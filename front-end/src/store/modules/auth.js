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

			
		}

	}

}