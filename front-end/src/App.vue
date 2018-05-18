<template>

  <div id="app">

    <login />

  </div>

</template>

<script>

  // Import components
  import login from './components/login/login'

  export default {

    name: 'App',

    components: {
      login
    }

  }

</script>

<style>

  * {
    font-family: 'Bahnschrift', sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: #131515;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {

    width: 100%;
    height: 100vh;

    position: relative;
    margin: none;
    padding: none;

    background-color: #FDFFFC;

    overflow: hidden;
  }

</style>
