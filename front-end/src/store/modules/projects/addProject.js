const addProjectDefaultState = () => {

    return {

        name: '',
        deadline: '',
        client: '',
        admin: '',
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
        updateAddProjectPriority( state, priority ) { state.priority = priority },

        resetAddProjectState( state ) { Object.assign( state, addProjectDefaultState() ) }

    }

}