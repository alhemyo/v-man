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

                    let sortedTasks = response.data.Tasks.filter(item => {

                        return item.priority === 'high' ? item.priority = 3 : item.priority === 'mid' ? item.priority = 2 : item.priority = 1
    
                    })

                    sortedTasks = orderBy( sortedTasks, ['date_created'], ['asc'] )

                    commit( 'updateTasks', sortedTasks )

                    resolve( sortedTasks )

                })
                .catch( error => reject( error ) )

            })
        }
    }

}
