<template>

  <div class="app-wrap">

    <nav-bar />

    <div class="dashboard-loader">

      <dashboard />
      <current-project />

    </div>

  </div>

</template>

<script>

  import navBar from './components/nav/nav-bar'
  import dashboard from './components/dashboard/dashboard'
  import currentProject from './components/dashboard/currentProject'

  export default {

    name: 'App',

    components: {
      navBar,
      dashboard,
      currentProject
    }

  }

</script>

<style>

  * {
    font-family: 'Bahnschrift';
    user-select: none;
    -moz-user-select: none;
  }

  .app-wrap {

    position: relative;
    margin: auto;

    overflow: hidden;

    background-color: #FFFFFA;
  }

  .nav-space {

    width: 100%;
    height: 80px;

    position: relative;
  }

  .dashboard-loader {

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: auto;
  }

</style>
