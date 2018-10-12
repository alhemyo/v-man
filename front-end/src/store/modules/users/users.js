import axios from "axios";

const usersDefaultState = () => {

    return {

        users: []

    }

}

const state = usersDefaultState()

export default {

    state,

    mutations: {

        updateUsers( state, users ) { state.users = users },
        unshiftUser( state, user ) { state.users.unshift( user ) },
        resetUsersState( state ) { Object.assign( state, usersDefaultState() ) }

    },

    actions: {

        getUsers({commit}) {

            return new Promise(( resolve, reject ) => {

                axios({

                    method: 'GET',
                    url: `${this.state.api}users`,
                    headers: { 'x-access-token' : localStorage.getItem( 'token' ) }

                })

                .then(response => {

                    commit( 'updateUsers', response.data.Users )

                    resolve(response)

                })
                
                .catch(error => reject(error))

            })

        },

        newUser({commit}, data) {

            return new Promise(( resolve, reject ) => {

                axios({

                    method: 'POST',
                    url: `${this.state.api}users`,
                    headers: { 'x-access-token' : localStorage.getItem('token') },
                    data: data

                })

                .then(response => {

                    commit( 'unshiftUser', response.data )

                    resolve(response)

                })

                .catch(error => reject(error))

            })

        }

    }

}