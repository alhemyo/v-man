<template>

    <form class="add-user">

        <p class="form-sub-title">Personal info</p>

        <input class="form-input form-2" type="text" placeholder="Name" v-model="userBody.name" />
        <input class="form-input form-3" type="text" placeholder="Surname" v-model="userBody.surname" />

        <div class="form-select form-4">

            <ul class="form-select-drawer" @click="openSelect">

                <p class="form-select-placeholder">{{ userBody.gender }}</p>

                <li class="form-select-value" @click="selectGender">Female</li>

                <li class="form-select-value" @click="selectGender">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <div class="form-input-date form-1" title="birthday">

            <span @click="hideEl" class="form-input-date-placeholder">Birthday</span>

            <input class="form-input form-input-date-day" type="text" maxlength="2" placeholder="D" v-model="userBody.birthday.day" />
            <input class="form-input form-input-date-month" type="text" maxlength="2" placeholder="M" v-model="userBody.birthday.month" />
            <input class="form-input form-input-date-year" type="text" maxlength="4" placeholder="Y" v-model="userBody.birthday.year" />

        </div> <!-- end .form-input-date -->
        
        <input class="form-input form-2" type="text" placeholder="City" v-model="userBody.city" />
        <input class="form-input form-3" type="text" placeholder="Phone" v-model="userBody.phone" />

        <div class="form-select form-4">

            <ul class="form-select-drawer" @click="openSelect">

                <p class="form-select-placeholder">{{ userBody.education }}</p>

                <li class="form-select-value" @click="selectEducation">high</li>

                <li class="form-select-value" @click="selectEducation">mid</li>

                <li class="form-select-value" @click="selectEducation">low</li>

            </ul>

        </div> <!-- end .form-select -->

        <input class="form-input form-half-1" type="text" placeholder="Address" v-model="userBody.address" />
        <input class="form-input form-half-2" type="text" placeholder="E-mail" v-model="userBody.email" />

        <input class="form-input form-1" type="text" placeholder="ID number" v-model="userBody.IdNumber" />

        <div class="form-input-date form-2" title="ID expire date">

            <span @click="hideEl" class="form-input-date-placeholder">ID expire date</span>

            <input class="form-input form-input-date-day" type="text" maxlength="2" placeholder="D" v-model="userBody.IdExpireDate.day" />
            <input class="form-input form-input-date-month" type="text" maxlength="2" placeholder="M" v-model="userBody.IdExpireDate.month" />
            <input class="form-input form-input-date-year" type="text" maxlength="4" placeholder="Y" v-model="userBody.IdExpireDate.year" />

        </div> <!-- end .form-input-date -->

        <input class="form-input form-half-2" type="text" placeholder="UMCN" v-model="userBody.umcn" />

        <input class="form-input form-half-1" type="text" placeholder="bank name" v-model="userBody.bank" />
        <input class="form-input form-half-2" type="text" placeholder="account number" v-model="userBody.accNumber" />

        <hr />

        <p class="form-sub-title">Work info</p>

        <div class="form-radio form-4 admin" :class="{ 'is-admin' : userBody.is_admin }">

            <p class="form-radio-placeholder">Admin</p>

            <div class="radio" @click="userBody.is_admin = !userBody.is_admin" :class="{ true : userBody.is_admin }"></div>

        </div> <!-- end .form-radio -->

        <div class="form-input-date form-1" title="employment date">

            <span @click="hideEl" class="form-input-date-placeholder">Employment date</span>

            <input class="form-input form-input-date-day" type="text" maxlength="2" placeholder="D" v-model="userBody.employmentDate.day" />
            <input class="form-input form-input-date-month" type="text" maxlength="2" placeholder="M" v-model="userBody.employmentDate.month" />
            <input class="form-input form-input-date-year" type="text" maxlength="4" placeholder="Y" v-model="userBody.employmentDate.year" />

        </div> <!-- end .form-input-date -->

        <input class="form-input form-2" type="text" placeholder="Payment" v-model="userBody.payment" />

        <div class="form-select form-3">

            <ul class="form-select-drawer" @click="openSelect">

                <p class="form-select-placeholder">{{ userBody.position }}</p>

                <li class="form-select-value" @click="selectPosition">3D</li>
                <li class="form-select-value" @click="selectPosition">MGFX</li>
                <li class="form-select-value" @click="selectPosition">COMP</li>
                <li class="form-select-value" @click="selectPosition">AUDIO</li>
                <li class="form-select-value" @click="selectPosition">ACCOUNT</li>
                <li class="form-select-value" @click="selectPosition">OFFICE</li>
                <li class="form-select-value" @click="selectPosition">SYS ADMIN</li>

            </ul>

        </div> <!-- end .form-select -->

        <div v-show="userBody.is_admin" class="form-select form-4">

            <ul class="form-select-drawer" @click="openSelect">

                <p class="form-select-placeholder">{{ userBody.admin_type }}</p>

                <li class="form-select-value" @click="selectAdminType">project admin</li>
                <li class="form-select-value" @click="selectAdminType">user admin</li>
                <li class="form-select-value" @click="selectAdminType">uber admin</li>

            </ul>

        </div> <!-- end .form-select -->

        <hr />

        <p class="form-message form-full-1">{{ message }}</p>
        <div class="form-button" @click="addUser">Add User</div>

    </form>
    
</template>

<script>

    import axios from 'axios'

    export default {

        name: 'add-user',

        data() {

            return {

                userBody: {

                    // Personal info
                    gender: "Select gender ▼",
                    education: "Select education ▼",
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
                    IdNumber: "",
                    IdExpireDate: {

                        day: "",
                        month: "",
                        year: ""

                    },
                    umcn: "",
                    bank: "",
                    accNumber: "",

                    // Work info
                    is_admin: false,
                    admin_type: "Select admin type ▼",
                    position: "Select position ▼",
                    employmentDate: {

                        day: "",
                        month: "",
                        year: ""

                    },
                    payment: ""

                },

                // success/error message
                message: "Displayed message about errors or success"

            }

        },

        methods: {

            // form-select
            openSelect(event) {
                $('.form-select-drawer').not(event.currentTarget).removeClass('open-select')
                $(event.currentTarget).toggleClass('open-select')
            },
            selectGender(event) {
                this.userBody.gender = $(event.currentTarget).html()
            },
            selectEducation(event) {
                this.userBody.education = $(event.currentTarget).html()
            },
            selectAdminType(event) {
                this.userBody.admin_type = $(event.currentTarget).html()
            },
            selectPosition(event) {
                this.userBody.position = $(event.currentTarget).html()
            },

            // form-input-date
            hideEl(event) {
                $(event.currentTarget).fadeOut(150)
            },

            // POST request / add user
            addUser() {
                let postBody = {
                    url: this.$store.state.api + 'user',
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                        'x-access-token' : this.$store.state.auth.token 
                    },
                    data: JSON.stringify(this.userBody)
                }

                //console.log(postBody.data)

                axios(postBody)
                .then(response => {
                    this.message = response.data.message
                }).catch(error => {
                    this.message = "Ups, something whent wrong, please try again."
                })
            }

        }
        
    } // export default

</script>

<style scoped>

    hr {

        grid-column: 1/5;

        opacity: 0.5;
    }

    .add-user {

        font-size: 12px;

        width: 100%;
        max-width: 800px;
        height: auto;

        position: relative;
        margin: auto;

        padding: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(60px);
        grid-gap: 20px;
        align-items: center;
    }

    .form-sub-title, .form-message {

        font-size: 12px;
        color: rgba(0,0,0,0.5);

        padding: 20px;
    }

    .form-1 {

        grid-column: 1/2;
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

    .form-full-1 {

        grid-column: 1/4;
    }

    /* ------------- FORM SELECT CSS ------------- */

    .form-select {

        text-align: center;

        width: 100%;
        height: 40px;

        position: relative;

        cursor: pointer;
    }

    .form-select-drawer {

        width: 100%;
        height: auto;
        max-height: 40px;

        position: absolute;
        z-index: 1;

        padding: 13px;

        background-color: var(--gray);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;

        overflow: hidden;

        transition: 0.1s ease;
    }

    .open-select {

        max-height: 1000px;

        z-index: 100;
    }

    .form-select-placeholder {

        color: var(--dark);

        padding-bottom: 10px;
    }

    .form-select-value {

        color: rgba(0,0,0,0.4);

        padding: 10px;
    }

    .form-select-value:hover {

        color: var(--dark);
    }

    /* ------------- FORM RADIO CSS ------------- */

    .form-radio {

        text-align: left;

        width: 100%;
        height: 40px;

        position: relative;
        z-index: 2;

        padding: 0px 20px;
        padding-right: 10px;

        display: grid;
        grid-template-columns: auto min-content;
        align-items: center;

        background-color: var(--gray);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;
    }

    .radio {

        width: 20px;
        height: 20px;

        background-color: var(--dark);
        border: 2px solid darkgray;
        border-radius: 30px;

        cursor: pointer;

        transition: 0.1s ease;
    }

    .radio:hover {

        background-color: var(--yellow);
    }

    .true {

        background-color: var(--green);
    }

    .true:hover {

        background-color: var(--red);
    }

    .admin {

        transform: translateY(65px);

        transition: all 0.3s ease;
    }

    .is-admin {

        transform: translateY(0px);
    }

    /* ------------ FORM INPUT CSS -------------- */

    .form-input {

        font-size: 12px;
        color: var(--dark);

        width: 100%;
        height: auto;
        max-height: 40px;

        padding: 13px 20px;

        background-color: var(--gray);
        border: none;
        border-radius: 30px;
    }

    .form-input::placeholder {

        color: rgba(0,0,0,0.5);
    }

    /* ------------ FORM INPUT DATE CSS -------------- */

    .form-input-date {

        height: auto;
        max-height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 1.5fr 1fr 1.5fr;
        grid-template-rows: 40px;
    }

    .form-input-date-day {

        text-align: center;
        color: var(--dark);

        width: 100%;
        
        padding: 13px 20px;
        padding-right: 10px;

        border: none;
        border-right: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px 0px 0px 30px;
        background-color: var(--gray);
    }

    .form-input-date-month {

        text-align: center;
        color: var(--dark);

        width: 100%;

        padding: 13px 10px;

        border: none;
        border-radius: 0px;
        background-color: var(--gray);
    }

    .form-input-date-year {

        text-align: center;
        color: var(--dark);

        width: 100%;

        padding: 13px 20px;
        padding-left: 10px;

        border: none;
        border-left: 1px solid rgba(0,0,0,0.1);
        border-radius: 0px 30px 30px 0px;
        background-color: var(--gray);
    }

    .form-input-date-placeholder {

        color: rgba(0,0,0,0.3);

        width: 100%;
        height: 100%;

        position: absolute;

        padding: 13px 20px;

        background-color: var(--gray);
        border-radius: 30px;

        cursor: pointer;
    }

    /* ------------ FORM BUTTON CSS -------------- */

    .form-button {

        color: white;
        text-align: center;

        width: 100%;
        height: 40px;

        padding: 13px;

        background-color: var(--dark);

        border-radius: 30px;

        cursor: pointer;
    }

</style>