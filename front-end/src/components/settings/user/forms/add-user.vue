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

        <p class="form-message form-third-1">{{ message }}</p>

        <p class="form-button form-4" @click="addUser" >Add user</p>
        
    </form> <!-- end .settings-form -->

</template>

<script>

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

                let data = {

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
                    idNumber: this.$store.state.users.addUser.idNumber,
                    idExpireDate: {
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

                console.log( JSON.stringify(data) )
            }
        }

    }

</script>

<style scoped>

    hr {

        grid-column: 1/5;

        opacity: 0.3;
    }

    .settings-form {

        width: 660px;
        height: auto;

        position: relative;
        margin: auto;

        display: grid;
        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: 60px;
        grid-column-gap: 20px;
        grid-row-gap: 30px;
        align-items: center;
    }

    .form-1 {

        grid-column: 1/2;
    }

    .form-2 {

        grid-column: 2/3;
    }

    .form-3 {

        grid-column: 3/4;
    }

    .form-4 {

        grid-column: 4/5;
    }

    .form-half-1 {

        grid-column: 1/3;
    }

    .form-half-2 {

        grid-column: 3/5;
    }

    .form-third-1 {

        grid-column: 1/4;
    }

    .form-subtitle, .form-message {

        font-size: 12px;
        color: var(--dark);

        padding: 0px 20px;
    }

    .form-input {

        font-size: 12px;
        color: var(--dark);

        width: 100%;
        min-width: 150px;
        height: 40px;

        padding: 12px 20px;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;
    }

    .form-input::placeholder {

        color: rgba(0,0,0,0.6);
    }

    .form-button {

        font-size: 12px;
        text-align: center;
        color: var(--white);

        width: 150px;
        height: 40px;

        padding: 12px 20px;

        background-color: var(--dark);
        border-radius: 30px;

        cursor: pointer;
    }

    .form-button:hover {

        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    }

    .error {

        border: 2px solid var(--red);
    }

    /* --------- FORM DATE -------- */

    .form-date {

        width: 150px;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 1fr 1fr 1.2fr;
        align-self: flex-end;

        border: 1px solid var(--gray);
        border-radius: 5px;
    }

    .form-date-title {

        font-size: 10px;
        text-align: center;
        color: rgba(0,0,0,0.5);
        
        width: 100%;

        position: absolute;
        top: -20px;

        padding: 4px;
    }

    .form-date > input {

        font-size: 12px;
        text-align: center;
        color: var(--dark);

        width: 100%;

        display: block;

        padding: 0px 12px;

        background-color: transparent;
    }

    .form-date-day {

        border: none;
    }

    .form-date-month {

        border: none;
        border-left: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
    }

    .form-date-year {

        border: none;
    }

    /* -------- FORM RADIO --------- */

    .false {

        transform: translateY(70px);
    }

</style>


