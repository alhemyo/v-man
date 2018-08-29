import axios from 'axios'

const usersDefaultState = () => {

    return {

        users: []

    }

}

const state = usersDefaultState()

export default {

    state,

    mutations: {

        updateUsers(state,users) { state.users = users },
        resetUsersState(state) { Object.assign(state,usersDefaultState()) }
    },

    actions: {

        GET_USERS({commit}) {

            return new Promise((resolve,reject) => {

                axios({
                    url: `${this.state.api}user`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }
                })

                .then(response => {

                    commit( 'updateUsers', response.data.Users )
                    resolve(response)

                })

                .catch(error => {

                    reject(error)

                })

            })

        }
    }

}