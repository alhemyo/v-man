import axios from 'axios'

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
        resetMyProjects( state ) { Object.assign( state, myProjectsDefault() ) }
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

                    commit( 'updateMyProjects', response.data )
                    resolve( response )

                })
                .catch(error => reject(error))

            })

        }

    }

}