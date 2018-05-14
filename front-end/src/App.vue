<template>

  <div class="app-wrap">

    <nav-bar />

    <dashboard />

  </div>

</template>

<script>

  import navBar from './components/nav/nav-bar'
  import dashboard from './components/dashboard/dashboard'

  export default {

    name: 'App',

    components: {
      navBar,
      dashboard
    }

  }

</script>

<style>

  * {
    font-family: 'Bahnschrift';
    user-select: none;
    -moz-user-select: none;
  }

  .nav-space {

    width: 100%;
    height: 80px;

    position: relative;
  }

</style>
