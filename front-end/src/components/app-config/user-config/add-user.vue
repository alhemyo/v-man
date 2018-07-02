<template>

    <form class="add-user">

        <p class="form-sub-title">Personal info</p>

        <input class="form-input form-2" type="text" placeholder="Name" v-model="name" />
        <input class="form-input form-3" type="text" placeholder="Surname" v-model="surname" />

        <form-select>

            <p @click="testSelect" slot="title">gender</p>
            <p slot="value">{{ gender.value }}</p>

        </form-select>

        <div class="form-input-date form-1" title="birthday">

            <span @click="hideEl" class="form-input-date-placeholder">Birthday</span>

            <input class="form-input form-input-date-day" type="text" maxlength="2" placeholder="D" v-model="birthDay" />
            <input class="form-input form-input-date-month" type="text" maxlength="2" placeholder="M" v-model="birthMonth" />
            <input class="form-input form-input-date-year" type="text" maxlength="4" placeholder="Y" v-model="birthYear" />

        </div> <!-- end .form-input-date -->
        
        <input class="form-input form-2" type="text" placeholder="City" v-model="city" />
        <input class="form-input form-3" type="text" placeholder="Phone" v-model="phone" />

        <form-select>

            <p @click="testSelect" slot="title">education</p>
            <p slot="value">{{ education.value }}</p>

        </form-select>

        <input class="form-input form-half-1" type="text" placeholder="Address" v-model="address" />
        <input class="form-input form-half-2" type="text" placeholder="E-mail" v-model="email" />

        <input class="form-input form-1" type="text" placeholder="ID number" v-model="IdNumber" />

        <div class="form-input-date form-2" title="ID expire date">

            <span @click="hideEl" class="form-input-date-placeholder">ID expire date</span>

            <input class="form-input form-input-date-day" type="text" maxlength="2" placeholder="D" v-model="IdExpireDay" />
            <input class="form-input form-input-date-month" type="text" maxlength="2" placeholder="M" v-model="IdExpireMonth" />
            <input class="form-input form-input-date-year" type="text" maxlength="4" placeholder="Y" v-model="IdExpireYear" />

        </div> <!-- end .form-input-date -->

        <input class="form-input form-half-2" type="text" placeholder="UMCN" v-model="umcn" />

        <input class="form-input form-half-1" type="text" placeholder="bank name" v-model="bank" />
        <input class="form-input form-half-2" type="text" placeholder="account number" v-model="accNumber" />

        <hr />

        <p class="form-sub-title">Work info</p>

        <div class="form-radio form-4 admin" :class="{ 'is-admin' : is_admin }">

            <p class="form-radio-placeholder">Admin</p>

            <div @click="is_admin = !is_admin" :class="{ true : is_admin }" class="radio"></div>

        </div> <!-- end .form-radio -->

        <div class="form-input-date form-1" title="employment date">

            <span @click="hideEl" class="form-input-date-placeholder">Employment date</span>

            <input class="form-input form-input-date-day" type="text" maxlength="2" placeholder="D" v-model="employmentDay" />
            <input class="form-input form-input-date-month" type="text" maxlength="2" placeholder="M" v-model="employmentMonth" />
            <input class="form-input form-input-date-year" type="text" maxlength="4" placeholder="Y" v-model="employmentYear" />

        </div> <!-- end .form-input-date -->

        <input class="form-input form-2" type="text" placeholder="Payment" v-model="payment" />

        <form-select>

            <p @click="testSelect" slot="title">position</p>
            <p slot="value">{{ position.value }}</p>

        </form-select>

        <form-select>

            <p @click="testSelect" slot="title">admin_type</p>
            <p slot="value">{{ admin_type.value }}</p>

        </form-select>

        <hr />

        <p class="form-message form-full-1">{{ message }}</p>
        <div class="form-button" @click="addUser">Add User</div>

    </form>
    
</template>

<script>

    import axios from 'axios'

    import formSelect from '../../micro/form-select'

    export default {

        name: 'add-user',

        components: {

            formSelect
        },

        data() {
            return {
                // success/error message
                message: ""
            }
        },

        computed: {
            gender: { get() { return this.$store.state.user.gender } },
            education: { get() { return this.$store.state.user.education } },
            name: { 
                get() { return this.$store.state.user.name },
                set(value) { this.$store.commit('updateUserName', value ) }
            },
            surname: { 
                get() { return this.$store.state.user.surname },
                set(value) { this.$store.commit('updateUserSurname', value) }
            },
            birthDay: {
                get() { return this.$store.state.user.birthday.day },
                set(value) { this.$store.commit('updateUserBirthDay', value) }
            },
            birthMonth: {
                get() { return this.$store.state.user.birthday.month },
                set(value) { this.$store.commit('updateUserBirthMonth', value) }
            },
            birthYear: {
                get() { return this.$store.state.user.birthday.year },
                set(value) { this.$store.commit('updateUserBirthYear', value) }
            },
            city: { 
                get() { return this.$store.state.user.city },
                set(value) { this.$store.commit('updateUserCity', value ) }
            },
            phone: { 
                get() { return this.$store.state.user.phone },
                set(value) { this.$store.commit('updateUserPhone', value ) }
            },
            address: { 
                get() { return this.$store.state.user.address },
                set(value) { this.$store.commit('updateUserAddress', value ) }
            },
            email: { 
                get() { return this.$store.state.user.email },
                set(value) { this.$store.commit('updateUserEmail', value ) }
            },
            IdNumber: { 
                get() { return this.$store.state.user.IdNumber },
                set(value) { this.$store.commit('updateUserIdNumber', value ) }
            },
            IdExpireDay: { 
                get() { return this.$store.state.user.IdExpireDate.day },
                set(value) { this.$store.commit('updateUserIdExpireDay', value ) }
            },
            IdExpireMonth: { 
                get() { return this.$store.state.user.IdExpireDate.month },
                set(value) { this.$store.commit('updateUserIdExpireMonth', value ) }
            },
            IdExpireYear: { 
                get() { return this.$store.state.user.IdExpireDate.year },
                set(value) { this.$store.commit('updateUserIdExpireYear', value ) }
            },
            umcn: {
                get() { return this.$store.state.user.umcn },
                set(value) { this.$store.commit('updateUserUmcn', value ) }
            },
            bank: {
                get() { return this.$store.state.user.bank },
                set(value) { this.$store.commit('updateUserBank', value ) }
            },
            accNumber: {
                get() { return this.$store.state.user.accNumber },
                set(value) { this.$store.commit('updateUserAccNumber', value ) }
            },
            position: { get() { return this.$store.state.user.position } },
            is_admin: {
                 get() { return this.$store.state.user.is_admin },
                 set(value) { this.$store.commit('updateUserIsAdmin', value) }
            },
            admin_type: { get() { return this.$store.state.user.admin_type } },
            employmentDay: {
                get() { return this.$store.state.user.employmentDate.day },
                set(value) { this.$store.commit('updateUserEmploymentDay', value) }
            },
            employmentMonth: {
                get() { return this.$store.state.user.employmentDate.month },
                set(value) { this.$store.commit('updateUserEmploymentMonth', value) }
            },
            employmentYear: {
                get() { return this.$store.state.user.employmentDate.year },
                set(value) { this.$store.commit('updateUserEmploymentYear', value) }
            },
            payment: {
                get() { return this.$store.state.user.payment },
                set(value) { this.$store.commit('updateUserPayment', value) }
            }

        },

        methods: {

            testSelect(event) {
                
                let clickedKey = $(event.currentTarget).text()

                this.$store.commit('updatePopValue', clickedKey)

                this.$store.commit( 'updatePopData', this.$store.state.user[clickedKey] )

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

</style>