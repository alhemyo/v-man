import axios from 'axios'

export default {

    state: {

        projects: []
    },

    mutations: {

        updateProjects( state, projects ) { state.projects = projects }
    },

    actions: {

        GET_PROJECTS({commit}) {

            axios({

                url: this.state.api + 'project',
                method: 'GET',
                headers: { 'x-access-token' : localStorage.getItem('token') }
            })
            .then(response => {

                commit( 'updateProjects', response.data.Projects )
            })
            .catch(error => {

                console.log(error)
            })
        }

            
        }
}