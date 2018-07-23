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

    mutations: {

        updateAddUserName(state, name) { state.name = name },
        updateAddUserSurname(state, surname) { state.surname = surname },
        updateaddUserGender(state, gender) { state.gender.value = gender },
        updateAddUserBirthDay(state, day) { state.birthday.day = day },
        updateAddUserBirthMonth(state, month) { state.birthday.month = month },
        updateAddUserBirthYear(state, year) { state.birthday.year = year },
        updateAddUserCity(state, city) { state.city = city },
        updateAddUserPhone(state, phone) { state.phone = phone },
        updateaddUserEducation(state, education) { state.education.value = education },
        updateAddUserAddress(state, address) { state.address = address },
        updateAddUserEmail(state, email) { state.email = email },
        updateAddUserIdNumber(state, idNumber) { state.idNumber = idNumber },
        updateAddUserIdExpireDay(state, day) { state.idExpireDate.day = day },
        updateAddUserIdExpireMonth(state, month) { state.idExpireDate.month = month },
        updateAddUserIdExpireYear(state, year) { state.idExpireDate.year = year },
        updateAddUserUmcn(state, umcn) { state.umcn = umcn },
        updateAddUserBank(state, bank) { state.bank = bank },
        updateAddUserAccNumber(state, accNumber) { state.accNumber = accNumber },
        updateaddUserPosition(state, position) { state.position.value = position },
        updateaddUserAdmin(state, admin) { state.admin = admin },
        updateaddUserAdmintype(state, admintype) { state.admintype.value = admintype },
        updateAddUserEmploymentDay(state, day) { state.employmentDate.day = day },
        updateAddUserEmploymentMonth(state, month) { state.employmentDate.month = month },
        updateAddUserEmploymentYear(state, year) { state.employmentDate.year = year },
        updateAddUserPayment(state, payment) { state.payment = payment },

        // GET default add user state
        resetUserConfigState(state) { Object.assign( state, defaultUserConfigState() ) }
    },

    actions: {}
}