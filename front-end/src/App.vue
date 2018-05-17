<template>

  <div class="app-wrap">

    <login />

    <div class="main-app">

      <nav-bar />

      <dash-bar />

      <!-- <loader /> -->

    </div>

  </div>

</template>

<script>

  import login from './components/login/login'
  import navBar from './components/nav/nav-bar'
  import dashBar from './components/dashboard/dash-bar'

  export default {

    name: 'App',

    components: {
      login,
      navBar,
      dashBar
    },

    // Initial API requests
    beforeCreate() {
      this.$store.dispatch('GET_PROJECTS')
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

    width: 100%;
    height: 100vh;

    position: relative;
    margin: auto;

    overflow: hidden;

    background-color: #FFFFFA;
  }

  .main-app {

    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: 100vh;
  }

  .nav-space {

    width: 100%;
    height: 80px;

    position: relative;
  }

</style>
