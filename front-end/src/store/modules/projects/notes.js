import axios from 'axios'

const notesDefaultState = () => {

    return {

        notes: []

    }

}

const state = notesDefaultState()

export default {

    state,
    
    mutations: {

        updateNotes(state, notes) { state.notes = notes },
        unshiftNote(state, note) { state.notes.unshift(note) },
        resetNotesState(state) { Object.assign( state, notesDefaultState() ) }

    },

    actions: {

        GET_NOTES( {commit}, {id} ) {

                axios({

                    url: `${this.state.api}task/${id}/notes`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }

                })

                .then(response => {

                    commit( 'updateNotes', response.data.Notes )

                    return response

                })

                .catch(error => { return error })   

        }
        
    }

}