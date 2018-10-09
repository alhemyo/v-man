import axios from 'axios'

const thisUserDefaultState = () => {

    return {

        name: localStorage.getItem('name') || 'Jane',
        surname: localStorage.getItem('surname') || 'Doe',
        gender: localStorage.getItem('gender') || 'female',
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
        is_admin: localStorage.getItem('admin') || false,
        admin_type: localStorage.getItem('adminType') || null

    }

}

const state = thisUserDefaultState()

export default {

    state,

    mutations: {

        UTUName(state,name) { state.name = name },
        UTUSurname(state,surname) { state.surname = surname },
        UTUGender(state,gender) { state.gender = gender },
        UTUBirthday(state,birthday) { state.birthday = birthday },
        UTUEducation(state,education) { state.education = education },
        UTUEmail(state,email) { state.email = email },
        UTUCity(state,city) { state.city = city },
        UTUPhone(state,phone) { state.phone = phone },
        UTUAddress(state,address) { state.address = address },
        UTUUmcn(state,umcn) { state.umcn = umcn },
        UTUIdNumber(state, idNumber) { state.idNumber = idNumber },
        UTUIdExpireDate(state,idExpireDate) { state.idExpireDate = idExpireDate },
        UTUBank(state,bank) { state.bank = bank },
        UTUAccNumber(state,accNumber) { state.accNumber = accNumber },
        UTUPosition(state,position) { state.position = position },
        UTUEmploymentDate(state,employmentDate) { state.employmentDate = employmentDate },
        UTUPayment(state,payment) { state.payment = payment },
        UTUIsAdmin(state,is_admin) { state.is_admin = is_admin },
        UTUAdminType(state,admin_type) { state.admin_type = admin_type },
        resetThisUser(state) { Object.assign( state, thisUserDefaultState() ) }

    },

    actions: {

        thisUser({commit}) {

            return new Promise(( resolve,reject ) => {

                axios({

                    url: `${this.state.api}thisuser`,
                    method: 'GET',
                    headers: { 'x-access-token' : this.state.auth.token }

                })

                .then(response => {

                    localStorage.setItem('umcn', response.data.umcn)
                    localStorage.setItem('name', response.data.name)
                    localStorage.setItem('surname', response.data.surname)
                    localStorage.setItem('position', response.data.position)
                    localStorage.setItem('gender', response.data.gender)
                    localStorage.setItem('admin', response.data.is_admin)
                    localStorage.setItem('adminType', response.data.admin_type)

                    commit( 'UTUName', response.data.name )
                    commit( 'UTUSurname', response.data.surname )
                    commit( 'UTUGender', response.data.gender )
                    commit( 'UTUBirthday', response.data.birthday )
                    commit( 'UTUEducation', response.data.education )
                    commit( 'UTUEmail', response.data.email )
                    commit( 'UTUCity', response.data.city )
                    commit( 'UTUPhone', response.data.phone )
                    commit( 'UTUAddress', response.data.address )
                    commit( 'UTUUmcn', response.data.umcn )
                    commit( 'UTUIdNumber', response.data.IdNumber )
                    commit( 'UTUIdExpireDate', response.data.IdExpireDate )
                    commit( 'UTUBank', response.data.bank )
                    commit( 'UTUAccNumber', response.data.accNumber )
                    commit( 'UTUPosition', response.data.position )
                    commit( 'UTUEmploymentDate', response.data.employmentDate )
                    commit( 'UTUPayment', response.data.payment )
                    commit( 'UTUIsAdmin', response.data.is_admin )
                    commit( 'UTUAdminType', response.data.admin_type )

                    resolve(response)

                })

                .catch(error => reject(error) )

            })

        }
    }

}