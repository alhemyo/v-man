
<template>

  <div class="login-bar">

    <form id="login-form" class="login-form">

      <img src="/static/images/logo/vertigo_logo.png" alt="logo">

      <div class="login-input-wrap">

        <input class="login-input username" type="text" v-model="username" placeholder="username">

        <div class="login-input-lock">

          <img :src="locked" alt="lock" >

        </div>

      </div>

      <div class="login-input-wrap">

        <input class="login-input password" type="password" v-model="password" placeholder="password">

        <div class="login-input-lock">

          <img :src="locked" alt="lock" >

        </div>

      </div>

    </form>

  </div>

</template>

<script>

  export default {

    name: 'login-bar',
    data () {
      return {
        locked: '/static/images/icons/login/login_lock.png',
        unlocked: '/static/images/icons/login/login_unlock.png',
        username: "",
        password: ""
      }
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

</style>
