
<template>

  <div class="login-bar"> <!-- login form component -->

    <form id="login-form" class="login-form">

      <img src="/static/images/logo/vertigo_logo.png" alt="logo">

      <div class="login-input-wrap">

        <input
          @keyup="validate"
          class="login-input username"
          name="username"
          type="text"
          v-model="username"
          placeholder="username">

        <div class="login-input-lock">

          <img v-if="validation === 'locked'" :src="locked"  alt="lock" >
          <img v-if="validation === 'success'" :src="unlocked"  alt="lock" >
          <img v-if="validation === 'error'" :src="loginError"  alt="lock" >

        </div>

      </div>

      <div class="login-input-wrap">

        <input
          @keyup="validate"
          class="login-input password"
          name="password"
          type="password"
          v-model="password"
          placeholder="password">

        <div class="login-input-lock" >

          <img v-if="validation === 'locked'" :src="locked"  alt="lock" >
          <img v-if="validation === 'success'" :src="unlocked"  alt="lock" >
          <img v-if="validation === 'error'" :src="loginError"  alt="lock" >

        </div>

      </div>

    </form>

  </div>

</template>

<script>
  import _ from 'lodash'
  import axios from 'axios'
  // import { mapGetters } from 'vuex'

  export default {
    name: 'login-bar',
    data () {
      return {
        locked: '/static/images/icons/login/login_lock.png',
        unlocked: '/static/images/icons/login/login_unlock.png',
        loginError: '/static/images/icons/login/login_error.png'
      }
    },
    computed: {
      username: {
        get() { return this.$store.state.username },
        set(value) { this.$store.commit('updateUsername', value) }
      },
      password: {
        get() { return this.$store.state.password },
        set(value) { this.$store.commit('updatePassword', value) }
      },
      validation: {
        get() { return this.$store.state.validation }
      }
    },
    methods: {
      validate: _.debounce( function() {
        // Check if username is empty
        if ( this.username === "" && this.password != "" )
          {
            $('.username').attr( "placeholder", "C'mon, u must have a name?" )
          }
        // Check if password is empty
        else if ( this.username != "" && this.password === "" )
          {
            $('.password').attr("placeholder", "The magic word please!")
          }
        // Check if both are empty
        else if ( this.username === "" && this.password === "" )
          {
            $('.username').attr( "placeholder", "username" )
            $('.password').attr("placeholder", "password")
            this.$store.commit( 'updateValidation', 'locked' )
            $('.login-input-lock').removeClass('login-error login-success')
          }
        // Check if username and password match
        else if ( this.username === "Jane Doe" && this.password === "password" )
          {
            this.$store.commit( 'updateValidation', 'success' )
            $('.login-input-lock').removeClass('login-error').addClass('login-success')
            $('.login-input').prop('disabled', true)
          }
        // Check if error
        else
          {
            this.$store.commit( 'updateValidation', 'error' )
            $('.login-input-lock').removeClass('login-success').addClass('login-error')
          }
      }, 1000 )
    }
  }

</script>

<style scoped>

/*
font-family: 'Roboto', sans-serif;
*/

.login-bar {

  width: 500px;
  height: 100vh;

  position: relative;
}

.login-form {

  width: auto;
  height: auto;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%,-50%);

  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: auto 40px 40px;
  grid-row-gap: 40px;
}

.login-input-wrap {

  border-radius: 30px;
  background-color: whitesmoke;
}

.login-input {

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: dimgray;

  width: 260px;
  height: 40px;

  position: relative;
  float: left;

  padding: 10px 20px;

  box-sizing: border-box;

  border: none;
  background-color: transparent;
}

.login-input-lock {
  width: 40px;
  height: 40px;

  position: relative;
  float: right;

  border-radius: 30px;

  transition: all 0.3s ease;
}

.login-success {

  transform: rotateY(-180deg);

  background-color: #8BC34A;
}

.login-error {

  transform: rotateY(180deg);

  background-color: #E74040;
}

.login-input-lock img {

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%,-50%);
}

.login-input::placeholder {

  color: gray;
}

.login-input:focus {

  outline: none;
}

</style>
