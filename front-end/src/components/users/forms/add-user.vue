<template>
    
    <form class="form add-user">

        <!---------------------- FIRST ROW ---------------------->

        <p class="form-sub-title form-1">Personal info</p>

        <input class="form-input form-2" type="text" name="name" placeholder="Name" v-model="name" />

        <input class="form-input form-3" type="text" name="surname" placeholder="Surname" v-model="surname" />

        <form-select :name="'Gender'" :value="gender" />

        <!---------------------- SECOND ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">Birthday</p>
            
            <input type="text" name="day" placeholder="D" v-model="birthDay" maxlength="2" />

            <input type="text" name="month" placeholder="M" v-model="birthMonth" maxlength="2" />

            <input type="text" name="year" placeholder="Y" v-model="birthYear" maxlength="4" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="city" placeholder="City" v-model="city" />

        <input class="form-input form-3" type="text" name="phone" placeholder="Phone" v-model="phone" />

        <form-select :name="'Education'" :value="education" />

        <!---------------------- THIRD ROW ---------------------->

        <input class="form-input form-half-1" type="text" name="address" placeholder="Address" v-model="address" />

        <input class="form-input form-half-2" type="text" name="email" placeholder="E - mail" v-model="email" />

        <!---------------------- FORTH ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">ID expire date</p>
            
            <input type="text" name="day" placeholder="D" v-model="idExpireDay" maxlength="2" />

            <input type="text" name="month" placeholder="M" v-model="idExpireMonth" maxlength="2" />

            <input type="text" name="year" placeholder="Y" v-model="idExpireYear" maxlength="4" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="idNumber" placeholder="ID number" v-model="idNumber" />

        <input class="form-input form-half-2" type="text" name="umcn" placeholder="UMCN" v-model="umcn" />

        <!---------------------- FIFTH ROW ---------------------->

        <input class="form-input form-half-1" type="text" name="bank" placeholder="Bank" v-model="bank" />

        <input class="form-input form-half-2" type="text" name="accNumber" placeholder="Account number" v-model="accNumber" />

        <!---------------------- SIXTH ROW ---------------------->

        <p class="form-sub-title form-1">Work info</p>

        <form-radio class="admin form-4" :name="'Admin'" :class="{ 'admin-slide' : admin }" />

        <!---------------------- SEVENTH ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">Employment date</p>
            
            <input type="text" name="day" placeholder="D" v-model="employmentDay" maxlength="2" />

            <input type="text" name="month" placeholder="M" v-model="employmentMonth" maxlength="2" />

            <input type="text" name="year" placeholder="Y" v-model="employmentYear" maxlength="4" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="payment" placeholder="Payment" v-model="payment" />

        <form-select :name="'Position'" :value="position" />

        <form-select :name="'Admin type'" :value="admintype" />

        <!---------------------- EIGHT ROW ---------------------->

        <p class="form-sub-title form-third-1">{{ message }}</p>

        <p class="form-button form-4" @click="addUser" >Add User</p>

    </form>

</template>

<script>

    import axios from 'axios'

    import formSelect from '../../macro/form/form-select'
    import formRadio from '../../macro/form/form-radio'

    export default {
    
        name: 'add-user',

        components: {

            formSelect,
            formRadio
        },

        data() {

            return {

                message: ""
            }
        },

        computed: {

            name: {
                get() { return this.$store.state.addUser.name },
                set(value) { this.$store.commit( 'updateAddUserName', value ) }
            },
            surname: {
                get() { return this.$store.state.addUser.surname },
                set(value) { this.$store.commit( 'updateAddUserSurname', value ) }
            },
            gender: { get() { return this.$store.state.addUser.gender.value } },
            birthDay: {
                get() { return this.$store.state.addUser.birthday.day },
                set(value) { this.$store.commit( 'updateAddUserBirthDay', value ) }
            },
            birthMonth: {
                get() { return this.$store.state.addUser.birthday.month },
                set(value) { this.$store.commit( 'updateAddUserBirthMonth', value ) }
            },
            birthYear: {
                get() { return this.$store.state.addUser.birthday.year },
                set(value) { this.$store.commit( 'updateAddUserBirthYear', value ) }
            },
            city: {
                get() { return this.$store.state.addUser.city },
                set(value) { this.$store.commit( 'updateAddUserCity', value ) }
            },
            phone: {
                get() { return this.$store.state.addUser.phone },
                set(value) { this.$store.commit( 'updateAddUserPhone', value ) }
            },
            education: { get() { return this.$store.state.addUser.education.value } },
            address: {
                get() { return this.$store.state.addUser.address },
                set(value) { this.$store.commit( 'updateAddUserAddress', value ) }
            },
            email: {
                get() { return this.$store.state.addUser.email },
                set(value) { this.$store.commit( 'updateAddUserEmail', value ) }
            },
            idNumber: {
                get() { return this.$store.state.addUser.idNumber },
                set(value) { this.$store.commit( 'updateAddUserIdNumber', value ) }
            },
            idExpireDay: {
                get() { return this.$store.state.addUser.idExpireDate.day },
                set(value) { this.$store.commit( 'updateAddUserIdExpireDay', value ) }
            },
            idExpireMonth: {
                get() { return this.$store.state.addUser.idExpireDate.month },
                set(value) { this.$store.commit( 'updateAddUserIdExpireMonth', value ) }
            },
            idExpireYear: {
                get() { return this.$store.state.addUser.idExpireDate.year },
                set(value) { this.$store.commit( 'updateAddUserIdExpireYear', value ) }
            },
            umcn: {
                get() { return this.$store.state.addUser.umcn },
                set(value) { this.$store.commit( 'updateAddUserUmcn', value ) }
            },
            bank: {
                get() { return this.$store.state.addUser.bank },
                set(value) { this.$store.commit( 'updateAddUserBank', value ) }
            },
            accNumber: {
                get() { return this.$store.state.addUser.accNumber },
                set(value) { this.$store.commit( 'updateAddUserAccNumber', value ) }
            },
            position: { get() { return this.$store.state.addUser.position.value } },
            admin: { get() { return this.$store.state.addUser.admin } },
            admintype: { get() { return this.$store.state.addUser.admintype.value } },
            employmentDay: {
                get() { return this.$store.state.addUser.employmentDate.day },
                set(value) { this.$store.commit( 'updateAddUserEmploymentDay', value ) }
            },
            employmentMonth: {
                get() { return this.$store.state.addUser.employmentDate.month },
                set(value) { this.$store.commit( 'updateAddUserEmploymentMonth', value ) }
            },
            employmentYear: {
                get() { return this.$store.state.addUser.employmentDate.year },
                set(value) { this.$store.commit( 'updateAddUserEmploymentYear', value ) }
            },
            payment: {
                get() { return this.$store.state.addUser.payment },
                set(value) { this.$store.commit( 'updateAddUserPayment', value ) }
            }

        },

        methods: {

            addUser() {

                // Validate add user form

                const regNums = this.$store.state.regex.numbers

                // Name validation
                if ( !this.name ) { this.message = "Name is required." }
                else if ( !this.name.match( this.$store.state.regex.letters ) ) { this.message = "Invalid name." }

                // Surname validation
                else if ( !this.surname ) { this.message = "Surname is required." }
                else if ( !this.surname.match( this.$store.state.regex.letters ) ) { this.message = "Invalid surname." }

                // Gender validation
                else if ( !this.gender ) { this.message = "Please select gender." }

                // Birthday validation
                else if ( !this.birthDay || !this.birthMonth || !this.birthYear ) { this.message = "Birthday is required." }
                else if ( !this.birthDay.match(regNums) || !this.birthMonth.match(regNums) || !this.birthYear.match(regNums) ) { this.message = "Invalid birthday, input must be number." }

                // City validation
                else if ( !this.city ) { this.message = "City is required." }
                else if ( this.city.match( this.$store.state.regex.login ) ) { this.message = "Invalid city." }

                // Phone validation
                else if ( !this.phone ) { this.message = "Phone is required" }
                else if ( !this.phone.match( this.$store.state.regex.alphanumeric ) ) { this.message = "Invalid phone number." }

                // Education validation
                else if ( !this.education ) { this.message = "Please select education." }

                // Address validation
                else if ( !this.address ) { this.message = "Address is required." }
                else if ( this.address.match(this.$store.state.regex.login) ) { this.message = "Invalid Address." }

                // Email validation
                else if ( !this.email ) { this.message = "Email is required." }
                else if ( !this.email.match( this.$store.state.regex.mail ) ) { this.message = "Invalid email." }

                // ID expire date validation
                else if ( !this.idExpireDay || !this.idExpireMonth || !this.idExpireYear ) { this.message = "ID expire date is required." }
                else if ( !this.idExpireDay.match(regNums) || !this.idExpireMonth.match(regNums) || !this.idExpireYear.match(regNums) ) { this.message = "Invalid ID expire date, input must be number." }

                // ID number validation
                else if ( !this.idNumber ) { this.message = "ID number is required." }
                else if ( !this.idNumber.match( this.$store.state.regex.alphanumeric ) ) { this.message = "Invalid ID number." }

                // UMCN validation
                else if ( !this.umcn ) { this.message = "UMCN is required." }
                else if ( !this.umcn.match( regNums ) ) { this.message = "Invalid UMCN." }

                // Bank validation
                else if ( !this.bank ) { this.message = "Bank is required." }
                else if ( this.bank.match( this.$store.state.regex.login ) ) { this.message = "Invalid Bank name." }

                // Account number validation
                else if ( !this.accNumber ) { this.message = "Account number is required." }
                else if ( !this.accNumber.match( regNums ) ) { this.message = "Invalid account number, input must be numbers." }

                // Employment date validation
                else if ( !this.employmentDay || !this.employmentMonth || !this.employmentYear ) { this.message = "Employment date is required." }
                else if ( !this.employmentDay.match(regNums) || !this.employmentMonth.match(regNums) || !this.employmentYear.match(regNums) ) { this.message = "Invalid employment date, input must be number." }

                // Payment validation
                else if ( !this.payment ) { this.message = "Payment is required." }
                else if ( !this.payment.match( this.$store.state.regex.alphanumeric ) ) { this.message = "Invalid payment input." }

                // Position validation
                else if ( !this.position ) { this.message = "Position is required." }

                // Admin validation
                else if ( this.admin && !this.admintype ) { this.message = "Please select admin type." }

                // Add user API request
                else {

                    let user = {

                        name: this.name,
                        surname: this.surname,
                        gender: this.gender,
                        birthday: {
                            day: this.birthDay,
                            month: this.birthMonth,
                            year: this.birthYear
                        },
                        city: this.city,
                        phone: this.phone,
                        education: this.education,
                        address: this.address,
                        email: this.email,
                        IdExpireDate: {
                            day: this.idExpireDay,
                            month: this.idExpireMonth,
                            year: this.idExpireYear
                        },
                        IdNumber: this.idNumber,
                        umcn: this.umcn,
                        bank: this.bank,
                        accNumber: this.accNumber,
                        employmentDate: {
                            day: this.employmentDay,
                            month: this.employmentMonth,
                            year: this.employmentYear
                        },
                        payment: this.payment,
                        position: this.position,
                        is_admin: this.admin,
                        admin_type: this.admintype
                    }

                    axios({
                        url: this.$store.state.api + 'user',
                        method: 'POST',
                        headers: { 'x-access-token' : localStorage.getItem('token') },
                        data: user
                    })

                    .then(response => {

                        console.log(response)

                        this.message = response.data.message
                        
                        this.$store.commit( 'resetUserConfigState' )

                        this.$router.push({ name: 'allUsers' })

                    })

                    .catch(error => {

                        console.log(error)

                        this.message = "Ups! something went wrong, please try again."

                    })
                }
            }
        },

        watch: {

            message() {

                setTimeout(() => { this.message = "" },2000)
            }
        }

    }

</script>


<style scoped>

    .admin {

        z-index: 1;

        transform: translateY( 80px );

        transition: 0.3s ease;
    }

    .admin-slide {

        transform: translateY( 0px );
    }

</style>

