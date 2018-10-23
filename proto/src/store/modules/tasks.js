import axios from 'axios'
import { orderBy } from 'lodash'

const defaultTasks = () => {
    return {
        tasks: []
    }
}

const state = defaultTasks()

export default {

    state,

    mutations: {
        updateTasks( state, tasks ) { state.tasks = tasks },
        unshiftTask( state, task ) { state.tasks.unshift(task) },
        resetTasks( state ) { Object.assign( state, defaultTasks() ) }
    },

    actions: {
        getTasks( {commit}, id ) {
            return new Promise(( resolve, reject ) => {

                axios({
                    method: 'GET',
                    url: `${this.state.config.api}projects/${id}/tasks`,
                    headers: { 'x-access-token' : localStorage.getItem('token') }
                })
                .then( response => {

                    let orderedTasks = orderBy( response.data.Tasks, ['date_created'], ['asc'] )

                    commit( 'updateTasks', orderedTasks )

                    resolve( orderedTasks )

                })
                .catch( error => reject( error ) )

            })
        }
    }

}
