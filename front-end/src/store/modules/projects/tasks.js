import axios from 'axios'

const defaultTasksState = () => {

    return {

        tasks: []

    }

}

const state = defaultTasksState()

export default {

    state,

    mutations: {

        updateTasks(state, tasks) { state.tasks = tasks },
        pushTask(state, task) { state.tasks.push(task) },
        resetTasks(state) { Object.assign( state, defaultTasksState() ) }

    },

    actions: {

        GET_TASKS({commit}, id) {

            return new Promise((resolve,reject) => {

                axios({
                    url: `${this.state.api}project/${id}/tasks`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }
                })

                .then(response => {

                        commit('updateTasks', response.data.Tasks )
                        resolve(response)

                })

                .catch(error => reject(error))

            })

        },

        NEW_TASK({commit}, id) {

            let task = {

                project: id,
                name: `Task ${state.tasks.length + 1}`,
                priority: 'high',
                state: 'rendering',
                thumbnail: null,
                deadline: new Date(2018,9,2),
                download: new Date(2018,9,2),
                created: new Date(),
                finished: new Date(2018,9,2),
                upload: new Date(2018,9,2),
                users: [],
                notes: []
            }

            return new Promise((resolve,reject) => {

                axios({
                    url: `${this.state.api}task`,
                    method: 'POST',
                    headers: { 'x-access-token' : localStorage.getItem('token') },
                    data: task
                })

                .then(response => {

                    commit('pushTask', response.data)
                    resolve(response)

                })

                .catch(error => {

                    reject(error)
                })

            })

        }
    }

}