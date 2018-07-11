export default {

    state: {

        // User authentication
        username: "",
        password: "",
        token: localStorage.getItem('token') || null
    

    },

    getters: {

        isAuth: state => !!state.token
    
    },

    mutations: {

        // Auth Mutations
        updateAuthUsername( state, username ) { return state.username = username },
        updateAuthPassword( state, password ) { return state.password = password },
    }

}