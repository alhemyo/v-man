
export default {

  state: {

    username: "",
    password: "",
    validation: false

  },

  getters: {
    username(state) { return state.username },
    password(state) { return state.password },
    validation(state) { return state.validation }
  },

  mutations: {
    updateUsername( state, username ) { state.username = username },
    updatePassword( state, password ) { state.password = password },
    updateValidation( state, validation ) { state.validation = validation }
  },

  actions: {
    LOGIN_API({commit}) {

    }
  }

}
