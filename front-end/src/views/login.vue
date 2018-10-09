<template>
    
    <div class="login">

        <form class="login-form">

            <img class="login-logo" src="/images/assets/logo/vertigo_logo.png" />

            <input 

            class="login-input" 
            :class="{ error : error }"
            type="text" 
            placeholder="username"
            :disabled="loading" 
            v-model="username"
            @keyup="login"

            />

            <input 

            class="login-input"
            :class="{ error : error }"
            type="password" 
            placeholder="password"
            :disabled="loading" 
            v-model="password"
            @keyup="login"
            
            />

            <div class="loader-wrap">

                <loader 

                    :condition="loading"
                    message="Geting you ready..."

                />

            </div>

        </form>

    </div>

</template>

<script>

    import {debounce} from 'lodash' // eslint-disable-line

    import loader from '../components/widgets/loader'

    export default {
    
        name: 'login',

        components: { loader },

        data() {
            return {
                loading: false,
                error: false
            }
        },

        computed: {
            username: {
                get() { return this.$store.state.auth.username },
                set(value) { this.$store.commit('updateAuthUsername', value) }
            },
            password: {
                get() { return this.$store.state.auth.password },
                set(value) { this.$store.commit('updateAuthPassword', value) }
            }
        },

        methods: {
            login: _.debounce(function() {

                 if (   

                        // Validate login form

                        this.username && 
                        this.password && 
                        !this.username.match(this.$store.state.regex.login) && 
                        !this.password.match(this.$store.state.regex.login) 
                    ) 
                {

                    this.loading = true

                    this.$store.dispatch('login')

                    .then(response => {

                        this.$store.commit('updateAuthToken', response.data.token)
                        localStorage.setItem('token', response.data.token)

                        setTimeout(() => {

                            this.$store.dispatch('thisUser')

                            .then(response => {

                                this.username = `Welcome ${response.data.name}`

                                setTimeout(() => {

                                    this.loading = false
                                    this.$router.push('/')

                                },3000)

                            })

                        },1000)

                    })

                    .catch(error => {

                        this.error = true

                        setTimeout(() => {

                            this.username = '',
                            this.password = ''

                            this.loading = false
                            this.error = false

                            return error

                        },2000)

                    })

                }

            }, 1500)
        }

    }

</script>

<style scoped>

    .login {

        width: 100%;
        height: 100vh;

        position: relative;
    }

    .login-form {

        width: 100%;
        max-width: 400px;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;

        display: grid;
        grid-template-rows: 200px 40px 40px 200px;
        align-items: center;
        justify-content: center;
        grid-gap: 10px;

        transform: translate( -50%, -50% );
    }

    .login-logo {

        height: 60px;

        align-self: flex-start;
    }

    .login-input {

        font-family: var(--main);
        font-size: 20px;
        font-weight: 500;
        color: var(--darkgray);
        text-align: center;

        align-self: center;

        width: 100%;

        padding: 0px 20px;

        border: none;
        border-radius: 3px;
        background-color: white;
    }

    .error {

        color: var(--red);
    }

    .loader-wrap {

        width: 100%;
        height: 100%;

        justify-self: center;

        position: relative;
    }

</style>


