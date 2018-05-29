export default {

	state: {
		username: "",
		password: ""
	},

	getters: {
		username(state) { return state.username },
		password(state) { return state.password } 
	},

	mutations: {
		updateUsername( state, username ) { state.username = username },
		updatePassword( state, password ) { state.password = password }
	}

}
