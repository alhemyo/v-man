
export default {

  state: {

    username: "",
    password: "",
    validation: false,
    error: false

  },

  getters: {
    username(state) { return state.username },
    password(state) { return state.password },
    validation(state) { return state.validation },
    error(state) { return state.error }
  },

  mutations: {
    updateUsername( state, username ) { state.username = username },
    updatePassword( state, password ) { state.password = password },
    updateValidation( state, validation ) { state.validation = validation },
    updateError( state, error ) { state.error = error }
  },

  actions: {
    LOGIN_API({commit}) {
      if ( this.state.login.username === "jane doe" && this.state.login.password === 'password' )
        {
          $('.input').prop('disabled', true)
          commit( 'updateValidation', true )

          setTimeout(()=>{
            commit( 'updateLogin', false )
            commit( 'updateDashboard', true )
          },2000)
        }
      else
        {
          commit( 'updateError', true )
          $('.input').prop('disabled', true)

          setTimeout(() => {

            this.state.login.username = ""
            this.state.login.password = ""
            commit( 'updateError', false )
            $('.input').prop('disabled', false)
            $('.username').focus()

          },2000)
        }
    }
  }

}
