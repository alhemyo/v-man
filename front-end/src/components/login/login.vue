<template>

  <div class="login">

    <div class="circles">

      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>

    </div>

    <form class="login-form" name="login">

      <img src="/static/images/logo/vertigo_logo_white.png" />

      <div class="input-wrap">

        <input class="input username" type="text" name="username" placeholder="username" v-model="username" @keypress="toggleUsernameActive" @keyup="validateUsername" />

        <div class="input-loader">

          <div :class="{ 'load' : usernameActive, 'error' : usernameError }" class="loader-item"></div>
          <div :class="{ 'load' : usernameActive, 'error' : usernameError }" class="loader-item"></div>
          <div :class="{ 'load' : usernameActive, 'error' : usernameError }" class="loader-item"></div>

        </div>

        <input class="input password" type="password" name="password" placeholder="password" v-model="password" @keypress="togglePasswordActive" @keyup="validatePassword" />

        <div class="input-loader">

          <div :class="{ 'load' : passwordActive }" class="loader-item"></div>
          <div :class="{ 'load' : passwordActive }" class="loader-item"></div>
          <div :class="{ 'load' : passwordActive }" class="loader-item"></div>

        </div>

      </div>

    </form>

  </div>

</template>

<script>

  import _ from 'lodash'

  export default {

    name: 'login',

    computed: {
      username: {
        get() { return this.$store.state.login.username },
        set( value ) { this.$store.commit( 'updateUsername', value ) }
      },
      usernameActive: {
        get() { return this.$store.state.login.usernameActive }
      },
      usernameSuccess: { get() { return this.$store.state.login.usernameSuccess } },
      usernameError: { get() { return this.$store.state.login.usernameError } },
      password: {
        get() { return this.$store.state.login.password },
        set( value ) { this.$store.commit( 'updatePassword', value ) }
      },
      passwordActive: {
        get() { return this.$store.state.login.passwordActive }
      },
      passwordSuccess: { get() { return this.$store.state.login.passwordSuccess } },
      passwordError: { get() { return this.$store.state.login.passwordError } },
      validation: { get() { return this.$store.state.login.validation } }
    },

    methods: {

      validateUsername: _.debounce(function() {

        this.$store.commit( 'updateUsernameActive', false )

        // REGEX check | letters only
        if ( !this.username.match(this.$store.state.regex.letters) )
          {
            this.username = ""
            $('.username').prop('placeholder', 'No numbers !')
            this.$store.commit( 'updateUsernameError', true )

            setTimeout( () => {

              $('.username').prop('placeholder', 'username')
              this.$store.commit( 'updateUsernameError', false )

            },3000)
          }

        else
          {
            this.$store.commit( 'updateUsernameSuccess', true )
          }

      },500),

      validatePassword: _.debounce(function() {

        this.$store.commit( 'updatePasswordActive', false )

        if ( !this.password.match(this.$store.state.regex.alphanumeric) )
          {
            this.password = ""
            $('.password').prop('placeholder', 'Aha ! A hacker !')
            this.$store.commit( 'updatePasswordError', true )

            setTimeout( () => {

              $('.password').prop('placeholder', 'password')
              this.$store.commit( 'updatePasswordError', false )

            },3000)
          }

        else
          {
            this.$store.commit( 'updatePasswordSuccess', true )
          }

      },500),

      toggleUsernameActive() {
        this.$store.commit( 'updateUsernameActive', true )
      },

      togglePasswordActive() {
        this.$store.commit( 'updatePasswordActive', true )
      }

    }

  }

</script>

<style scoped>

  @keyframes pulse {

    0% {
      width: 0vw;
      height: 0vw;
      opacity: 0;
      border-color: rgba(0,0,0,0.3);
    }

    20% {
      opacity: 1;
    }

    100% {
      width: 150vw;
      height: 150vw;
      opacity: 0;
      border-color: #FF312E;
    }

  }

  @keyframes loader {

    0% {
      transform: translateY( 0px );
    }

    50% {
      transform: translateY( -10px );
    }

    100% {
      transform: translateY( 0px );
    }
  }

  .login {

    width: 100%;
    height: 100vh;

    position: relative;
    margin: none;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100vh;

    background-color: #333138;
  }

  .login-form {

    width: auto;
    height: 150px;

    position: absolute;
    top: 50%;
    left: 0px;

    transform: translateY( -50% );

    padding: 0px 40px;

    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: 150px;
    grid-column-gap: 40px;
  }

  .login-form img {

    padding: 10px;
  }

  .input-wrap {

    padding: 20px 0px;

    display: grid;
    grid-template-columns: 300px 40px;
    grid-template-rows: 40px 40px;
    grid-row-gap: 30px;
    grid-column-gap: 10px;
  }

  .input {

    font-size: 14px;
    font-weight: lighter;
    color: #FFFFFA;

    background-color: transparent;
    border: none;
    border-bottom: 4px solid #FFFFFA;
  }

  .input::placeholder {

    color: rgba(255,255,255,0.3)
  }

  .input-loader {

    display: grid;
    grid-template-columns: 4px 4px 4px;
    grid-template-rows: 4px;
    justify-content: space-around;
    align-content: flex-end;
  }

  .loader-item {

    background-color: #FFFFFA;
  }

  .loader-item:nth-child(1) {
    animation-delay: 0.2s;
  }

  .loader-item:nth-child(2) {
    animation-delay: 0.4s;
  }

  .load {

    animation: loader 0.6s linear infinite;
  }

  .success {

    background-color: #C8E087;
  }

  .error {

    background-color: #FF312E;
  }

  .circles {

    width: 0px;
    height: 0px;

    position: absolute;
    top: 50%;
    left: 120px;

    transform: translateY( -50% );
  }

  .circle {

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate( -50%,-50% );

    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 100%;

    animation: pulse 5s linear infinite;
  }

  .circle:nth-child(2) {

    animation-delay: 1s;
  }

  .circle:nth-child(3) {

    animation-delay: 2s;
  }

  .circle:nth-child(4) {

    animation-delay: 3s;
  }

  .circle:nth-child(5) {

    animation-delay: 4s;
  }

</style>
