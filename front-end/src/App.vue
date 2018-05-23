<template>

  <div id="app">

    <nav-bar />

    <login />

    <div v-if="!login" class="app-wrap">

      <dashboard />

      <current-project />

    </div>

  </div>

</template>

<script>

  // Import components
  import navBar from './components/nav/nav-bar'
  import login from './components/login/login'
  import dashboard from './components/dash/dashboard'
  import currentProject from './components/projects/current-project'

  export default {

    name: 'App',

    components: {
      navBar,
      login,
      dashboard,
      currentProject
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
    font-weight: 400;
    color: var(--dashText);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {

    --red: #FF312E;
    --black: #171A1E;
    --dash: #3C4046;
    --dashText: #969697;
    --green: #2FBF71;
  }

  #app {

    width: 100%;
    height: 100vh;

    position: relative;
    margin: none;
    padding: none;

    background-color: var(--dash);

    overflow: hidden;
  }

  .app-wrap {

    display: grid;
    grid-template-columns: 338px auto;
    grid-template-rows: 100vh;

    background-color: var(--dash);
  }

</style>
