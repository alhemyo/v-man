import Vue from 'vue'
import axios from 'axios'

export default {

	state: {

		// User authentication
		username: "",
		password: "",
		token: localStorage.getItem('token') || null

	},

	getters: {
		isAuth(state) {
			return state.token !== null
		}
	},

	mutations: {

		// User auth mutations
		updateUsername(state, username) { return state.username = username },
		updatePassword(state, password) { return state.password = password },
		updateToken(state, token) { return state.token = token },
		updateAuth(state, auth) { return state.auth = auth }
	},

	actions: {

		// Login API request
		LOGIN({ commit }) {
			
			let data = {
				url: this.state.api + 'login',
				method: 'POST',
				headers: { Authorization: 'Basic ' + btoa( this.state.auth.username + $('.input-static').html()  + ':' + this.state.auth.password ) }
			}

      		return new Promise((resolve,reject) => {

				axios(data).then( response => {

					localStorage.setItem( 'token', this.state.auth.token )
					//localStorage.removeItem('token')
					commit( 'updateToken', response.data.token )

					resolve(response)

      			}).catch(error => {

					reject(error)
					
      			})

      		})

		},

		LOGOUT({ commit }) {

			return new Promise((resolve) => {

				localStorage.removeItem('token')
				commit( 'updateToken', null)
				commit( 'updateUsername', "" )
				commit( 'updatePassword', "" )

				resolve()
			})

		}

	}

}