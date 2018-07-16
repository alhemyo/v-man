import axios from "axios";

const defaultUserState = () => {

    return {

        // Personal info
        name: localStorage.getItem('name') || null,
        surname: localStorage.getItem('surname') || null,
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
        position: localStorage.getItem('position') || null,
        employmentDate: {
            
            day: "",
            month: "",
            year: ""
        },
        payment: "",
        is_admin: false,
        admin_type: ""    
    }
}

const state = defaultUserState()

export default {

    state,

    mutations: {

        updateUserName( state, name ) { state.name = name },
        updateUserSurname( state, surname ) { state.surname = surname },
        updateUserGender( state, gender ) { state.gender = gender },
        updateUserBirthday( state, birthday ) { state.birthday = birthday },
        updateUserEducation( state, education ) { state.education = education },
        updateUserEmail( state, email ) { state.email = email },
        updateUserCity( state, city ) { state.city = city },
        updateUserPhone( state, phone ) { state.phone = phone },
        updateUserAddress( state, address ) { state.address = address },
        updateUserUmcn( state, umcn ) { state.umcn = umcn },
        updateUserIdNumber( state, idNumber ) { state.idNumber = idNumber },
        updateUserIdExpireDate( state, idExpireDate ) { state.idExpireDate = idExpireDate },
        updateUserBank( state, bank ) { state.bank = bank },
        updateUserAccNumber( state, accNumber ) { state.accNumber = accNumber },
        updateUserPosition( state, position ) { state.position = position },
        updateUserEmploymentDate( state, employmentDate ) { state.employmentDate = employmentDate },
        updateUserPayment( state, payment ) { state.payment = payment },
        updateUserIsAdmin( state, is_admin ) { state.is_admin = is_admin },
        updateUserAdminType( state, admin_type ) { state.admin_type = admin_type }
    },

    actions: {

        GET_USER({commit}) { // Get loged user from /5000/thisuser

            axios({

                url: this.state.api + 'thisuser',
                method: 'GET',
                headers: { 'x-access-token' : localStorage.getItem('token') }
            })

            .then(response => {

                localStorage.setItem( 'name', response.data.name )
                localStorage.setItem( 'surname', response.data.surname )
                localStorage.setItem( 'position', response.data.position )

                commit( 'updateUserName', response.data.name )
                commit( 'updateUserSurname', response.data.surname )
                commit( 'updateUserGender', response.data.gender )
                commit( 'updateUserBirthday', response.data.birthday )
                commit( 'updateUserEducation', response.data.education )
                commit( 'updateUserEmail', response.data.email )
                commit( 'updateUserCity', response.data.city )
                commit( 'updateUserPhone', response.data.phone )
                commit( 'updateUserAddress', response.data.address )
                commit( 'updateUserUmcn', response.data.umcn )
                commit( 'updateUserIdNumber', response.data.IdNumber )
                commit( 'updateUserIdExpireDate', response.data.IdExpireDate )
                commit( 'updateUserBank', response.data.bank )
                commit( 'updateUserAccNumber', response.data.accNumber )
                commit( 'updateUserPosition', response.data.position )
                commit( 'updateUserEmploymentDate', response.data.employmentDate )
                commit( 'updateUserPayment', response.data.payment )
                commit( 'updateUserIsAdmin', response.data.is_admin )
                commit( 'updateUserAdminType', response.data.admin_type )
                
            })

            .catch(error => {

                console.log(error)
            })
        }
    }

}