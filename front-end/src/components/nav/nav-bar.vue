
<template>

  <div class="nav-bar">

    <p class="nav-bar-title">V<span>-MAN</span></p>

  </div>

</template>

<script>

  export default {
    name: 'nav-bar'
  }

</script>

<style>

  .nav-bar {

    width: 100%;
    height: 80px;

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 9;
  }

  .nav-bar-title {

    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: white;
    user-select: none;
    -moz-user-select: none;

    position: relative;
    float: left;

    padding: 28px 40px;
  }

  .nav-bar-title span {

    font-weight: normal;
    color: #B50000;
  }

</style>
