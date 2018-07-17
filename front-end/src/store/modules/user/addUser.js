const defaultUserConfigState = () => {

    return {

        name: "",
        surname: "",
        gender: {

            value: "",
            options: [ 'female', 'male' ],
            multiselect: false
        },
        birthday: {

            day: "",
            month: "",
            year: ""
        },
        city: "",
        phone: "",
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
            multiselect: false
        },
        admin: false,
        admintype: {

            value: "",
            options: [ 'user admin', 'project admin', 'uber admin' ],
            multiselect: false
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