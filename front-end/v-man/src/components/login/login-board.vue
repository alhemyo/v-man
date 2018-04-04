
<template>

  <div class="login-board">

    <h1>V-MAN | <span>project assistant</span></h1>

  </div>

</template>

<script>

export default {

  data() {
    return {
      name: 'login-board'
    }
  }
  
}


</script>

<style scoped>

  /*
  font-family: 'Rubik', sans-serif;
  */

  .login-board {

    background-color: #E74040;

    position: relative;
  }

  h1 {

    font-family: 'Rubik', sans-serif;
    font-size: 40px;
    font-weight: 400;
    color: white;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);
  }

  h1 span {

    font-size: 24px;
    font-weight: 300;
    color: #B50000;
  }

</style>
