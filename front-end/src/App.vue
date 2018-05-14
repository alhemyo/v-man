<template>

  <div class="app-wrap">

    <dashboard />

  </div>

</template>

<script>

  import dashboard from './components/dashboard/dashboard'

  export default {

    name: 'App',

    components: {
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
