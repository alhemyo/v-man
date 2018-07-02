export default {

    state: {

        // Personal info
        gender: {

            value: '',
            value01: 'female',
            value02: 'male'

        },

        education: {
        
            value: '',
            value01: 'low',
            value02: 'mid',
            value03: 'high'
        
        },

        name: "",
        surname: "",

        birthday: {

            day: "",
            month: "",
            year: ""

        },

        city: "",
        phone: "",
        address: "",
        email: "",
        IdNumber: "",
        IdExpireDate: {

            day: "",
            month: "",
            year: ""

        },

        umcn: "",
        bank: "",
        accNumber: "",

        // Work info
        position: {

            value: '',
            value01: '3D',
            value02: 'MGFX',
            value03: 'DESIGN',
            value04: 'AUDIO',
            value05: 'ACCOUNT',
            value06: 'SYS ADMIN',
            value07: 'COMP'

        },

        is_admin: false,
        admin_type: {

            value: '',
            value01: 'project admin',
            value02: 'user admin',
            value03: 'uber admin'

        },

        employmentDate: {

            day: "",
            month: "",
            year: ""

        },

        payment: ""

    },

    mutations: {

        updateUsergender(state, gender) { this.state.user.gender.value = gender },
        updateUsereducation(state, education) { this.state.user.education.value = education },
        updateUserName(state, name) { this.state.user.name = name },
        updateUserSurname(state, surname) { this.state.user.surname = surname },
        updateUserBirthDay(state, day) { this.state.user.birthday.day = day },
        updateUserBirthMonth(state, month) { this.state.user.birthday.month = month },
        updateUserBirthYear(state, year) { this.state.user.birthday.year = year },
        updateUserCity(state, city) { this.state.user.city = city },
        updateUserPhone(state, phone) { this.state.user.phone = phone },
        updateUserAddress(state, address) { this.state.user.address = address },
        updateUserEmail(state, email) { this.state.user.email = email },
        updateUserIdNumber(state, IdNumber) { this.state.user.IdNumber = IdNumber },
        updateUserIdExpireDay(state, day) { this.state.user.IdExpireDate.day = day },
        updateUserIdExpireMonth(state, month) { this.state.user.IdExpireDate.month = month },
        updateUserIdExpireYear(state, year) { this.state.user.IdExpireDate.year = year },
        updateUserUmcn(state, umcn) { this.state.user.umcn = umcn },
        updateUserBank(state, bank) { this.state.user.bank = bank },
        updateUserAccNumber(state,accNumber) { this.state.user.accNumber = accNumber },
        updateUserposition(state, position) { this.state.user.position.value = position },
        updateUserIsAdmin(state, is_admin) { this.state.user.is_admin = is_admin },
        updateUseradmin_type(state, admin_type) { this.state.user.admin_type.value = admin_type },
        updateUserEmploymentDay(state, day) { this.state.user.employmentDate.day = day },
        updateUserEmploymentMonth(state, month) { this.state.user.employmentDate.month = month },
        updateUserEmploymentYear(state, year) { this.state.user.employmentDate.year = year },
        updateUserPayment(state, payment) { this.state.user.payment = payment }
    }

}