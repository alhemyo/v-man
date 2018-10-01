import axios from 'axios'

const addTaskDefaultState = () => {

    return {

        id: '',
        name: '',
        description: '',
        created: '',
        deadline: '',
        downloaded: null,
        finished: null,
        uploaded: null,
        priority: ''

    }

}

const state = addTaskDefaultState()

export default {

    state,

    mutations: {

        updateAddTaskId( state, id ) { state.id = id },
        updateAddTaskName( state, name ) { state.name = name },
        updateAddTaskDescription( state, description ) { state.description = description },
        updateAddTaskCreated( state, created ) { state.created = created },
        updateAddTaskDeadline( state, deadline ) { state.deadline = deadline },
        updateAddTaskPriority( state, priority ) { state.priority = priority },
        resetAddTaskState( state ) { Object.assign( state, addTaskDefaultState() ) }

    },

    actions: {

        NEW_TASK({commit}) { 


            let data = {

                name: this.state.addTask.name,
                priority: this.state.addTask.priority,
                description: this.state.addTask.description,
                project: this.state.addTask.id,
                created: this.state.addTask.created,
                deadline: this.state.addTask.deadline,
                download: this.state.addTask.downloaded,
                finished: this.state.addTask.finished,
                upload: this.state.addTask.uploaded,
                state: 'pending',
                thumbnail: null,
                users: [],
                notes: []

            }

            axios({

                url: `${this.state.api}task`,
                method: 'POST',
                headers: { 'x-access-token' : localStorage.getItem('token') },
                data: data

            })

            .then(response => {

                commit( 'unshiftTask', response.data )
                
                return response

            })

            .catch(error => { return error })

         }

    }

}