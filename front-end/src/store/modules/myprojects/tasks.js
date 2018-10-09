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

        getTasks({commit}, id) {

            return new Promise((resolve, reject) => {

                axios({
                    url: `${this.state.api}project/${id}/tasks`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }
                })

                .then(response => {

                    commit('updateTasks', response.data.Tasks)

                    resolve(response)

                })

                .catch(error => reject(error))

            })

        }

    }

}