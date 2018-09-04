import axios from 'axios'
import router from '../../router/router'

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

        updateAuthUsername( state,username ) { state.username = username },
        updateAuthPassword( state,password ) { state.password = password },
        updateAuthToken( state,token ) { state.token = token },
        resetAuthState( state ) { Object.assign( state, defaultAuthState() ) }

    },

    actions: {

        LOGIN() {

            return new Promise(( resolve,reject ) => {

                axios({

                    url: `${this.state.api}login`,
                    method: 'POST',
                    headers: { 

                        Authorization: 'Basic ' + btoa( this.state.auth.username + '@vertigo.com.mk:' + this.state.auth.password ) 

                    }
                    
                })

                .then( response => resolve(response) )

                .catch( error => reject(error) )

            })

        },

        LOGOUT({commit}) {

            localStorage.clear()

            commit('resetThisUserDefaultState')
            commit('resetThisUserProjectsState')
            commit('resetTasksState')
            commit('resetUsersState')
            commit('resetAuthState')

            router.push('/login')
        }
    }

}