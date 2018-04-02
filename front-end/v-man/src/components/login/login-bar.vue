
<template>

  <div class="login-bar">
    {{ msg }}
  </div>

</template>

<script>

  export default {
    name: 'login-bar',
    data () {
      return {
        msg: 'Alloha'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .login-bar {

    width: 500px;
    height: 100vh;

    position: relative;
  }

</style>
