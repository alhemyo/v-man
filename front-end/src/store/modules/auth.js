
import axios from 'axios'

const defaultAuthState = () => {

    return {

        username: '',
        password: '',
        token: localStorage.getItem('token') || null

    }

}

const state = defaultAuthState()

export default {

    state,

    getters: {

        isAuth: state => !!state.token
    },

    mutations: {

        updateAuthUsername( state, username ) { state.username = username },
        updateAuthPassword( state, password ) { state.password = password },
        resetAuthState( state ) { Object.assign( state, defaultAuthState() ) }
    },

    actions: {

        AUTH_USER() {

            return new Promise((resolve, reject) => {

                axios({

                    url: this.state.api + 'login',
                    method: 'POST',
                    headers: { Authorization: 'Basic ' + btoa( this.state.auth.username + ':' + this.state.auth.password ) }

                })

                .then( response => {

                    resolve(response)

                 })

                 .catch( error => {

                     reject(error)

                 })

            })

        }
    }

}