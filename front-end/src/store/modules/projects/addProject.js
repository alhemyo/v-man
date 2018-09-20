import axios from 'axios'

const addProjectDefaultState = () => {

    return {

        name: '',
        deadline: '',
        client: '',
        admin: '',
        users: '',
        priority: ''

    }

}

const state = addProjectDefaultState()

export default {

    state,

    mutations: {

        updateAddProjectName( state, name ) { state.name = name },
        updateAddProjectDeadline( state, deadline ) { state.deadline = deadline },
        updateAddProjectClient( state, client ) { state.client = client },
        updateAddProjectAdmin( state, admin ) { state.admin = admin },
        updateAddProjectUsers( state, users ) { state.users = users },
        updateAddProjectPriority( state, priority ) { state.priority = priority },

        resetAddProjectState( state ) { Object.assign( state, addProjectDefaultState() ) }

    },

    actions: {

        NEW_PROJECT({commit}) {

            return new Promise(( resolve, reject ) => {

                let data = {

                    name: this.state.addProject.name,
                    client: this.state.addProject.client,
                    deadline: this.state.addProject.deadline,
                    priority: this.state.addProject.priority,
                    admin_id: this.state.addProject.admin,
                    user_ids: this.state.addProject.users

                }

                axios({

                    url: `${this.state.api}project`,
                    method: 'POST',
                    headers: { 'x-access-token' : localStorage.getItem('token') },
                    data: data

                })

                .then(response => {

                    commit( 'unshiftProject', response.data )

                    resolve(response)

                })

                .catch(error => reject(error))

            })

        }

    }

}