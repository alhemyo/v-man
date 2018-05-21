<template>

  <div id="app">

    <nav-bar />

    <login />

    <div v-if="!login" class="app-wrap">

      <dashboard />

    </div>

  </div>

</template>

<script>

  // Import components
  import navBar from './components/nav/nav-bar'
  import login from './components/login/login'
  import dashboard from './components/dash/dashboard'

  export default {

    name: 'App',

    components: {
      navBar,
      login,
      dashboard
    },

    computed: {
      login: { get() { return this.$store.state.components.login } }
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

  .app-wrap {

    display: grid;
    grid-template-columns: 338px auto;
    grid-template-rows: 100vh;

    background-color: whitesmoke;
  }

</style>
