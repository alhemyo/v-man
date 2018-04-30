import Vue from 'vue'

export default {

  state: {
    username: '',
    password: '',
    validation: 'locked'
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

      // Create body object
      let data = {
        url: `${ this.state.api }login`,
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + btoa( this.state.login.username + ':' + this.state.login.password )
        },
        username: this.state.login.username,
        password: this.state.login.password
      }

      // Api call
      Vue.http(data).then(response => {
        if ( response.status === 200 )
          {
            Vue.http.get(
              `${ this.state.api }thisuser`,
              { headers: { 'x-access-token' : response.body.token } }
            ).then( data => {
              console.log(data.body)
              commit( 'updateId', data.body.id )
              commit( 'updateDashUsername', data.body.username )
              commit( 'updateEmail', data.body.email )
              commit( 'updateAdmin', data.body.is_admin )
              commit( 'updatePosition', data.body.position )
              commit( 'updateStatus', data.body.status )
              commit( 'updateValidation', 'success' )
            })
          }
      }).catch( error => {
          commit( 'updateValidation', 'error' )
        })
    }
  }
}
