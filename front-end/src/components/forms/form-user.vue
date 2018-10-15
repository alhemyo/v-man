<template>

    <div class="form" :class="{ open : userForm }" >

        <div class="form-header">

            <i class="fas fa-user-plus" />

            <p>Create New User</p>

        </div>

        <loader :condition="loading" />

        <transition name="list" >

            <form v-show="userForm" v-if="!loading" class="form-body">

                <!-- NAME -->

                <div class="form-input">

                    <input type="text" placeholder="Name" v-model="user.name" />

                    <i class="fas fa-pen" />

                </div>

                <!-- SURNAME -->

                <div class="form-input">

                    <input type="text" placeholder="Surname" v-model="user.surname" />

                    <i class="fas fa-pen" />

                </div>

                <!-- GENDER -->

                <form-select
                
                    name="Gender"
                    :options="genderOptions"
                    :single="true"
                    :value="user.gender"
                    @option="user.gender = $event"
                
                />

                <!-- BIRTHDAY -->

                <form-date
                
                    name="Birthday"
                    :value="user.birthday"
                    @setDate="user.birthday = $event"
                
                />

                <!-- CITY -->

                <div class="form-input">

                    <input type="text" placeholder="City" v-model="user.city" />

                    <i class="fas fa-pen" />

                </div>

                <!-- PHONE -->

                <div class="form-input">

                    <input type="text" placeholder="Phone number" v-model="user.phone" />

                    <i class="fas fa-phone" />

                </div>

                <!-- ADDRESS -->

                <div class="form-input form-full">

                    <input type="text" placeholder="Address" v-model="user.address" />

                    <i class="fas fa-pen" />

                </div>

                <!-- MAIL -->

                <div class="form-input form-full">

                    <input type="text" placeholder="E-Mail" v-model="user.mail" />

                    <i class="fas fa-at" />

                </div>

                <!-- ID NUMBER -->

                <div class="form-input">

                    <input type="text" placeholder="ID number" v-model="user.idNumber" />

                    <i class="fas fa-pen" />

                </div>

                <!-- ID EXPIRE DATE -->

                <form-date
                
                    name="ID expire date"
                    :value="user.idExpireDate"
                    @setDate="user.idExpireDate = $event"
                
                />

                <!-- EDUCATION -->

                <form-select
                
                    name="Education"
                    :options="educationOptions"
                    :single="true"
                    :value="user.education"
                    @option="user.education = $event"
                
                />

                <!-- ACC NUMBER -->

                <div class="form-input">

                    <input type="text" placeholder="Account number" v-model="user.accNumber" />

                    <i class="fas fa-pen" />

                </div>

                <!-- BANK -->

                <div class="form-input form-full">

                    <input type="text" placeholder="Bank" v-model="user.bank" />

                    <i class="fas fa-pen" />

                </div>

                <!-- UMCN -->

                <div class="form-input form-full">

                    <input type="text" placeholder="UMCN" v-model="user.umcn" />

                    <i class="fas fa-pen" />

                </div>

                <!-- ADMIN -->

                <form-switch
                
                    class="form-1-2 admin"
                    :class="{ 'admin-on' : user.admin }"
                    name="Admin"
                    :value="user.admin"
                    @switch="user.admin = $event"
                
                />

                <!-- POSITION -->

                <form-select
                
                    name="Position"
                    :options="positionOptions"
                    :single="true"
                    :value="user.position"
                    @option="user.position = $event"
                
                />

                <!-- ADMIN TYPE -->

                <form-select
                
                    class="admin-type"
                    :class="{ 'admin-type-on' : user.admin }"
                    name="Admin type"
                    :options="adminOptions"
                    :single="true"
                    :value="user.adminType"
                    @option="user.adminType = $event"
                
                />

                <!-- EMPLOYMENT DATE -->

                <form-date
                
                    name="Employment"
                    :value="user.employmentDate"
                    @setDate="user.employmentDate = $event"
                
                />

                <!-- PAYMENT -->

                <div class="form-input">

                    <input type="text" placeholder="Payment" v-model="user.payment" />

                    <i class="fas fa-pen" />

                </div>

            </form>

        </transition>

        <div class="form-footer">

            <div class="form-button" @click="valid ? addUser() : close()" :class="{ valid : valid }">

                <i class="fas" :class="{ 'fa-times not-valid-icon' : !valid, 'fa-check valid-icon' : valid }" />

            </div>

            <p class="form-message">{{ message }}</p>

        </div>

    </div>

</template>

<script>

    const defaultUser = () => {
        return {
            name: '',
            surname: '',
            gender: '',
            birthday: '',
            city: '',
            phone: '',
            address: '',
            mail: '',
            idNumber: '',
            idExpireDate: '',
            education: '',
            accNumber: '',
            bank: '',
            umcn: '',
            position: '',
            admin: false,
            adminType: 'regular user',
            employmentDate: '',
            payment: ''
        }
    }

    const user = defaultUser()

    export default {

        name: 'form-user',

        components: {

            formSelect: () => import('../widgets/form-select'),
            formDate: () => import('../widgets/form-date'),
            formSwitch: () => import('../widgets/form-switch'),
            loader: () => import('../widgets/loader')

        },

        data() {
            return {

                loading: false,

                // Options
                genderOptions: [ 'female', 'male' ],
                educationOptions: [ 'low', 'mid', 'high' ],
                positionOptions: [ '3D', 'MGFX', 'COMP', 'DESIGN', 'AUDIO', 'TRACK', 'SYS-ADMIN', 'OFFICE', 'ACCOUNT' ],
                adminOptions: [ 'user admin', 'project admin', 'uber admin' ],

                // User Data
                user,

                message: 'All fields are required',

                // Validation
                valid: false

            }
        },

        computed: {

            userForm: {
                get() { return this.$store.state.forms.user },
                set(userForm) { this.$store.commit( 'updateUserForm', userForm ) }
            }

        },

        methods: {

            close() {

                this.userForm = false

                this.user = defaultUser()

            },

            addUser() {

                this.loading = true

                let user = {
                    name: this.user.name,
                    surname: this.user.surname,
                    gender: this.user.gender,
                    birthday: this.user.birthday,
                    city: this.user.city,
                    phone: this.user.phone,
                    address: this.user.address,
                    email: this.user.mail,
                    IdNumber: this.user.idNumber,
                    IdExpireDate: this.user.idExpireDate,
                    education: this.user.education,
                    accNumber: this.user.accNumber,
                    bank: this.user.bank,
                    umcn: this.user.umcn,
                    position: this.user.position,
                    is_admin: this.user.admin,
                    admin_type: this.user.adminType,
                    employmentDate: this.user.employmentDate,
                    payment: this.user.payment
                }

                this.$store.dispatch( 'newUser', user )
                
                .then(() => {

                    this.user = defaultUser()

                    this.userForm = false
                    this.loading = false

                })

            },

            validate(obj) {

                for ( let item in obj ) {

                    if ( obj[item] === "" ) {

                        return false

                    }

                }

                return true

            }

        },

        watch: {

            user: {

                handler: function() {

                    let valid = this.validate(this.user)

                    this.valid = valid

                },

                deep: true

            },

            valid() {

                this.valid ? this.message = 'Create new user' : this.message = 'All fields are required.'

            }

        }

    }

</script>

<style scoped>

    .admin {

        transition: 0.2s ease;

        transform: translateY( 50px );

        z-index: 1;
    }

    .admin-on {

        transform: translateY( 0px );
    }

    .admin-type {

        transition: 0.2s ease;

        opacity: 0;
    }

    .admin-type-on {

        opacity: 1;
    }

</style>
