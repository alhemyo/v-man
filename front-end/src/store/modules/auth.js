import Vue from 'vue'
import axios from 'axios'

export default {

	state: {

		// User authentication
		username: "",
		password: "",
		token: localStorage.getItem('token') || null,

		// Current User 

		// Basic info
		name: localStorage.getItem('name') || null,
		surname: localStorage.getItem('surname') || null,
		address: localStorage.getItem('address') || null,
		phone: localStorage.getItem('phone') || null,
		gender: localStorage.getItem('gender') || null,
		email: localStorage.getItem('email') || null,
		education: localStorage.getItem('education') || null,
		umcn: localStorage.getItem('umcn') || null,

		// Birthday
		day: "",
		month: "",
		year: "",

		// Work info
		admin_type: localStorage.getItem('admin_type') || null,
		is_admin: localStorage.getItem('is_admin') || false,
		position: localStorage.getItem('position') || null
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
		updateAuth(state, auth) { return state.auth = auth },

		// Current user mutations
		updateName(state, name) { return state.name = name },
		updateSurname(state, surname) { return state.surname = surname },
		updateAddress(state, address) { return state.address = address },
		updatePhone(state, phone) { return state.phone = phone },
		updateGender(state, gender) { return state.gender = gender },
		updateEmail(state, email) { return state.email = email },
		updateEducation(state, education) { return state.education = education },
		updateUmcn(state, umcn) { return state.umcn = umcn },
		updateDay(state, day) { return state.day = day },
		updateMonth(state, month) { return state.month = month },
		updateYear(state, year) { return state.year = year },
		updateAdminType(state, admin_type) { return state.admin_type = admin_type },
		updateIsAdmin(state, is_admin) { return state.is_admin = is_admin },
		updatePosition(state, position) { return state.position = position }
	},

	actions: {

		// Login API request
		LOGIN({ commit }) {
			
			let data = {
				url: this.state.api + 'login',
				method: 'POST',
				headers: { Authorization: 'Basic ' + btoa( this.state.auth.username + "@vertigo.com.mk"  + ':' + this.state.auth.password ) }
			}

      		return new Promise((resolve,reject) => {

				axios(data).then( response => {

					commit( 'updateToken', response.data.token )

					localStorage.setItem( 'token', this.state.auth.token )

					resolve(response)

      			}).catch(error => {

					reject(error)
					
      			})

      		})

		},

		GET_USER({ commit }) {

			axios({
				method: 'GET',
				url: this.state.api + 'thisuser',
				headers: {
					'x-access-token' : this.state.auth.token
				}
			}).then(data => {

				// Fill user info from response
				commit( 'updateName', data.data.name )
				commit( 'updateSurname', data.data.surname )
				commit( 'updateAddress', data.data.address )
				commit( 'updatePhone', data.data.phone )
				commit( 'updateGender', data.data.gender )
				commit( 'updateEmail', data.data.email )
				commit( 'updateEducation', data.data.education )
				commit( 'updateUmcn', data.data.umcn )
				commit( 'updateDay', data.data.day )
				commit( 'updateMonth', data.data.month )
				commit( 'updateYear', data.data.year )
				commit( 'updateAdminType', data.data.admin_type )
				commit( 'updateIsAdmin', data.data.is_admin )
				commit( 'updatePosition', data.data.position )

			}).catch(error => console.log(error))

		},

		LOGOUT({ commit }) {

			return new Promise((resolve) => {

				localStorage.clear()
				commit( 'updateToken', null)
				commit( 'updateUsername', "" )
				commit( 'updatePassword', "" )

				resolve()
			})

		}

	}

}