<template>

  <div class="nav-bar">

    <p class="nav-title"><span>V</span>-MAN</p>

  </div>

</template>

<script>

  export default {
    name: 'navBar'
  }

</script>

<style scoped>

  /*
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  .nav-bar {

    width: 100%;
    height: 80px;

    position: absolute;
    top: 0px;
    left: 0px;

    z-index: 15;
  }

  .nav-title {

    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    color: white;

    padding: 26px 40px;
  }

  .nav-title span {

    font-weight: bold;
    color: #B50000;
  }

</style>
