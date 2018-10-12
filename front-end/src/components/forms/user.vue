<template>
    
    <div class="user" :class="{ open : userForm }" >

        <div class="header">

            <i class="fas fa-user-plus" />

            <p>Create New User</p>

        </div>

        <form class="user-form">

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

            <form-select
            
                name="Admin"
                class="form-1-2"
                :single="true"
            
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

        <div class="footer">

            <div class="form-button" @click="valid ? validate() : close()" :class="{ valid : valid }">

                <i class="fas" :class="{ 'fa-times not-valid-icon' : !valid, 'fa-check valid-icon' : valid }" />

            </div>

            <p class="form-message">{{ message }}</p>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'user',

        components: {

            formSelect: () => import('../widgets/form-select'),
            formDate: () => import('../widgets/form-date')

        },

        data() {
            return {

                // Options
                genderOptions: [ 'Female', 'Male' ],
                educationOptions: [ 'low', 'mid', 'high' ],
                positionOptions: [ '3D', 'MGFX', 'COMP', 'DESIGN', 'AUDIO', 'TRACK', 'SYS-ADMIN', 'OFFICE', 'ACCOUNT' ],
                adminOptions: [ 'User admin', 'Project admin', 'Uber admin' ],

                // Data
                user: {

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
                    admin: '',
                    adminType: '',
                    employmentDate: '',
                    payment: ''

                },

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

                console.log(this.userForm)

            },

            validate() {

                for (let item in this.user) {

                    console.log( this.user[item] )

                }

            }

        }

    }

</script>

<style scoped>

    .user {

        width: 350px;
        height: 100vh;

        position: absolute;
        top: 0px;
        right: -350px;
        z-index: 5;

        display: grid;
        grid-template-rows: 60px auto 60px;

        transition: right 0.3s ease;

        background-color: white;
        box-shadow: 0px 0px 20px var(--darkgray);

        overflow: hidden;
    }

    .open {

        right: 0px;
    }

    .header {

        font-size: 14px;
        font-weight: 500;
        color: var(--black);
        user-select: none;

        width: 100%;
        height: 60px;

        padding: 20px;

        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
    }

    .user-form {

        width: calc( 100% + 17px );
        height: auto;
        max-height: calc( 100vh - 120px );

        padding: 20px;

        align-self: center;

        display: grid;
        grid-template-columns: 150px 150px;
        grid-auto-rows: 40px;
        grid-gap: 10px;

        overflow-y: auto;
    }

    .footer {

        position: relative;
    }

    .form-button {

        width: 40px;
        height: 40px;

        position: absolute;
        right: 290px;
        top: 10px;

        transition: 0.3s ease;

        display: grid;
        align-items: center;

        border-radius: 60px;

        cursor: pointer;
    }

    .form-button:hover {

        background-color: var(--lightgray);

    }

    .valid {

        right: 20px;
    }

    .form-button i {

        font-size: 20px;
    }

    .not-valid-icon {

        color: var(--red);
    }

    .valid-icon {

        color: var(--green);
    }

    .form-message {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);
        text-align: center;

        width: 230px;

        position: relative;
        margin: auto;

        padding: 24px 0px;
    }

</style>
