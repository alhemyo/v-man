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

        updateTasks(state, tasks) { state.tasks = tasks },
        unshiftTask(state, task) { state.tasks.unshift(task) },
        resetTasks(state) { Object.assign(state, tasksDefaultState()) }

    },

    actions: {

        getTasks( {commit}, id ) {
            return new Promise(( resolve, reject ) => {
                axios({
                    url: `${this.state.api}projects/${id}/tasks`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }
                })
                .then(response => {
                    commit( 'updateTasks', response.data.Tasks )
                    resolve(response)
                })
                .catch(error => reject(error))
            })
        },
        addTask( {commit },{ task, id } ) {
            return new Promise(( resolve, reject ) => {
                axios({
                    method: 'POST',
                    url: `${this.state.api}projects/${id}/tasks`,
                    headers: {
                        'x-access-token' : localStorage.getItem('token') 
                    },
                    data: task
                })
                .then(response => {
                    commit( 'unshiftTask', response.data )
                    resolve(response)
                })
                .catch(error => reject(error))
            })
        }
    }

}