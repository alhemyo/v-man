import axios from 'axios'

const projectsDefaultState = () => {

    return {

        projects: []

    }

}

const state = projectsDefaultState()

export default {

    state,

    mutations: {

        updateProjects( state, projects ) { state.projects = projects },
        unshiftProject( state, project ) { state.projects.unshift(project) }

    },

    actions: {

        GET_PROJECTS({commit}) {

            return new Promise(( resolve, reject ) => {

                axios({

                    method: 'GET',
                    url: `${this.state.api}project`,
                    headers: { 'x-access-token' : localStorage.getItem( 'token' ) }

                })

                .then(response => {

                    commit( 'updateProjects', response.data.Projects )

                    resolve(response)

                })
                
                .catch(error => reject(error))

            })

        }

    }

}