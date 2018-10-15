import axios from 'axios'

const defaultProjectsState = () => {
    return {
        projects: []
    }
}

const state = defaultProjectsState()

export default {

    state,

    mutations: {
        updateProjects(state, projects) { state.projects = projects },
        unshiftProject(state, project) { state.projects.unshift(project) },
        resetProjects(state) { Object.assign( state, defaultProjectsState() ) }
    },

    actions: {
        getProjects({commit}) {
            return new Promise(( resolve, reject ) => {
                axios({
                    url: `${this.state.api}projects`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }
                })
                .then(response => {
                    commit( 'updateProjects', response.data.Projects )
                    resolve(response)
                })
                .catch(error => reject(error))
            })
        },
        newProject({commit}, project) {
            return new Promise(( resolve, reject ) => {
                axios({
                    url: `${this.state.api}projects`,
                    method: 'POST',
                    headers: { 'x-access-token' : localStorage.getItem('token') },
                    data: project
                })
                .then(response => {
                    commit( 'unshiftProject', response.data )
                    resolve(response)
                })
                .catch(error => reject(error))
            })
        }
    }

}