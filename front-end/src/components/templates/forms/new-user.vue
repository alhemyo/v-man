<template>
    
    <div class="new-user" :class="{ 'open-new-user' : openUserForm }">

        <div class="header">

            <h1>Add User</h1>

            <i class="material-icons" @click="closeUserForm" >close</i>

        </div>

        <form class="form">

            <input type="text" class="form-input form-1" placeholder="Name" v-model="name" />

            <input type="text" class="form-input form-2" placeholder="Surname" v-model="surname" />

            <form-select name='Gender' :value="gender" :options="genderOptions" @setValue="gender = $event" />

            <date-picker
                lang="en"
                class="date-picker form-4" 
                input-class="form-input"
                placeholder="Birthday"
                format="DD MMM YYYY"
                v-model="birthday"
            />

            <input type="text" class="form-input form-1" placeholder="City" v-model="city" />

            <input type="text" class="form-input form-2" placeholder="Phone number" v-model="phone" />

            <input type="text" class="form-input form-half-2" placeholder="Address" v-model="address" />

            <input type="text" class="form-input form-half-1" placeholder="E mail" v-model="email" />

            <input type="text" class="form-input form-3" placeholder="ID number" v-model="idNumber" />

            <date-picker
                lang="en"
                class="date-picker form-4" 
                input-class="form-input"
                placeholder="ID expire date"
                format="DD MMM YYYY"
                v-model="idExpireDate"
            />

            <form-select name='Education' :value="education" :options="educationOptions" @setValue="education = $event" />

            <input type="text" class="form-input form-2" placeholder="Account number" v-model="accNumber" />

            <input type="text" class="form-input form-half-2" placeholder="Bank" v-model="bank" />

            <input type="text" class="form-input form-half-1" placeholder="UMCN" v-model="umcn" />

            <form-checkbox class="form-4" :value="admin" name="Admin" @checked="admin = $event" />

            <hr class="form-full" />

            <date-picker
                lang="en"
                class="date-picker form-1" 
                input-class="form-input"
                placeholder="Employment date"
                format="DD MMM YYYY"
                v-model="employmentDate"
            />

            <input type="text" class="form-input form-2" placeholder="Payment" v-model="payment" />

            <form-select name='Position' :value="position" :options="positionOptions" @setValue="position = $event" />

            <form-select name='Admin type' :value="adminType" :options="adminOptions" @setValue="adminType = $event" :class="{ 'admin-show' : !admin }" />

        </form>

        <div class="footer">

            <p class="form-message">{{ message }}</p>

            <p class="form-button" @click="addUser" ><i class="material-icons">done</i></p>

        </div>

    </div>

</template>

<script>

    import DatePicker from 'vue2-datepicker'
    import formSelect from '../../macro/form/form-select'
    import formCheckbox from '../../macro/form/form-checkbox'

    export default {

        name: 'new-user',

        components: {

            DatePicker,
            formSelect,
            formCheckbox
        },

        data() {
            return {

                genderOptions: [ 'female', 'male' ],
                educationOptions: [ 'low', 'mid', 'high' ],
                positionOptions: [ '3D', 'MGFX', 'OFFICE', 'DESIGN', 'COMP', 'AUDIO', 'SYS ADMIN', 'EDIT', 'GRADE', 'TRACK', 'ROTOMATION', 'ACCOUNT' ],
                adminOptions: [ 'project admin', 'user admin', 'uber admin' ],

                message: ''

            }
        },

        computed: {

            openUserForm: {
                get() { return this.$store.state.openUserForm }
            },

            name: {
                get() { return this.$store.state.addUser.name },
                set(value) { this.$store.commit( 'updateAddUserName', value ) }
            },

            surname: {
                get() { return this.$store.state.addUser.surname },
                set(value) { this.$store.commit( 'updateAddUserSurname', value ) }
            },

            gender: {
                get() { return this.$store.state.addUser.gender },
                set(gender) { this.$store.commit( 'updateAddUserGender', gender ) }
            },

            birthday: {
                get() { return this.$store.state.addUser.birthday },
                set(value) { this.$store.commit( 'updateAddUserBirthday', value ) }
            },

            city: {
                get() { return this.$store.state.addUser.city },
                set(value) { this.$store.commit( 'updateAddUserCity', value ) }
            },

            phone: {
                get() { return this.$store.state.addUser.phone },
                set(value) { this.$store.commit( 'updateAddUserPhone', value ) }
            },

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

            idExpireDate: {
                get() { return this.$store.state.addUser.idExpireDate },
                set(value) { this.$store.commit( 'updateAddUserIdExpireDate', value ) }
            },

            education: {
                get() { return this.$store.state.addUser.education },
                set(education) { this.$store.commit( 'updateAddUserEducation', education ) }
            },

            accNumber: {
                get() { return this.$store.state.addUser.accNumber },
                set(value) { this.$store.commit( 'updateAddUserAccNumber', value ) }
            },

            bank: {
                get() { return this.$store.state.addUser.bank },
                set(value) { this.$store.commit( 'updateAddUserBank', value ) }
            },

            umcn: {
                get() { return this.$store.state.addUser.umcn },
                set(value) { this.$store.commit( 'updateAddUserUmcn', value ) }
            },

            employmentDate: {
                get() { return this.$store.state.addUser.employmentDate },
                set(value) { this.$store.commit( 'updateAddUserEmploymentDate', value ) }
            },

            payment: {
                get() { return this.$store.state.addUser.payment },
                set(value) { this.$store.commit( 'updateAddUserPayment', value ) }
            },

            position: {
                get() { return this.$store.state.addUser.position },
                set(position) { this.$store.commit( 'updateAddUserPosition', position ) }
            },

            admin: {
                get() { return this.$store.state.addUser.admin },
                set(value) { this.$store.commit( 'updateAddUserAdmin', value ) }
            },

            adminType: {
                get() { return this.$store.state.addUser.adminType },
                set(adminType) { this.$store.commit( 'updateAddUserAdminType', adminType ) }
            }

        },

        methods: {

            closeUserForm() {

                this.$store.commit( 'updateOpenUserForm', false )
                this.$store.commit( 'resetAddUserState' )

            },

            addUser() {

                if ( this.name && this.name.match(this.$store.state.regex.letters) ) {

                    if ( this.surname && this.surname.match(this.$store.state.regex.letters) ) {

                        if ( this.gender ) {

                            if ( this.birthday ) {

                                if ( this.city && this.city.match(this.$store.state.regex.letters) ) {

                                    if ( this.phone && this.phone.match(this.$store.state.regex.numbers) ) {

                                        if ( this.address && this.address.match(this.$store.state.regex.alphanumeric) ) {

                                            if ( this.email && this.email.match(this.$store.state.regex.mail) ) {

                                                if ( this.idNumber && this.idNumber.match(this.$store.state.regex.alphanumeric) ) {

                                                    if ( this.idExpireDate ) {

                                                        if ( this.education ) {

                                                            if ( this.accNumber && this.accNumber.match(this.$store.state.regex.numbers) ) {

                                                                if ( this.bank && this.bank.match(this.$store.state.regex.alphanumeric) ) {

                                                                    if ( this.umcn && this.umcn.match(this.$store.state.regex.numbers) ) {

                                                                        if ( this.employmentDate ) {

                                                                            if ( this.payment && this.payment.match(this.$store.state.regex.alphanumeric) ) {

                                                                                if ( this.position ) {

                                                                                    if ( this.admin && !this.adminType ) {

                                                                                        this.message = "Please select admin type"

                                                                                    }

                                                                                    else {

                                                                                        this.message = ""

                                                                                        this.$store.dispatch( 'NEW_USER' )

                                                                                        .then(() => {

                                                                                            this.$store.commit( 'updateOpenUserForm', false )
                                                                                            this.$store.commit( 'resetAddUserState' )

                                                                                        })

                                                                                    }

                                                                                }

                                                                                else {
                                                                                    this.message = "Please select position."
                                                                                }

                                                                            }

                                                                            else {
                                                                                this.message = "Valid payment is required."
                                                                            }

                                                                        }

                                                                        else {
                                                                            this.message = "Please select employment date."
                                                                        }

                                                                    }

                                                                    else {
                                                                        this.message = "Valid unique master citizen number is required."
                                                                    }

                                                                }

                                                                else {
                                                                    this.message = "Valid bank name is required."
                                                                }

                                                            }

                                                            else {
                                                                this.message = "Valid account number is required."
                                                            }

                                                        }

                                                        else {
                                                            this.message = "Please select education."
                                                        }

                                                    }

                                                    else {
                                                        this.message = "ID expire date is required."
                                                    }

                                                }

                                                else {
                                                    this.message = "Valid ID number is required."
                                                }

                                            }

                                            else {
                                                this.message = "Valid e mail is required."
                                            }

                                        }

                                        else {
                                            this.message = "Valid address is required."
                                        }

                                    }

                                    else {
                                        this.message = "Valid phone number is required."
                                    }

                                }

                                else {
                                    this.message = "Valid city is required."
                                }

                            }

                            else {
                                this.message = "Please select birthday."
                            }

                        }

                        else {
                            this.message = "Please select gender."
                        }

                    }

                    else {
                        this.message = "Valid surname is required."
                    }

                }

                else {
                    this.message = "Valid name is required."
                }

                /*

                

                */

            }
        },

        watch: {

            message() {

                setTimeout(() => {

                    this.message = ""

                },3000)

            }
        }

    }

</script>

<style scoped>

    .new-user {

        width: 700px;
        height: auto;

        position: absolute;
        bottom: -600px;
        right: 20px;

        display: grid;
        grid-template-rows: 40px auto 60px;

        transition: 0.3s ease;

        background-color: white;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);
        border-radius: 15px 15px 0px 0px;
    }

    .open-new-user {

        bottom: 0px;
    }

    .header {

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        background-color: rgba(0,0,0,0.01);
    }

    h1 {

        user-select: none;

        padding: 0px 20px;
    }

    hr {

        border-color: rgba(0,0,0,0.1);
    }

    .form {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: auto;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        align-content: flex-start;

        padding: 20px;
    }

    .footer {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: auto 60px;
        grid-template-rows: 60px;
        align-items: center;

        border-top: 1px solid rgba(0,0,0,0.01);
    }

    .material-icons {

        font-size: 20px;

        justify-self: center;

        cursor: pointer;
    }

    .date-picker {

        width: 100%;

        font-family: var(--default);
    }

    .admin-show {

        transform: translateY( -5px );

        opacity: 0;
    }

</style>


