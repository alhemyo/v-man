
export default {

  state: {

    username: "",
    usernameActive: false,
    usernameSuccess: false,
    usernameError: false,
    password: "",
    passwordActive: false,
    passwordSuccess: false,
    passwordError: false,
    validation: false

  },

  getters: {
    username(state) { return state.username },
    usernameActive(state) { return state.usernameActive },
    usernameSuccess(state) { return state.usernameSuccess },
    usernameError(state) { return state.usernameError },
    password(state) { return state.password },
    passwordActive(state) { return state.passwordActive },
    passwordSuccess(state) { return state.passwordSuccess },
    passwordError(state) { return state.passwordError },
    validation(state) { return state.validation }
  },

  mutations: {
    updateUsername( state, username ) { state.username = username },
    updateUsernameActive( state, usernameActive ) { state.usernameActive = usernameActive },
    updateUsernameSuccess( state, usernameSuccess ) { state.usernameSuccess = usernameSuccess },
    updateUsernameError( state, usernameError ) { state.usernameError = usernameError },
    updatePassword( state, password ) { state.password = password },
    updatePasswordActive( state, passwordActive ) { state.passwordActive = passwordActive },
    updatePasswordSuccess( state, passwordSuccess ) { state.passwordSuccess = passwordSuccess },
    updatePasswordError( state, passwordError ) { state.passwordError = passwordError },
    updateValidation( state, validation ) { state.validation = validation }
  },

  actions: {
    LOGIN_API({commit}) {

    }
  }

}
