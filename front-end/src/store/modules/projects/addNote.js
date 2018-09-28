import axios from 'axios'

const addNoteDefaultState = () => {

    return {

        note: '',
        user: localStorage.getItem('umcn'),
        taskId: '',
        date: '',
        client: false

    }

}

const state = addNoteDefaultState()

export default {

    state,

    mutations: {

        updateAddNoteNote(state, note) { state.note = note },
        updateAddNoteUser(state, user) { state.user = user },
        updateAddNoteDate(state, date) { state.date = date },
        updateAddNoteTaskId(state, taskId) { state.taskId = taskId },
        updateAddNoteClient(state, client) { state.client = client },
        resetAddNoteState(state) { Object.assign( state, addNoteDefaultState() ) }

    },

    actions: {

        ADD_NOTE({commit}) {

            const data = {

                message: this.state.addNote.note,
                user: this.state.addNote.user,
                client: this.state.addNote.client,
                date: new Date()

            }

            return new Promise((resolve, reject) => {

                axios({

                    url: `${this.state.api}task/${this.state.addNote.taskId}/note`,
                    method: 'POST',
                    headers: { 'x-access-token' : localStorage.getItem('token') },
                    data: data

                })

                .then(response => {

                    commit( 'unshiftNote', response.data )
                    resolve(response)

                })

                .catch(error => reject(error))

            })

        }

    }

}