import axios from 'axios'

const userProjectsDefaultState = () => {

    return {

        userProjects: []

    }

}

const state = userProjectsDefaultState()


export default {

    state,

    mutations: {

        updateUserProjects(state,projects) { state.userProjects = projects },
        resetUserProjectsState(state) { Object.assign( state, userProjectsDefaultState() ) }
    },

    actions: {
        GET_USER_PROJECTS({commit}) {

            return new Promise((resolve,reject) => {

                axios({

                    url: `${this.state.api}project`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }

                })

                .then(response => {
                
                    commit('updateUserProjects', response.data.Projects)
                    resolve(response)
                })

                .catch(error => {
                    
                    console.log(error)
                    reject(error)
                })

            })

        }
    }

}