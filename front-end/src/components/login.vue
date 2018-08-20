<template>
    
    <div class="login">

        <div class="circle" :key="circle" v-for="circle in 5"></div>

        <form class="login-form">

            <h1>V <span>MAN </span><span> project assistant</span></h1>

            <input 
                class="login-input username"
                type="text" 
                placeholder="username" 
                v-model="username"
                @keyup="validate" />

            <input 
                class="login-input password"
                type="password" 
                placeholder="password" 
                v-model="password"
                @keyup="validate" />

            <p class="message">{{ message }}</p>

            <div class="login-loader">

                <div class="loader" :class="{ loading : loading }"></div>

            </div>

        </form>

    </div> <!-- end .login -->

</template>

<script>

    import {debounce} from 'lodash' // eslint-disable-line

    export default {

        name: "login",
        data() {
            return {
                loading: false,
                message: 'Log in to continue.'
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
        methods: {

            validate: _.debounce(function() {

                if ( this.username && this.password ) {

                    if ( !this.username.match(this.$store.state.regex.login && !this.password.match(this.$store.state.regex.login) ) ) {

                        this.message = 'Please wait...'
                        this.loading = true

                        let name = this.username.split('.')[0]

                        this.$store.dispatch('AUTH_USER')

                        .then(response => {

                                $('.login-input').prop('disabled', true)
                                $('.login-loader').addClass('success')

                                this.message = 'Welcome ' + name.charAt(0).toUpperCase() + name.substr(1) + ', we are gettin you ready...'
                                this.$store.commit('updateAuthToken', response.data.token)

                                localStorage.setItem('token', response.data.token)

                                setTimeout(() => {

                                    this.$store.dispatch('GET_AUTH_USER')

                                    .then(() => {

                                        this.$router.push({name: 'dashboard'})

                                    })

                                    .catch(error => console.log(error))

                                },2000)

                        })

                        .catch(error => {

                            this.loading = false
                            this.message = 'Ups, something went wrong... please try again.'

                            $('.login-loader').addClass('error')

                            console.log(error)

                            setTimeout(() => {

                                this.message = 'Log in to continue.'
                                $('.login-loader').removeClass('error')

                            },2000)

                        })

                    }

                }

            },1500)
        }
    }

</script>

<style scoped>

    @keyframes pulse {
        
        0% {
            width: 0vh;
            height: 0vh;

            opacity: 0;
        }

        20% {

            opacity: 0;
        }

        50% {

            opacity: 0.3;
        }

        100% {
            width: 150vh;
            height: 150vh;

            opacity: 0;
        }

    }

    @keyframes load {

        0% {

            left: 0px;

            opacity: 0;
        }

        50% {

            opacity: 1;
        }

        100% {

            left: calc(100% + 4px);

            opacity: 0;
        }

    }

    .login {

        width: 100%;
        height: 100vh;

        position: relative;
    }

    .circle {

        width: 0px;
        height: 0px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%,-50% );

        border: 1px solid black;
        border-radius: 100%;

        opacity: 0;

        animation: pulse 10s linear infinite;
    }

    .circle:nth-child(2) {

        animation-delay: 2s;
    }

    .circle:nth-child(3) {

        animation-delay: 4s;
    }

    .circle:nth-child(4) {

        animation-delay: 6s;
    }

    .circle:nth-child(5) {

        animation-delay: 8s;
    }

    .login-form {

        width: 300px;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%,-50% );

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows:40px 40px 40px 40px 40px;
        grid-row-gap: 10px;
        justify-content: center;
        align-items: center;
    }

    h1 {

        font-family: var(--decorative);
        font-size: 24px;
        text-align: center;
        color: var(--red);
        user-select: none;
    }

    h1 span:nth-child(1) {

        color: var(--white);
        font-weight: 400;
    }

    h1 span:nth-child(2) {

        font-size: 16px;
        font-weight: 500;
        color: rgba(0,0,0,0.4);
    }

    .login-input {

        font-size: 14px;
        color: rgba(255,255,255,0.3);
        text-align: center;

        width: 100%;
        height: 40px;

        padding: 0px 20px;

        background-color: var(--dark);
        border: none;
        border-radius: 40px;

        transition: 0.3s ease;
    }

    .login-input::placeholder {

        color: rgba(255,255,255,0.1);
        user-select: none;
    }

    .login-input::-moz-placeholder {

        color: rgba(255,255,255,0.1);
        user-select: none;
    }

    .login-input::-webkit-input-placeholder {

        color: rgba(255,255,255,0.1);
        user-select: none;
    }

    .message {

        font-size: 13px;
        text-align: center;
        color: rgba(255,255,255,0.2);
    }

    .login-loader {

        width: 20%;
        height: 6px;

        position: relative;
        justify-self: center;
        align-self: flex-start;

        background-color: var(--dark);
        border-radius: 10px;

        overflow: hidden;
    }

    .loader {

        width: 4px;
        height: 100%;

        position: absolute;
        top: 0px;
        left: 0px;

        opacity: 0;

        background-color: white;
    }

    .loading {

        animation: load 1s ease alternate infinite;
    }

    .success {

        background-color: var(--green);
    }

    .error {

        background-color: var(--red);
    }

</style>


