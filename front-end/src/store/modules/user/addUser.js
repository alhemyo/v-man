const defaultUserConfigState = () => {

    return {

        name: "",
        surname: "",
        gender: {

            value: "",
            options: [ 'female', 'male' ],
            multiselect: false,
            userBadge: false
        },
        birthday: {

            day: "",
            month: "",
            year: ""
        },
        city: "",
        phone: "",
        education: {

            value: "",
            options: [ 'low', 'mid', 'high' ],
            multiselect: false,
            userBadge: false
        },
        address: "",
        email: "",
        idNumber: "",
        idExpireDate: {
            
            day: "",
            month: "",
            year: ""
        },
        umcn: "",
        bank: "",
        accNumber: "",
        position: {

            value: "",
            options: [ '3D', 'mgfx', 'design', 'comp', 'audio', 'office', 'sys admin', 'account' ],
            multiselect: false,
            userBadge: false
        },
        admin: false,
        admintype: {

            value: "",
            options: [ 'user admin', 'project admin', 'uber admin' ],
            multiselect: false,
            userBadge: false
        },
        employmentDate: {
            
            day: "",
            month: "",
            year: ""
        },
        payment: ""
    }
}

const state = defaultUserConfigState()

export default {

    state,

    mutations: {},

    actions: {}
}