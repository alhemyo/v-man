<template>

  <div class="login">

    <div class="vertigo-circles">

      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>

    </div>

    <form class="login-form" name="login">

      <img src="/static/images/logo/vertigo_logo.png" />

      <input class="input" name="username" type="text" placeholder="username" />

      <input class="input" name="password" type="password" placeholder="password" />

    </form>

  </div>

</template>

<script>

  export default {

    name: 'login'

  }

</script>

<style scoped>

  .login {

    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 100;

    background-color: #222023;
  }

  .login-form {

    width: 240px;
    height: auto;

    position: absolute;
    top: 55%;
    left: 50%;

    transform: translate( -50%,-50% );

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: min-content 40px 40px;
    grid-row-gap: 20px;
  }

  .input {

    font-size: 14px;
    font-weight: lighter;
    text-align: center;
    color: #AEADAF;

    border: none;
    border-bottom: 4px solid #363437;
    background-color: transparent;

    padding: 0px 40px;
  }

  .input::placeholder {

    font-weight: lighter;
    color: rgba(255,255,255,0.2)
  }

  @keyframes pulse {

    0%  {
      width: 0vw;
      height: 0vw;
      border: 1px solid #222023;
    }

    50% {
      border: 1px solid #161517;
    }

    100% {
      width: 100vw;
      height: 100vw;
      border: 1px solid #222023;
    }

  }

  .vertigo-circles {

    width: auto;
    height: auto;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate( -50%,-50% );
  }

  .circle {

    width: 150vw;
    height: 150vw;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate( -50%,-50% );

    border: 1px solid #161517;
    border-radius: 100%;

    opacity: 1;

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
