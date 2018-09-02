import axios from "axios";

const thisUserProjectsDefaultState = () => {

    return {

        projects: []

    }

}

const state = thisUserProjectsDefaultState()

export default {

    state,

    mutations: {

        updateThisUserProjects( state, projects ) { state.projects = projects },
        resetThisUserProjectsState(state) { Object.assign( state, thisUserProjectsDefaultState() ) }
    },

    actions: {

        GET_THIS_USER_PROJECTS({commit}) {

            return new Promise(( resolve, reject ) => {

                axios({

                    url: `${this.state.api}myprojects`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }

                })

                .then(response => {

                    commit( 'updateThisUserProjects', response.data.Projects )

                    resolve(response)

                })

                .catch(error => reject(error))

            })

        }

    }

}