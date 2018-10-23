import axios from 'axios'

import { orderBy } from 'lodash'

const defaultProjects = () => {
    return {
        projects: []
    }
}

const state = defaultProjects()

export default {

    state,

    mutations: {
        updateProjects( state, projects ) { state.projects = projects },
        unshiftProject( state, project ) { state.projects.unshift(project) },
        resetProjects( state ) { Object.assign( state, defaultProjects() ) }
    },

    actions: {
        getProjects({commit}) {
            return new Promise(( resolve, reject ) => {

                axios({
                    method: 'GET',
                    url: `${this.state.config.api}projects`,
                    headers: { 'x-access-token' : localStorage.getItem('token') }
                })
                .then(response => {

                    let sortedProjects = response.data.Projects.filter(item => {

                        return item.priority === 'high' ? item.priority = 3 : item.priority === 'mid' ? item.priority = 2 : item.priority = 1
    
                    })

                    sortedProjects = orderBy(response.data.Projects, ['date_created' ], [ 'asc' ] )

                    commit( 'updateProjects', sortedProjects )
                    resolve(sortedProjects)
                })
                .catch(error => reject(error))

            })
        }
    }
}