<template>
    
    <div class="login">

        <form class="login-form">

            <img src="/images/assets/logo/vman_logo.png" />

            <input 
                
                class="login-input" 
                type="text"
                :disabled="loading || error"
                placeholder="username" 
                v-model="username"
                @keyup="validate"
                
            >

            <input 
            
                class="login-input" 
                type="password"
                :disabled="loading || error"
                placeholder="password" 
                v-model="password"
                @keyup="validate"
            
            />

            <div>

                <loader 
                
                    :condition='loading'
                    message='Getting you ready...'
                
                />

            </div>

        </form>

    </div>

</template>

<script>

    import { debounce } from 'lodash' // eslint-disable-line

    export default {

        name: 'login',

        components: {
            loader: () => import('../components/widgets/loader.vue')
        },

        data() {
            return {
                loading: false,
                error: false
            }
        },

        computed: {
            username: {
                get() { return this.$store.state.auth.username },
                set( value ) { this.$store.commit( 'updateUsername', value ) }
            },
            password: {
                get() { return this.$store.state.auth.password },
                set( value ) { this.$store.commit( 'updatePassword', value ) }
            }
        },

        methods: {
            validate: _.debounce( function() {

                this.loading = true

                let regex = this.$store.state.regex.login

                if( 
                    this.username && 
                    this.password ) {

                    if ( 
                        !this.username.match( regex ) && 
                        !this.password.match( regex ) ) {

                            this.$store.dispatch( 'authenticate', {
                                user: this.username,
                                pass: this.password
                            })
                            .then(response => {

                                this.$store.dispatch( 'getSelf', localStorage.getItem('token') )
                                .then(() => {

                                    setTimeout(() => {
                                        this.loading = false
                                        this.$router.push('/')
                                    }, 2000 )

                                })
                                .catch(error => {
                                    console.log( error )
                                    this.loading = false
                                    this.error = true
                                    this.username = 'Invalid user'

                                    setTimeout(() => {
                                        this.error = false
                                        this.username = ''
                                        this.password = ''
                                    },2000)
                            })
                            })
                            .catch(error => {
                                console.log( error )
                                this.loading = false
                                this.error = true
                                this.username = 'Invalid data'

                                setTimeout(() => {
                                    this.error = false
                                    this.username = ''
                                    this.password = ''
                                },2000)
                            })

                        }

                }

            }, 1500 )
        }

    }

</script>

<style>

    .login-form {

        width: 100%;
        height: auto;
        max-width: 400px;

        position: absolute;
        top: 50%;
        left: 50%;

        display: grid;
        grid-template-rows: 50px 40px 40px 60px;
        align-items: center;

        transform: translate( -50%, -50% );
    }

    .login-form > div {

        position: relative;
    }

    .login-input {

        font-family: var(--main);
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: var(--defaultText);

        width: 100%;
        height: 40px;
        
        background-color: transparent;
        border: none;
    }

    .login-input::placeholder {

        color: var(--defaultText);

        opacity: 0.3;
    }

</style>
