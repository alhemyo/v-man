<template>

  <div class="app-wrap">

    <!-- <navbar /> Fixed nav for the entire app -->

    <div class="login-wrap wrap">

      <login-bar />
      <!-- <login-board /> Greeting and logo -->

    </div>

    <div class="dash-wrap wrap">

      <!-- <dashboard /> User Info -->
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

  export default {

    name: 'App',
    components: {
      loginBar
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
  }

  /* Global CSS */

</style>
