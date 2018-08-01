const projectDefaultState = () => {

    return {
        project: {
            name: 'Project Name',
            client: 'Project Client',
            deadline: '00.00.0000',
            priority: 'low'
        }
    }
}

const state = projectDefaultState()

export default {

    state,

    mutations: {

        updateProject(state, project) { state.project = project }
    },

    actions: {}

}