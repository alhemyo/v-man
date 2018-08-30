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

        GET_TASKS({commit}) {

            return new Promise((resolve,reject) => {

                axios({
                    //url: `${this.state.api}project/${id}/tasks`,
                    url: `${this.state.api}tasks`,
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

        NEW_TASK({commit}) {

            let task = {
                name: `Task ${state.tasks.length + 1}`,
                priority: 'high',
                state: 'rotomation',
                thumbnail: null,
                deadline: new Date('01','24','2018'),
                download: new Date('01','24','2018'),
                created: new Date(),
                finished: new Date('01','24','2018'),
                upload: new Date('01','24','2018'),
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