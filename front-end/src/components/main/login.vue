<template>
    
    <div class="login">

        <form class="login-form">

            <img class="logo" src="/images/assets/logo/logo.png" alt="logo" />

            <input 
            class="login-input"
            :class="{ 'login-input-success' : logged }"
            type="text"
            placeholder="username"
            v-model="username"
            @keyup="validate" />

            <input 
            class="login-input"
            :class="{ 'login-input-success' : logged }"
            type="password"
            placeholder="password"
            v-model="password"
            @keyup="validate" />

            <i 
            @click="login" 
            class="login-button material-icons md-light" 
            :class="{ 'login-button-valid' : valid && !logged , 'login-button-success' : logged }" >

            {{ !valid ? locked : logged ? unlocked : pending }}

            </i>

            <transition name="fade">

                <p v-show="message" class="login-message">{{ message }}</p>

            </transition>

        </form>

    </div>

</template>

<script>

    import {debounce} from 'lodash' // eslint-disable-line

    export default {
    
        name: 'login',

        data() {

            return {

                valid: false,
                logged: false,
                pending: 'keyboard_arrow_right',
                locked: 'lock',
                unlocked: 'lock_open',

                message: ''

            }

        },

        computed: {

            username: { 
                get() { return this.$store.state.auth.username },
                set( value ) { this.$store.commit( 'updateAuthUsername', value ) }
            },
            password: { 
                get() { return this.$store.state.auth.password },
                set( value ) { this.$store.commit( 'updateAuthPassword', value ) }
            }

        },

        methods: {

            validate: _.debounce(function() {

                if ( this.username && this.password ) {

                    if ( !this.username.match(this.$store.state.regex.login) && !this.password.match(this.$store.state.regex.login) ) {

                        this.valid = true
                        this.message = 'Log in to continue...'

                    }

                    else {

                        this.valid = false
                        this.message = 'Invalid characters.'

                    }

                }

                else {

                    this.valid = false
                    this.message = 'All fields are required!'

                    setTimeout(() => {

                        this.message = ''

                    },3000)
                }

            },1500),

            login() {

                if ( this.valid && !this.logged ) {

                    $('.login-input').prop('disabled', true)

                    this.message = 'Please wait...'

                    let name = this.username.split('.')[0]

                    this.$store.dispatch('LOGIN')

                    .then(response => {

                        this.logged = true
                        this.message = 'Welcome ' + name.charAt(0).toUpperCase() + name.substr(1) + ', we are gettin you ready...'

                        localStorage.setItem( 'token', response.data.token )
                        this.$store.commit( 'updateAuthToken', response.data.token )

                        setTimeout(() => {

                            this.$store.dispatch( 'THIS_USER' )

                            .then(() => {

                                this.$router.push('/')

                            })

                            .catch(error => console.log(error))

                        },2000)

                    })

                    .catch(error => {

                        console.log(error)

                        this.valid = false
                        this.message = 'Ups, something went wrong, please try again.'

                        setTimeout(() => {

                            this.message = ''
                            this.username = ''
                            this.password = ''

                            $('.login-input').prop( 'disabled', false )

                        },3000)

                    })

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

    .login {

        width: 100%;
        height: 100vh;

        position: relative;
    }

    .login-form {

        width: auto;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%,-50% );

        display: grid;
        grid-template-columns: 90px min-content min-content min-content 90px;
        grid-template-rows: 40px 40px 40px;
        grid-gap: 10px;
        align-items: center;
    }

    .logo {

        width: 90px;
        height: 90px;

        padding: 20px;

        grid-row: 1/3;

        background-color: var(--red);
        border-radius: 5px;
    }

    .login-input {

        font-family: var(--main-font);
        font-size: 14px;
        font-weight: 500;
        text-align: center;

        grid-column: 2/5;

        width: 290px;
        height: 40px;

        padding: 0px 20px;

        transition: 0.2s ease;

        background-color: var(--white);
        border: none;
        border-radius: 5px;
    }

    .login-input-success {

        width: 0px;

        opacity: 0;

    }

    .login-button {

        font-size: 36px;

        color: var(--white);
        text-align: center;
        user-select: none;

        width: 90px;
        height: 90px;

        grid-column: 5/6;
        grid-row: 1/3;

        padding: 28px;

        transition: 0.5s ease;

        background-color: var(--red);
        border-radius: 5px;
    }

    .login-button-valid {

        font-size: 36px;

        background-color: var(--yellow);

        cursor: pointer;
    }

    .login-button-success {

        background-color: var(--green);
        border-radius: 5px;
    }

    .login-message {

        text-align: center;
        color: var(--dark);
        white-space: nowrap;

        grid-column: 1/6;

        padding: 13px;
    }

    .material-icons .md-light { 

        font-size: 24px;
        
        color: rgba(255, 255, 255, 1); 
    }

</style>


