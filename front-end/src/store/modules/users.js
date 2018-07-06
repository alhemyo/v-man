// User base store

// import modules
import axios from 'axios'

export default {

    state: {

        // User authentication
        auth: {

            username: "",
            password: "",
            token: localStorage.getItem('token') || null

        },

        // Current user
        user: {

            // Personal info
            name: "",
            surname: "",
            gender: "",
            birthday: {
                day: "",
                month: "",
                year: ""
            },
            education: "",
            email: "",
            city: "",
            phone: "",
            address: "",
            umcn: "",
            idNumber: "",
            idExpireDate: {
                day: "",
                month: "",
                year: ""
            },
            bank: "",
            accNumber: "",

            // Work info
            position: "",
            employmentDate: {
                day: "",
                month: "",
                year: ""
            },
            payment: "",
            is_admin: false,
            admin_type: ""

        },

        // Object for adding / editing users
        addUser: {

            gender: {
                userBadge: false,
                value: '',
                options: [ 'female', 'male' ]
                /*
                option01: 'female',
                option02: 'male'
                */
            },
            education: {
                userBadge: false,
                value: '',
                options: [ 'low', 'mid', 'high' ]
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
                userBadge: false,
                value: '',
                options: [ '3d', 'mgfx', 'comp', 'design', 'audio', 'sys admin', 'account', 'office', 'matchmove' ]
            },
            admin: false,
            admintype: {
                userBadge: false,
                value: '',
                options: [ 'user admin', 'project admin', 'uber admin' ]
            },
            employmentDate: {
                day: "",
                month: "",
                year: ""
            },
            payment: ""

        }

    },

    getters: {

        isAuth: state => !!state.auth.token

    },

    mutations: {

        // Auth Mutations
        updateAuthUsername( state, username ) { return state.auth.username = username },
        updateAuthPassword( state, password ) { return state.auth.password = password },

        // Current user mutations
        updateUserName( state, name ) { return state.user.name = name },
        updateUserSurname( state, surname ) { return state.user.surname = surname },
        updateUserGender( state, gender ) { return state.user.gender = gender },
        updateUserBirthDay( state, day ) { return state.user.birthday.day = day },
        updateUserBirthMonth( state, month ) { return state.user.birthday.month = month },
        updateUserBirthYear( state, year ) { return state.user.birthday.year = year },
        updateUserEducation( state, education ) { return state.user.education = education },
        updateUserEmail( state, email ) { return state.user.email = email },
        updateUserCity( state, city ) { return state.user.city = city },
        updateUserPhone( state, phone ) { return state.user.phone = phone },
        updateUserAddress( state, address ) { return state.user.address = address },
        updateUserUmcn( state, umcn ) { return state.user.umcn = umcn },
        updateUserIdNumber( state, idNumber ) { return state.user.idNumber = idNumber },
        updateUserIdExpireDay( state, day ) { return state.user.idExpireDate.day = day },
        updateUserIdExpireMonth( state, month ) { return state.user.idExpireDate.month = month },
        updateUserIdExpireYear( state, year ) { return state.user.idExpireDate.year = year },
        updateUserBank( state, bank ) { return state.user.bank = bank },
        updateUserAccNumber( state, accNumber ) { return state.user.accNumber = accNumber },
        updateUserPosition( state, position ) { return state.user.position = position },
        updateUserEmploymentDay( state, day ) { return state.user.employmentDate.day = day },
        updateUserEmploymentMonth( state, month ) { return state.user.employmentDate.month = month },
        updateUserEmploymentYear( state, year ) { return state.user.employmentDate.year = year },
        updateUserPayment( state, payment ) { return state.user.payment = payment },
        updateUserIsAdmin( state, is_admin ) { return state.user.is_admin = is_admin },
        updateUserAdminType( state, admin_type ) { return state.user.admin_type = admin_type },

        // Add user mutations
        updateAddUserName( state, name ) { return state.addUser.name = name },
        updateAddUserSurname( state, surname ) { return state.addUser.surname = surname },
        updateAddUserGender( state, gender ) { return state.addUser.gender.value = gender },
        updateAddUserBirthDay( state, day ) { return state.addUser.birthday.day = day },
        updateAddUserBirthMonth( state, month ) { return state.addUser.birthday.month = month },
        updateAddUserBirthYear( state, year ) { return state.addUser.birthday.year = year },
        updateAddUserEducation( state, education ) { return state.addUser.education.value = education },
        updateAddUserEmail( state, email ) { return state.addUser.email = email },
        updateAddUserCity( state, city ) { return state.addUser.city = city },
        updateAddUserPhone( state, phone ) { return state.addUser.phone = phone },
        updateAddUserAddress( state, address ) { return state.addUser.address = address },
        updateAddUserUmcn( state, umcn ) { return state.addUser.umcn = umcn },
        updateAddUserIdNumber( state, idNumber ) { return state.addUser.idNumber = idNumber },
        updateAddUserIdExpireDay( state, day ) { return state.addUser.idExpireDate.day = day },
        updateAddUserIdExpireMonth( state, month ) { return state.addUser.idExpireDate.month = month },
        updateAddUserIdExpireYear( state, year ) { return state.addUser.idExpireDate.year = year },
        updateAddUserBank( state, bank ) { return state.addUser.bank = bank },
        updateAddUserAccNumber( state, accNumber ) { return state.addUser.accNumber = accNumber },
        updateAddUserPosition( state, position ) { return state.addUser.position.value = position },
        updateAddUserEmploymentDay( state, day ) { return state.addUser.employmentDate.day = day },
        updateAddUserEmploymentMonth( state, month ) { return state.addUser.employmentDate.month = month },
        updateAddUserEmploymentYear( state, year ) { return state.addUser.employmentDate.year = year },
        updateAddUserPayment( state, payment ) { return state.addUser.payment = payment },
        updateAddUserAdmin( state, admin ) { return state.addUser.admin = admin },
        updateAddUserAdminType( state, admintype ) { return state.addUser.admintype.value = admintype }

    },

    actions: {

        AUTHENTICATE_USER() {

            return new Promise( ( resolve, reject ) => {

                axios({

                    url: `${ this.state.api }login`,
                    method: 'POST',
                    headers: { Authorization: "Basic " + btoa(this.state.users.auth.username + "@vertigo.com.mk:" + this.state.users.auth.password) }

                })
                .then( response => {

                    localStorage.setItem( 'token', response.data.token )
                    resolve( response )

                })
                .catch( error => {

                    reject( error )

                })

            })

        }, // AUTHENTICATE USER

        GET_USER({ commit }) {

            axios({
                url: `${ this.state.api }thisuser`,
                method: 'GET',
                headers: {
                    'x-access-token' : localStorage.getItem('token')
                }
            })

            .then(response => {

                if ( response.status === 200 )

                {

                    commit( 'updateUserName', response.data.name )
                    commit( 'updateUserSurname', response.data.surname )
                    commit( 'updateUserPosition', response.data.position )

                    // TODO: ADD REST OF THE MUTATIONS
                }

            })
        }

    }

}