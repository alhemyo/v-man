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
            multiselect: false
        },
        client: {

            value: "",
            options: [ 'VT', 'FT', 'BR', 'CT', 'CS', 'ZZ' ],
            multiselect: false
        },
        admin: {

            value: "",
            options: [],
            multiselect: true
        },
        users: {

            value: "",
            options: [],
            multiselect: true
        }
    }
}

const state = defaultProjectConfigState()

export default {

    state,

    mutations: {},

    actions: {}
}