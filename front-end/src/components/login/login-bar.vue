<template>

  <div class="login-bar">

    <form class="login-form" name="login-form">

      <img src="/static/images/logo/vertigo_logo.png" alt="vertigo logo" />

      <div class="login-input-wrap">

        <input class="login-input" id="username-input" type="text" name="username" placeholder="username" @keyup="validate" v-model="username" />

        <div class="login-lock-wrap">

          <img class="login-lock" v-if="validation === 'locked'" :src="locked" />
          <img class="login-lock" v-if="validation === 'error'" :src="error" />
          <img class="login-lock" v-if="validation === 'success'" :src="unlocked" />

        </div>

      </div>

      <div class="login-input-wrap">

        <input class="login-input" id="password-input" type="password" name="password" placeholder="password" @keyup="validate" v-model="password" />

        <div class="login-lock-wrap">

          <img class="login-lock" v-if="validation === 'locked'" :src="locked" />
          <img class="login-lock" v-if="validation === 'error'" :src="error" />
          <img class="login-lock" v-if="validation === 'success'" :src="unlocked" />

        </div>

      </div>

    </form>

  </div>

</template>

<script>

  import _ from 'lodash'

  export default {
    name: "login-bar",
    data() {
      return {
        locked: "/static/images/icons/login/login_lock.png",
        error: "/static/images/icons/login/login_error.png",
        unlocked: "/static/images/icons/login/login_unlock.png"
      }
    },
    computed: {
      username: {
        get() { return this.$store.state.login.username },
        set( value ) { this.$store.commit( 'updateUsername', value ) }
      },
      password: {
        get() { return this.$store.state.login.password },
        set( value ) { this.$store.commit( 'updatePassword', value ) }
      },
      validation: {
        get() { return this.$store.state.login.validation }
      }
    },
    methods: {

      validate: _.debounce( function() {

        // Letters, numbers and spaces only REGEX
        let regex = /^[\w\s]+$/

        if( this.username === "" )
          {
            $('#username-input').attr( 'placeholder', 'You forgot somethin?' )
          }

        else if ( !this.username.match(regex) )
          {
            this.username = ""
            $('#username-input').attr( 'placeholder', 'Aha! a hacker!' )
          }

        else if ( this.password === "" )
          {
            $('#password-input').attr( 'placeholder', 'The magic word please.' )
          }

        else
          {
            this.$store.dispatch('LOGIN_API')
          }

      },1000 )

    },

    watch: {

      validation() {
        if ( this.validation === "locked" )
          {
            $('.login-lock-wrap').removeClass('login-success login-error')
          }
        else if ( this.validation === "error" )
          {
            $('.login-lock-wrap').removeClass('login-success').addClass('login-error')
          }
        else if ( this.validation === "success" )
          {
            $('.login-lock-wrap').removeClass('login-error').addClass('login-success')
          }
      }
    },

    mounted() {
      $('#username-input').focus()
    }

  }

</script>

<style scoped>

  .login-bar {

    position: relative;

    background-color: white;

    transition: all 0.3s ease;
  }

  .login-form {

    width: 100%;
    height: auto;

    position: absolute;
    top: 50%;

    transform: translateY(-50%);

    padding: 60px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: max-content 40px 40px;
    grid-row-gap: 20px;
  }

  .login-input-wrap {
    position: relative;

    border: none;
    border-radius: 30px;
    background-color: whitesmoke;
  }

  .login-input {

    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: dimgray;

    padding: 10px 20px;

    border: none;
    background-color: transparent;
  }

  .login-lock-wrap {

    position: absolute;
    top: 0px;
    right: 0px;

    padding: 14px;

    border-radius: 30px;

    transform: rotateY(-180deg);

    transition: all 0.5s ease;
  }

  .login-success {

    transform: rotateY(0deg);

    background-color: #8BC34A;
  }

  .login-error {

    transform: rotateY(180deg);

    background-color: tomato;
  }

</style>
