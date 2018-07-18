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

            value: "",
            options: [],
            multiselect: true,
            userBadge: true
        },
        users: {

            value: "",
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

        updateAddProjectAdminOptions( state, options ) { state.admin.options = options },
        updateAddProjectUsersOptions( state, options ) { state.users.options = options }
    },

    actions: {}
}