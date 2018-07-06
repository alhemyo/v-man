<template>
    
    <form class="settings-form">

        <!-------------------- FIRST COLUMN -------------------->

        <p class="form-subtitle">Personal info</p>

        <input class="form-input" type="text" placeholder="Name" v-model="name" />

        <input class="form-input" type="text" placeholder="Surname" v-model="surname" />

        <form-select :name="'Gender'" :value="gender" :multiSelect="false" />

        <!-------------------- SECOND COLUMN -------------------->

        <div class="form-date">

            <span class="form-date-title">BIRTHDAY</span>

            <input class="form-date-day" type="text" maxlength="2" placeholder="D" v-model="birthDay" />

            <input class="form-date-month" type="text" maxlength="2" placeholder="M" v-model="birthMonth" /> 

            <input class="form-date-year" type="text" maxlength="4" placeholder="Y" v-model="birthYear" />  
        
        </div> <!-- end .form-date -->

        <input class="form-input" type="text" placeholder="City" v-model="city" />

        <input class="form-input" type="text" placeholder="Phone" v-model="phone" />

        <form-select :name="'Education'" :value="education" :multiSelect="false" />

        <!-------------------- THIRD COLUMN -------------------->

        <input class="form-input form-half-1" type="text" placeholder="Address" v-model="address" />

        <input class="form-input form-half-2" type="text" placeholder="E-mail" v-model="email" />

        <!-------------------- FOURTH COLUMN -------------------->

        <input class="form-input" type="text" placeholder="ID number" v-model="idNumber" />

        <div class="form-date">

            <span class="form-date-title">ID EXPIRE DATE</span>

            <input class="form-date-day" type="text" maxlength="2" placeholder="D" v-model="idExpireDay" />

            <input class="form-date-month" type="text" maxlength="2" placeholder="M" v-model="idExpireMonth" /> 

            <input class="form-date-year" type="text" maxlength="4" placeholder="Y" v-model="idExpireYear" />    
        
        </div> <!-- end .form-date -->

        <input class="form-input form-half-2" type="text" placeholder="UMCN" v-model="umcn" />

        <!-------------------- FIFTH COLUMN -------------------->

        <input class="form-input form-half-1" type="text" placeholder="Bank name" v-model="bank" />

        <input class="form-input form-half-2" type="text" placeholder="Account number" v-model="accNumber" />

        <hr />

        <!-------------------- SIXTH COLUMN -------------------->

        <p class="form-subtitle form-1">work info</p>

        <form-radio :class="{ false : !this.admin }" class="form-4" :name="'Admin'" />

        <!-------------------- SEVENTH COLUMN -------------------->

        <div class="form-date">

            <span class="form-date-title">EMPLOYMENT DATE</span>

            <input class="form-date-day" type="text" maxlength="2" placeholder="D" v-model="employmentDay" />

            <input class="form-date-month" type="text" maxlength="2" placeholder="M" v-model="employmentMonth" /> 

            <input class="form-date-year" type="text" maxlength="4" placeholder="Y" v-model="employmentYear" />    
        
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" placeholder="Payment" v-model="payment" />

        <form-select class="form-3" :name="'Position'" :value="position" :multiSelect="false" />

        <form-select class="form-4" :name="'AdminType'" :value="admintype" :multiSelect="false" />

        <hr />

        <!-------------------- EIGHTH COLUMN -------------------->

        <transition name="fade">
            <p v-show="message" class="form-message form-third-1">{{ message }}</p>
        </transition>

        <p class="form-button form-4" @click="addUser" >Add user</p>
        
    </form> <!-- end .settings-form -->

</template>

<script>

    // Import modules
    import axios from 'axios'

    // Import components
    import formSelect from '../../../macro/form-select'
    import formRadio from '../../../macro/form-radio'

    export default {
    
        name: 'add-user',

        data() {
            return {
                message: ""
            }
        },

        components: {

            formSelect,
            formRadio
        },

        computed: {

            // INPUTS / v-model
            name: { 
                get() { return this.$store.state.users.addUser.name },
                set(value) { this.$store.commit( 'updateAddUserName', value ) }
            },

            surname: {
                get() { return this.$store.state.users.addUser.surname },
                set(value) { this.$store.commit( 'updateAddUserSurname', value ) }
            },

            city: {
                get() { return this.$store.state.users.addUser.city },
                set(value) { this.$store.commit( 'updateAddUserCity', value ) }
            },

            phone: {
                get() { return this.$store.state.users.addUser.phone },
                set(value) { this.$store.commit( 'updateAddUserPhone', value ) }
            },

            address: {
                get() { return this.$store.state.users.addUser.address },
                set(value) { this.$store.commit( 'updateAddUserAddress', value ) }
            },

            email: {
                get() { return this.$store.state.users.addUser.email },
                set(value) { this.$store.commit( 'updateAddUserEmail', value ) }
            },

            idNumber: {
                get() { return this.$store.state.users.addUser.idNumber },
                set(value) { this.$store.commit( 'updateAddUserIdNumber', value ) }
            },

            umcn: {
                get() { return this.$store.state.users.addUser.umcn },
                set(value) { this.$store.commit( 'updateAddUserUmcn', value ) }
            },

            bank: {
                get() { return this.$store.state.users.addUser.bank },
                set(value) { this.$store.commit( 'updateAddUserBank', value ) }
            },

            accNumber: {
                get() { return this.$store.state.users.addUser.accNumber },
                set(value) { this.$store.commit( 'updateAddUserAccNumber', value ) }
            },

            payment: {
                get() { return this.$store.state.users.addUser.payment },
                set(value) { this.$store.commit( 'updateAddUserPayment', value ) }
            },

            // INPUTS / date

            // Birthday
            birthDay: { 
                get() { return this.$store.state.users.addUser.birthday.day },
                set(value) { this.$store.commit( 'updateAddUserBirthDay', value ) }
            },
            birthMonth: {
                get() { return this.$store.state.users.addUser.birthday.month },
                set(value) { this.$store.commit( 'updateAddUserBirthMonth', value ) }
            },
            birthYear: {
                get() { return this.$store.state.users.addUser.birthday.year },
                set(value) { this.$store.commit( 'updateAddUserBirthYear', value ) }
            },

            // ID expire date
            idExpireDay: {
                get() { return this.$store.state.users.addUser.idExpireDate.day },
                set(value) { this.$store.commit( 'updateAddUserIdExpireDay', value ) }
            },
            idExpireMonth: {
                get() { return this.$store.state.users.addUser.idExpireDate.month },
                set(value) { this.$store.commit( 'updateAddUserIdExpireMonth', value ) }
            },
            idExpireYear: {
                get() { return this.$store.state.users.addUser.idExpireDate.year },
                set(value) { this.$store.commit( 'updateAddUserIdExpireYear', value ) }
            },

            // Employment date
            employmentDay: {
                get() { return this.$store.state.users.addUser.employmentDate.day },
                set(value) { this.$store.commit( 'updateAddUserEmploymentDay', value ) }
            },
            employmentMonth: {
                get() { return this.$store.state.users.addUser.employmentDate.month },
                set(value) { this.$store.commit( 'updateAddUserEmploymentMonth', value ) }
            },
            employmentYear: {
                get() { return this.$store.state.users.addUser.employmentDate.year },
                set(value) { this.$store.commit( 'updateAddUserEmploymentYear', value ) }
            },

            // INPUTS / select
            gender: { get() { return this.$store.state.users.addUser.gender.value } },
            education: { get() { return this.$store.state.users.addUser.education.value } },
            position: { get() { return this.$store.state.users.addUser.position.value } },
            admintype: { get() { return this.$store.state.users.addUser.admintype.value } },
            admin: { get() { return this.$store.state.users.addUser.admin } }
        },

        methods: {

            addUser() {

                let postBody = {

                    name: this.$store.state.users.addUser.name,
                    surname: this.$store.state.users.addUser.surname,
                    gender: this.$store.state.users.addUser.gender.value,
                    education: this.$store.state.users.addUser.education.value,
                    birthday: {
                        day: this.$store.state.users.addUser.birthday.day,
                        month: this.$store.state.users.addUser.birthday.month,
                        year: this.$store.state.users.addUser.birthday.year
                    },
                    city: this.$store.state.users.addUser.city,
                    phone: this.$store.state.users.addUser.phone,
                    address: this.$store.state.users.addUser.address,
                    email: this.$store.state.users.addUser.email,
                    IdNumber: this.$store.state.users.addUser.idNumber,
                    IdExpireDate: {
                        day: this.$store.state.users.addUser.idExpireDate.day,
                        month: this.$store.state.users.addUser.idExpireDate.month,
                        year: this.$store.state.users.addUser.idExpireDate.year
                    },
                    umcn: this.$store.state.users.addUser.umcn,
                    bank: this.$store.state.users.addUser.bank,
                    accNumber: this.$store.state.users.addUser.accNumber,
                    position: this.$store.state.users.addUser.position.value,
                    is_admin: this.$store.state.users.addUser.admin,
                    admin_type: this.$store.state.users.addUser.admintype.value,
                    employmentDate: {
                        day: this.$store.state.users.addUser.employmentDate.day,
                        month: this.$store.state.users.addUser.employmentDate.month,
                        year: this.$store.state.users.addUser.employmentDate.year
                    },
                    payment: this.$store.state.users.addUser.payment

                }

                // Add User API post request
                axios({

                    url: this.$store.state.api + 'user',
                    method: 'POST',
                    data: JSON.stringify(postBody),
                    headers: {
                        'Content-Type' : 'application/json'
                    }

                }).then( response => {

                    this.message = response.data.message

                }).catch( error => {

                    this.message = "Oops, something went wrong, please try again :("

                })
            }
        },

        watch: {

            message() {

                if ( this.message != "" )

                {
                    setTimeout(() => {

                        this.message = ""

                    },3000)
                }

            }
        }

    }

</script>

<style scoped>

    .fade-enter-active, .fade-leave-active {

        transition: 0.2s ease;
    }

    .fade-enter, .fade-leave-to {

        opacity: 0;
    }

    /* -------- FORM RADIO --------- */

    .false {

        transform: translateY(70px);
    }

</style>


