// Project base store

const getDefaultProjectsState = () => {

    return {

        // Create roject
        createProject: {

            name: "",
            deadline: {
                day: "",
                month: "",
                year: ""
            },
            priority: {
                userBadge: false,
                value: "",
                options: [
                    'low',
                    'mid',
                    'high'
                ]
            },
            admin: {
                userBadge: true,
                value: [],
                options: []
            },
            client: {
                userBadge: false,
                value: "",
                options: [ 'AD', 'AO', 'BR', 'CS', 'CT', 'DB', 'FA', 'FT', 'GR', 'HM', 'IN', 'KN', 'OV', 'PP', 'PS', 'RP', 'SF', 'TK', 'VD', 'VT', 'ZZ' ]
            },
            users: {
                userBadge: true,
                value: [],
                options: []
            }

        }

    }

} // end getDefaultProjectsState()

const state = getDefaultProjectsState()

export default {

    state,

    mutations: {

        // Create project mutations
        updateCreateProjectName( state, name ) { return state.createProject.name = name },
        updateCreateProjectDeadlineDay( state, day ) { return state.createProject.deadline.day = day },
        updateCreateProjectDeadlineMonth( state, month ) { return state.createProject.deadline.month = month },
        updateCreateProjectDeadlineYear( state, year ) { return state.createProject.deadline.year = year },
        updateCreateProjectPriority( state, priority ) { return state.createProject.priority.value = priority },
        updateCreateProjectAdmin( state, admin ) { return state.createProject.admin.value = admin },
        updateCreateProjectClient( state, client ) { return state.createProject.client.value = client },
        updateCreateProjectUsers( state, users ) { return state.createProject.users.value = users },
        updateCreateProjectUsersOptions( state, users ) { return state.createProject.users.options = users },
        pushCreateProjectUsersOptions( state, users ) { state.createProject.users.options.push( users ) },
        updateCreateProjectAdminOptions( state, admin ) { return state.createProject.admin.options = admin },
        pushCreateProjectAdminOptions( state, admin ) { state.createProject.admin.options.push( admin ) },

        // Reset projects state mutation
        resetProjectsState(state) { Object.assign( state, getDefaultProjectsState() ) } 

    },
    actions: {}

}