import axios from 'axios'

import { orderBy } from 'lodash'

const myProjectsDefault = () => {
    return {
        myProjects: []
    }
}

const state = myProjectsDefault()

export default {

    state,

    mutations: {
        updateMyProjects( state, myProjects ) { state.myProjects = myProjects },
        resetMyProjects( state ) { Object.assign( state, myProjectsDefault() ) },

        // Socket
        SOCKET_MY_PROJECT( state, project ) { state.myProjects.unshift(project) }
    },

    actions: {

        getMyProjects({ commit }) {

            return new Promise(( resolve, reject ) => {

                axios({

                    method: 'GET',
                    url: `${this.state.config.api}users/self/projects`,
                    headers: { 'x-access-token' : localStorage.getItem( 'token' ) }

                })
                .then(response => {

                    // Sort projects by priority / deadline and remap priority from string to number
                    let sortedProjects = response.data.filter(item => {

                        return item.priority === 'high' ? item.priority = 3 : item.priority === 'mid' ? item.priority = 2 : item.priority = 1
    
                    })
                    
                    sortedProjects = orderBy(sortedProjects, ['priority', 'deadline'], [ 'desc', 'desc' ] )

                    commit( 'updateMyProjects', sortedProjects )
                    resolve( sortedProjects )

                })
                .catch(error => reject(error))

            })

        }

    }

}