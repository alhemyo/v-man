const defaultProjectConfigState = () => {

    return {

        name: "",
        deadline: {
            
            day: "",
            month: "",
            year: ""
        },
        priority: {

            value: "",
            options: [ 'low', 'mid', 'high' ],
            multiselect: false,
            userBadge: false
        },
        client: {

            value: "",
            options: [ 'VT', 'FT', 'BR', 'CT', 'CS', 'ZZ' ],
            multiselect: false,
            userBadge: false
        },
        admin: {

            value: [],
            options: [],
            multiselect: true,
            userBadge: true
        },
        users: {

            value: [],
            options: [],
            multiselect: true,
            userBadge: true
        }
    }
}

const state = defaultProjectConfigState()

export default {

    state,

    mutations: {

        updateAddProjectName( state, name ) { state.name = name },
        updateAddProjectDeadlineDay( state, day ) { state.deadline.day = day },
        updateAddProjectDeadlineMonth( state, month ) { state.deadline.month = month },
        updateAddProjectDeadlineYear( state, year ) { state.deadline.year = year },
        updateaddProjectPriority( state, priority ) { state.priority.value = priority },
        updateaddProjectClient( state, client ) { state.client.value = client },
        updateAddProjectAdminOptions( state, options ) { state.admin.options = options },
        updateaddProjectAdmin( state, value ) { state.admin.value = value },
        updateAddProjectUsersOptions( state, options ) { state.users.options = options },
        updateaddProjectUsers( state, value ) { state.users.value = value },

        // reset default project config state
        resetProjectConfigState(state) { Object.assign( state, defaultProjectConfigState() ) }
    },

    actions: {}
}