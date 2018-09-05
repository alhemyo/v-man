const addTaskDefaultState = () => {

    return {

        id: '',
        name: '',
        description: '',
        deadline: '',
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
        updateAddTaskDeadline( state, deadline ) { state.deadline = deadline },
        updateAddTaskPriority( state, priority ) { state.priority = priority }

    },

    actions: {}

}