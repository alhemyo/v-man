
<template>

  <div id="app" class="app">

    <nav-bar></nav-bar>

    <div class="login-wrap">

      <login-bar />
      <login-board />

    </div>

    <div class="dash-wrap">

      <dashboard />

    </div>

  </div>

</template>

<script>

  import navBar from './components/nav-bar'
  import loginBar from './components/login/login-bar'
  import loginBoard from './components/login/login-board'
  import dashboard from './components/dashboard/dashboard'

  export default {
    name: 'App',
    components: {
      navBar,
      loginBar,
      loginBoard,
      dashboard
    }
  }

</script>

<style>

.app {

  width: 100%;
  height: 100vh;

  position: relative;

  overflow: hidden;
}

.login-wrap {

  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0px;
  left: 0px;

  display: grid;
  grid-template-columns: 400px auto;
  grid-template-rows: 100vh;

  display: none;

  z-index: 10;
}

.dash-wrap {

  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0px;
  left: 0px;

  display: grid;
  grid-template-columns: 500px;
  grid-template-rows: 100vh;

  z-index: 9;
}

</style>
