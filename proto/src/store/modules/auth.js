import axios from 'axios'

const authDefault = () => {
    return {
        username: '',
        password: '',
        token: localStorage.getItem('token') || null
    }
}

const state = authDefault()

export default {

    state,

    mutations: {
        updateUsername( state, username ) { state.username = username },
        updatePassword( state, password ) { state.password = password },
        updateToken( state, token ) { state.token = token }
    },

    actions: {

        authenticate({ commit }, { user, pass }) {

            return new Promise(( resolve, reject ) => {

                axios({

                    method: 'POST',
                    url: `${this.state.config.api}login`,
                    headers: { Authorization: 'Basic ' + btoa( user + '@vertigo.com.mk:' + pass ) }

                })
                .then(response => {

                    localStorage.setItem( 'token', response.data.token )
                    commit( 'updateToken', response.data.token )
                    resolve(response)

                })
                .catch(error => reject(error))

            })

        },

        getSelf() {

            return new Promise(( resolve, reject ) => {

                axios({

                    method: 'GET',
                    url: `${this.state.config.api}users/self`,
                    headers: { 'x-access-token' : localStorage.getItem('token') }

                })
                .then(response => {

                    for ( let item in response.data ) {
                        localStorage.setItem( item, response.data[item] )
                    }

                    resolve(response)

                })
                .catch(error => reject( error ))

            })

        }

    }

}