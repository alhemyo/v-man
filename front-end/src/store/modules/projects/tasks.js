import axios from "axios";

const tasksDefaultState = () => {

    return {

        tasks: []

    }

}

const state = tasksDefaultState()

export default {

    state,

    mutations: {

        updateTasks( state, tasks ) { state.tasks = tasks },
        pushTask( state, task ) { state.tasks.push(task) },
        resetTasksState( state ) { Object.assign( state, tasksDefaultState() ) }

    },

    actions: {

        GET_TASKS({commit}, id) {

            return new Promise(( resolve, reject ) => {

                axios({

                    method: 'GET',
                    url: `${this.state.api}project/${id}/tasks`,
                    headers: { 'x-access-token' : localStorage.getItem('token') }

                })

                .then( response => {

                    commit( 'updateTasks', response.data.Tasks )

                    resolve( response )

                })

                .catch( error => reject(error) )

            })

        }

    }
}