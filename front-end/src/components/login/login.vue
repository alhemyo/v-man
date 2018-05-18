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

      <img class="logo" src="/static/images/logo/vertigo_logo_lines.png" />

      <input class="input" type="text" name="username" placeholder="username" v-model="username" />
      <input class="input" type="password" name="password" placeholder="password" v-model="password" />

    </form>

  </div>

</template>

<script>

  export default {

    name: 'login',

    computed: {
      username: { get() { return this.$store.state.login.username } },
      password: { get() { return this.$store.state.login.username } },
      validation: { get() { return this.$store.state.login.validation } }
    }

  }

</script>

<style scoped>

  @keyframes pulse {

    0% {
      width: 0vw;
      height: 0vw;
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      width: 150vw;
      height: 150vw;
      opacity: 0;
    }

  }

  .login {

    width: 100%;
    height: 100vh;

    background-color: #171A1E;
  }

  .circles {

    width: 100%;
    height: 100vh;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate( -50%,-50% );
  }

  .circle {

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate( -50%,-50% );

    border: 1px solid #050607;
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

  .login-form {

    width: auto;
    height: auto;

    position: absolute;
    top: 50%;
    left: 50%;

    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 150px 40px 40px;
    grid-row-gap: 20px;

    transform: translate( -50%,-50% );
  }

  .input {

    font-size: 14px;
    font-weight: lighter;
    color: #FDFFFC;
    text-align: center;

    width: 100%;
    height: 40px;

    padding: 0px 40px;

    border: none;
    border-radius: 40px;
    background-color: #1B1F23;
  }

  .input::placeholder {

    color: rgba(255,255,255,0.3)
  }

</style>
