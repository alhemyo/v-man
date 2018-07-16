<template>
    
    <div class="login">
        
        <transition name="login-left">

            <div v-if="!login" class="login-left-pane">
                
                <form class="login-form">

                    <h1><span>V</span> MAN <span>project assistant</span></h1>

                    <div class="login-input-wrap">

                        <input 
                            class="login-input username" 
                            type="text" name="username" 
                            placeholder="username"
                            v-model="username"
                            @keyup="validate" />

                        <div class="login-input-icon"></div> <!-- end .login-input-icon -->

                        <div class="login-input-loader-wrap">

                            <div class="login-input-loader" :class="{ typing : typingUsername , validating : validatingUsername, validated : validated }"></div>    
                            
                        </div> <!-- end login-input-loader-wrap -->    
                        
                    </div> <!-- end .login-input-wrap -->

                    <div class="login-input-wrap">

                        <input 
                            class="login-input password" 
                            type="password" name="password" 
                            placeholder="password"
                            v-model="password"
                            @keyup="validate" />

                        <div class="login-input-icon"></div> <!-- end .login-input-icon -->

                        <div class="login-input-loader-wrap">

                            <div class="login-input-loader" :class="{ typing : typingPassword , validating : validatingPassword, validated : validated }"></div>    
                            
                        </div> <!-- end login-input-loader-wrap -->    
                        
                    </div> <!-- end .login-input-wrap -->

                    <p class="form-message">{{ message }}</p>
                    
                </form> <!-- end .login-form -->
                
            </div> <!-- end .login-left-pane -->

        </transition>

        <transition name="login-right">

            <div v-if="!login" class="login-right-pane"></div> <!-- end .login-right-pane -->

        </transition>

    </div>

</template>

<script>

    import _ from 'lodash'

    export default {
    
        name: 'login',

        data() {
            return {

                validUsername: false,
                validPassword: false,
                typingUsername: false,
                typingPassword: false,
                validatingUsername: false,
                validatingPassword: false,
                validated: false,
                login: false,

                message: ''
            }
        },

        computed: {

            username: {
                get() { return this.$store.state.auth.username },
                set(value) { this.$store.commit( 'updateAuthUsername', value ) }
            },

            password: {
                get() { return this.$store.state.auth.password },
                set(value) { this.$store.commit( 'updateAuthPassword', value ) }
            }
        },

        watch: {

            username() {

                this.typingUsername = true

                if ( this.username != "" ) {

                    if ( this.username.match( this.$store.state.regex.mail ) ) {

                        this.validUsername = true

                    }

                }

                else if ( this.username === "" ) {

                    this.typingUsername = false

                }
            },

            password() {

                this.typingPassword = true

                if ( this.password != "" ) {

                    if ( !this.password.match( this.$store.state.regex.login ) ) {

                        this.validPassword = true

                    }

                }

                else if ( this.password === "" ) {

                    this.typingPassword = false

                }

            }
        },

        methods: {

            validate: _.debounce(function () {

                if ( this.validUsername && this.validPassword ) {

                    $('.login-input').prop('disabled', true)

                    this.$store.dispatch('AUTH_USER')

                    .then( response => {

                        if ( response.status === 200 ) {

                            this.validatingUsername = true
                            this.validatingPassword = true

                            setTimeout(() => {

                                this.validated = true
                                localStorage.setItem( 'token', response.data.token )

                                setTimeout(() => {

                                    this.$store.dispatch('GET_USER')

                                    this.login = true
                                    
                                    setTimeout(() => {

                                        this.$router.push({ name: 'dashboard' })

                                    },500)

                                },2000)

                            }, 500)

                        }

                    })

                    .catch( error => {

                        this.message = "Something went wrong, please try again."

                        setTimeout(() => {

                            $('.username').focus()
                            $('.login-input').prop('disabled', false)
                            this.$store.commit( 'resetAuthState' )
                            this.message = ''

                        },2000)

                    })

                }

            }, 1500)

        }

    }

</script>

<style scoped>

    .login-left-enter-active, .login-right-enter-active, .login-left-leave-active, .login-right-leave-active {

        transition: 0.5s ease;
    }

    .login-left-leave-to {

        transform: translateX( -100% );
    }

    .login-right-leave-to {

        transform: translateX( 100% );
    }

    .login {

        width: 100%;
        height: 100vh;

        position: absolute;
        z-index: 100;
        top: 0px;
        left: 0px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }

    .login-left-pane {

        position: relative;

        background-color: var(--black);
    }

    .login-form {

        width: 400px;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 60px 60px 60px;
        grid-row-gap: 20px;
    }

    h1 {

        font-size: 36px;
        font-weight: normal;
        color: var(--white);
    }

    h1 span:nth-child(1) {

        font-weight: bold;
        color: var(--red);
    }

    h1 span:nth-child(2) {

        font-size: 16px;
        font-weight: normal;
        color: var(--gray);
    }

    .login-input-wrap {

        position: relative;

        display: grid;
        grid-template-columns: auto 56px;
        grid-template-rows: 56px 4px;
    }

    .login-input {

        color: var(--gray);

        width: 100%;
        height: 56px;

        border: none;
        background-color: transparent;
    }

    .login-input::placeholder {

        color: var(--dark);
    }

    .login-input-loader-wrap {

        background-color: var(--dark);
    }

    .login-input-loader {

        width: 0%;
        height: 100%;

        background-color: var(--dark);

        transition: 1s ease-out;
    }

    .typing {

        width: 50%;

        background-color: var(--yellow);
    }

    .validating {

        width: 80%;

        background-color: orange;
    }

    .validated {

        width: 100%;

        background-color: var(--green);
    }

    .form-message {

        font-size: 12px;
        color: var(--gray);

        align-self: center;
    }

    .login-right-pane {

        background-color: var(--white);
    }

</style>


