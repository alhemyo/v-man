<template>

  <transition name="fade">

    <div class="login" v-show="login">

      <transition name="slide-left">

        <div class="login-bar" v-if="login">

          <form class="login-form" name="login">

            <input v-model="username" @keypress="active = true" @keyup="validate" class="input username" type="text" name="username" placeholder="username" />

            <input v-model="password" @keypress="active = true" @keyup="validate" class="input password" type="password" name="password" placeholder="password" />

            <p class="password-link">forgot my password</p>

            <div class="loader">

              <div class="loader-item" :class="{ load : active, success : validation, error : error }"></div>
              <div class="loader-item" :class="{ load : active, success : validation, error : error }"></div>
              <div class="loader-item" :class="{ load : active, success : validation, error : error }"></div>

            </div>

          </form>

        </div>

      </transition>

      <transition name="slide-right">

        <div class="login-board" v-if="login">

          <img class="logo" src="/static/images/logo/vertigo_logo_lines.png" />

          <div class="circles">

            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>

          </div>

        </div>

      </transition>

    </div>

  </transition>

</template>

<script>

  import _ from 'lodash'

  export default {

    name: 'login',

    data() {
      return {
        active: false
      }
    },

    computed: {
      login: { get() { return this.$store.state.components.login } },
      username: {
        get() { return this.$store.state.login.username },
        set(value) { this.$store.commit( 'updateUsername', value ) }
      },
      password: {
        get() { return this.$store.state.login.password },
        set(value) { this.$store.commit( 'updatePassword', value ) }
      },
      validation: { get() { return this.$store.state.login.validation } },
      error: { get() { return this.$store.state.login.error } }
    },

    methods: {
      validate: _.debounce(function() {

        this.active = false

        if( this.username.match(this.$store.state.regex.login) )
          {
            this.username = ""
            $('.username').prop('placeholder', 'What are you writing?')

            setTimeout(()=>{
              $('.username').focus().prop('placeholder', 'username')
            },2000)
          }

        else if ( this.password.match(this.$store.state.regex.login) )
          {
            this.password = ""
            $('.password').prop('placeholder', 'Aha! A hacker!')

            setTimeout(()=>{
              $('.password').focus().prop('placeholder', 'password')
            },2000)
          }

        else if ( this.username === "" )
          {
            $('.username').focus()
          }

        else if ( this.password === "" )
          {
            $('.password').focus()
          }

        else
          {
            this.$store.dispatch('LOGIN_API')
          }

      },1000)
    },

    mounted() {
      $('.username').focus()
    }

  }

</script>

<style scoped>

  @keyframes pulse {

    0% {
      width: 0vw;
      height: 0vw;
      opacity: 0;
      border-color: #FF312E;
    }

    50% {
      opacity: 0.6;
    }

    100% {
      width: 100vw;
      height: 100vw;
      opacity: 0;
      border-color: #FF312E;
    }

  }

  @keyframes load {

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

  .slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {

    transition: all .6s ease;
  }

  .slide-left-enter, .slide-left-leave-to {

    transform: translateX( -338px );
  }

  .slide-right-enter, .slide-right-leave-to {

    transform: translateX( calc( 100vw - 338px ) );
  }

  .fade-leave-active {

    transition: all 0.6s ease;
  }

  .fade-enter-active {

    transition: all 0.6s ease;
  }

  .fade-enter, .fade-leave-to {

    opacity: 0;
  }

  .login {

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 338px auto;
    grid-template-rows: 1fr;

    background-color: transparent;
  }

  .login-bar {

    position: relative;

    background-color: whitesmoke;

    box-shadow: 0px 0px 40px rgba(0,0,0,0.3);
  }

  .login-form {

    width: 100%;
    height: auto;

    position: absolute;
    top: 50%;
    left: 0px;

    transform: translateY( -50% );

    padding: 40px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40px 40px;
    grid-row-gap: 20px;
  }

  .input {

    font-size: 14px;
    color: var(--dashText);

    background-color: whitesmoke;

    padding: 0px 20px;

    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.1)
  }

  .password-link {

    font-size: 12px;
    color: lightgray;

    position: absolute;
    bottom: -5px;
    left: 60px;

    cursor: pointer;
  }

  .password-link:hover {

    color: gray;
  }

  .loader {

    width: 40px;
    height: 40px;

    position: absolute;
    bottom: -20px;
    right: 60px;

    display: grid;
    grid-template-columns: 6px 6px 6px;
    grid-template-rows: 6px;
    justify-content: space-between;
    align-content: center;
  }

  .loader-item {

    background-color: #171A1E;
    border-radius: 12px;

    transition: all .3s ease;
  }

  .loader-item:nth-child(2) {

    animation-delay: 0.1s;
  }

  .loader-item:nth-child(3) {

    animation-delay: 0.3s;
  }

  .load {

    animation: load 0.6s linear infinite;
  }

  .success {

    background-color: var(--green);
  }

  .error {

    background-color: #FF312E;
  }

  .login-board {

    position: relative;

    background-color: var(--dash);
  }

  .logo {

    width: 100px;
    height: 100px;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate( -50%,-50% );
  }

  .circles {

    width: 100%;
    height: 100%;

    position: absolute;

    overflow: hidden;
  }

  .circle {

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate( -50%,-50% );

    border: 1px solid #FF312E;
    border-radius: 100%;

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

</style>
