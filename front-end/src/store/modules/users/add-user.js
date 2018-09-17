const addUserDefaultState = () => {

    return {

        name: '',
        surname: '',
        gender: '',
        birthday: '',
        city: '',
        phone: '',
        address: '',
        email: '',
        idNumber: '',
        idExpireDate: '',
        education: '',
        accNumber: '',
        bank: '',
        umcn: '',
        employmentDate: '',
        payment: '',
        position: '',
        admin: false,
        adminType: '',
        created: ''

    }

}

const state = addUserDefaultState()

export default {

    state,

    mutations: {

        updateAddUserName( state, name ) { state.name = name },
        updateAddUserSurname( state, surname ) { state.surname = surname },
        updateAddUserGender( state, gender ) { state.gender = gender },
        updateAddUserBirthday( state, birthday ) { state.birthday = birthday },
        updateAddUserCity( state, city ) { state.city = city },
        updateAddUserPhone( state, phone ) { state.phone = phone },
        updateAddUserAddress( state, address ) { state.address = address },
        updateAddUserEmail( state, email ) { state.email = email },
        updateAddUserIdNumber( state, idNumber ) { state.idNumber = idNumber },
        updateAddUserIdExpireDate( state, idExpireDate ) { state.idExpireDate = idExpireDate },
        updateAddUserEducation( state, education ) { state.education = education },
        updateAddUserAccNumber( state, accNumber ) { state.accNumber = accNumber },
        updateAddUserBank( state, bank ) { state.bank = bank },
        updateAddUserUmcn( state, umcn ) { state.umcn = umcn },
        updateAddUserEmploymentDate( state, employmentDate ) { state.employmentDate = employmentDate },
        updateAddUserPayment( state, payment ) { state.payment = payment },
        updateAddUserPosition( state, position ) { state.position = position },
        updateAddUserAdmin( state, admin ) { state.admin = admin },
        updateAddUserAdminType( state, adminType ) { state.adminType = adminType },
        updateAddUserCreated( state, created ) { state.created = created },
        resetAddUserState( state ) { Object.assign( state, addUserDefaultState() ) }

    },

    actions: {

        NEW_USER() {

            return new Promise(( resolve ) => {

                let data = {

                    name: this.state.addUser.name,
                    surname: this.state.addUser.surname,
                    gender: this.state.addUser.gender,
                    birthday: this.state.addUser.birthday,
                    city: this.state.addUser.city,
                    phone: this.state.addUser.phone,
                    address: this.state.addUser.address,
                    email: this.state.addUser.email,
                    IdNumber: this.state.addUser.idNumber,
                    IdExpireDate: this.state.addUser.idExpireDate,
                    education: this.state.addUser.education,
                    accNumber: this.state.addUser.accNumber,
                    bank: this.state.addUser.bank,
                    umcn: this.state.addUser.umcn,
                    employmentDate: this.state.addUser.employmentDate,
                    payment: this.state.addUser.payment,
                    position: this.state.addUser.position,
                    is_admin: this.state.addUser.admin,
                    admin_type: this.state.addUser.adminType,
                    created: this.state.addUser.created

                }

                console.log(JSON.stringify(data, null, 4))

                resolve(data)

            })

        }

    }

}