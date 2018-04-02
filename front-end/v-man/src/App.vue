
<template>

  <div id="app" class="app">

    <login-bar />
    <login-board />

  </div>

</template>

<script>

  import loginBar from './components/login/login-bar'
  import loginBoard from './components/login/login-board'

  export default {
    name: 'App',
    components: {
      loginBar,
      loginBoard
    }
  }

</script>

<style>

.app {

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 500px auto;
  grid-template-rows: 100vh;
}

</style>
