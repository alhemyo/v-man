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
        <add-project />
        <add-user />

      </div>

    </div>

  </div>

</template>

<script>

  // Import Vue Components
  import loginBar from './components/login/login-bar'
  import loginBoard from './components/login/login-board'
  import dashboard from './components/dashboard/dashboard'
  import addProject from './components/forms/add-project'
  import addUser from './components/forms/add-user'

  export default {

    name: 'App',
    components: {
      loginBar,
      loginBoard,
      dashboard,
      addProject,
      addUser
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
    grid-template-columns: 400px minmax(600px, auto);
    grid-template-rows: 100%;

    display: none;
  }

  .dash-wrap {

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 410px minmax(600px, auto);
    grid-template-rows: 100%;
  }

  .loader {

    position: relative;

    overflow: auto;
  }

  /* Global CSS */

  .nav-split {

    height: 80px;

    position: relative;
  }

  .input-select-list {

    width: 100%;
    height: 40px;
    list-style: none;

    position: absolute;
    top: 0px;
    left: 0px;

    padding: 0px 20px;

    background-color: whitesmoke;
    border-radius: 0px 10px 10px 10px;

    overflow: hidden;
  }

  .input-select-item {

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #9e9e9e;

    padding: 14px 0px;
  }

  .input-select-list li {

    font-weight: bold;
    color: dimgray;

    border-top: 1px solid rgba(0,0,0,0.05);
  }

</style>
