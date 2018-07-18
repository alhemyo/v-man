import axios from 'axios'

export default {

    state: {

        users: []
    },

    mutations: {

        updateUsers( state, users ) { state.users = users }
    },

    actions: {

        GET_USERS({commit}) {

            axios({

                url: this.state.api + 'user',
                method: 'GET',
                headers: { 'x-access-token' : localStorage.getItem('token') }
            })
            .then(response => {

                commit( 'updateUsers', response.data.Users )
            })
            .catch(error => {

                console.log(error)
            })
        }

            
        }
}