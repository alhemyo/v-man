<template>

  <div class="login-bar">

    <form class="login-form" name="login-form">

      <img src="/static/images/logo/vertigo_logo.png" alt="vertigo logo" />

      <input class="login-input" id="username-input" type="text" name="username" placeholder="username" @keyup="validate" v-model="username" />
      <input class="login-input" id="password-input" type="password" name="password" placeholder="password" @keyup="validate" v-model="password" />

    </form>

  </div>

</template>

<script>

  import _ from 'lodash'

  export default {
    name: "login-bar",
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
    }
  }

</script>

<style scoped>

  .login-bar {

    position: relative;

    background-color: white;
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

  .login-input {

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: dimgray;

    padding: 0px 20px;

    border: none;
    border-radius: 30px;
    background-color: whitesmoke;
  }

</style>
