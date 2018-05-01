<template>

  <div class="app-wrap">

    <!-- <navbar /> Fixed nav for the entire app -->

    <div class="login-wrap wrap">

      <login-bar />
      <login-board />

    </div>

    <div class="dash-wrap wrap">

      <dashboard />
      <div class="loader">

        <!-- <project /> Selected Project -->
        <!-- <activity /> User activity log -->
        <!-- <add-project /> Add new project form -->
        <!-- <add-user /> Add new user form -->

      </div>

    </div>

  </div>

</template>

<script>

  // Import Vue Components
  import loginBar from './components/login/login-bar'
  import loginBoard from './components/login/login-board'
  import dashboard from './components/dashboard/dashboard'

  export default {

    name: 'App',
    components: {
      loginBar,
      loginBoard,
      dashboard
    }

  }

</script>

<style>

  /* Google Fonts
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  /* This component CSS */

  .app-wrap {

    width: 100%;
    height: 100vh;

    position: relative;
    margin: 0;
    margin: auto;
    padding: 0;

    overflow: hidden;
  }

  .wrap {

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
  }

  .login-wrap {

    z-index: 10;

    display: grid;
    grid-template-columns: 400px auto;
    grid-template-rows: 100%;

    display: none;
  }

  .dash-wrap {

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 400px auto;
    grid-template-rows: 100%;
  }

  /* Global CSS */

</style>
