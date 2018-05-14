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
              $('.login-input').prop('disabled', true) // Disable login inputs on success
              commit( 'updateName', data.body.name )
              commit( 'updateSurname', data.body.surname )
              commit( 'updateId', data.body.id )
              commit( 'updateDashUsername', data.body.username )
              commit( 'updateEmail', data.body.email )
              commit( 'updateAdmin', data.body.is_admin )
              commit( 'updatePosition', data.body.position.toUpperCase() )
              commit( 'updateStatus', 'online' )
              commit( 'updateValidation', 'success' )

              setTimeout( () => {
                let logBoardW = $('.login-board-wrap').outerWidth()
                $('.login-bar').css({ transform: "translateX(-400px)" })
                $('.login-board-wrap').css({ transform: "translateX(" + logBoardW + "px)" })
                $('.login-wrap').hide(4000)
              },3000 )
            })
          }
      }).catch( error => {
          $('.login-input').prop('disabled', true) // Disable login inputs on error
          commit( 'updateValidation', 'error' )

          setTimeout( ()=> {
            commit( 'updateValidation', 'locked' )
            $('.login-input').prop('disabled', false)
            $('#username-input').attr('placeholder', 'username').focus()
            $('#password-input').attr('placeholder', 'password')
            this.state.login.username = "",
            this.state.login.password = ""
          },3000 )
        })
    }
  }
}
