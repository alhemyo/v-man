import Vue from 'vue'

export default {

  state: {

    username: "",
    password: "",
    validation: false,
    error: false,

    users: []

  },

  getters: {
    username(state) { return state.username },
    password(state) { return state.password },
    validation(state) { return state.validation },
    error(state) { return state.error },

    users(state) { return state.users }
  },

  mutations: {
    updateUsername( state, username ) { state.username = username },
    updatePassword( state, password ) { state.password = password },
    updateValidation( state, validation ) { state.validation = validation },
    updateError( state, error ) { state.error = error },

    updateUsers( state, users ) { state.users = users }
  },

  actions: {
    LOGIN_API({commit}) {
      if ( this.state.user.username === "jane doe" && this.state.user.password === 'password' )
        {
          $('.login-input').prop('disabled', true)
          commit( 'updateValidation', true )

          setTimeout(()=>{
            commit( 'updateLogin', false )
            commit( 'updateDashboard', true )
          },2000)
        }
      else
        {
          commit( 'updateError', true )
          $('.login-input').prop('disabled', true)

          setTimeout(() => {

            this.state.user.username = ""
            this.state.user.password = ""
            commit( 'updateError', false )
            $('.login-input').prop('disabled', false)
            $('.username').focus()

          },2000)
        }
    },

    GET_USERS({commit}) {
      Vue.http.get( this.state.testApi + 'users' ).then( response => {
        commit('updateUsers', response.body)
      })
    }
  }

}
