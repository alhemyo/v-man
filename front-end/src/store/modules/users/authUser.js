import axios from "axios";

const authUserDefaultState = () => {

    return {

        name: localStorage.getItem('name') || 'Jane',
        surname: localStorage.getItem('surname') || 'Doe',
        gender: '',
        birthday: '',
        education: '',
        email: '',
        city: '',
        phone: '',
        address: '',
        umcn: '',
        idNumber: '',
        idExpireDate: '',
        bank: '',
        accNumber: '',
        position: localStorage.getItem('position') || 'design',
        employmentDate: '',
        payment: '',
        is_admin: '',
        admin_type: ''

    }

}

const state = authUserDefaultState()

export default {

    state,

    mutations: {

        UAUName(state,name) { state.name = name },
        UAUSurname(state,surname) { state.surname = surname },
        UAUGender(state,gender) { state.gender = gender },
        UAUBirthday(state,birthday) { state.birthday = birthday },
        UAUEducation(state,education) { state.education = education },
        UAUEmail(state,email) { state.email = email },
        UAUCity(state,city) { state.city = city },
        UAUPhone(state,phone) { state.phone = phone },
        UAUAddress(state,address) { state.address = address },
        UAUUmcn(state,umcn) { state.umcn = umcn },
        UAUIdNumber(state, idNumber) { state.idNumber = idNumber },
        UAUIdExpireDate(state,idExpireDate) { state.idExpireDate = idExpireDate },
        UAUBank(state,bank) { state.bank = bank },
        UAUAccNumber(state,accNumber) { state.accNumber = accNumber },
        UAUPosition(state,position) { state.position = position },
        UAUEmploymentDate(state,employmentDate) { state.employmentDate = employmentDate },
        UAUPayment(state,payment) { state.payment = payment },
        UAUIsAdmin(state,is_admin) { state.is_admin = is_admin },
        UAUAdminType(state,admin_type) { state.admin_type = admin_type },
        resetAuthUserState(state) { Object.assign( state, authUserDefaultState() ) }

    },

    actions: {

        GET_AUTH_USER({commit}) {

            return new Promise((resolve,reject) => {

                axios({

                    url: `${this.state.api}thisuser`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }

                })
                .then(response => {

                    localStorage.setItem('name', response.data.name)
                    localStorage.setItem('surname', response.data.surname)
                    localStorage.setItem('position', response.data.position)

                    commit( 'UAUName', response.data.name )
                    commit( 'UAUSurname', response.data.surname )
                    commit( 'UAUGender', response.data.gender )
                    commit( 'UAUBirthday', response.data.birthday )
                    commit( 'UAUEducation', response.data.education )
                    commit( 'UAUEmail', response.data.email )
                    commit( 'UAUCity', response.data.city )
                    commit( 'UAUPhone', response.data.phone )
                    commit( 'UAUAddress', response.data.address )
                    commit( 'UAUUmcn', response.data.umcn )
                    commit( 'UAUIdNumber', response.data.IdNumber )
                    commit( 'UAUIdExpireDate', response.data.IdExpireDate )
                    commit( 'UAUBank', response.data.bank )
                    commit( 'UAUAccNumber', response.data.accNumber )
                    commit( 'UAUPosition', response.data.position )
                    commit( 'UAUEmploymentDate', response.data.employmentDate )
                    commit( 'UAUPayment', response.data.payment )
                    commit( 'UAUIsAdmin', response.data.is_admin )
                    commit( 'UAUAdminType', response.data.admin_type )

                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })

            })

        }

    }

}