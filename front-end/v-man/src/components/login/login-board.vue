
<template>

  <div class="login-board">

    <h1>V-MAN | <span>project assistant</span></h1>
    <p class="welcome-message">Welcome {{ username }}, have a coffee, we are setting things for you</p>

  </div>

</template>

<script>

export default {

  data() {
    return {
      name: 'login-board'
    }
  },
  computed: {
    validation() {
      return this.$store.state.validation
    },
    username() {
      return this.$store.state.username
    }
  },
  watch: {
    validation() {
      if ( this.validation === "success" )
        {
          $('.welcome-message').addClass('welcome-in')
          $('h1').addClass('heading-out')
        }
    }
  }

}


</script>

<style scoped>

  /*
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
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
    transition: all 0.5s ease;
  }

  .heading-out {

    top: 40%;

    opacity: 0;
  }

  h1 span {

    font-size: 24px;
    font-weight: 300;
    color: #B50000;
  }

  .welcome-message {
    font-family: 'Roboto', sans-serif;
    color: white;
    text-align: center;
    position: absolute;
    top: 60%;
    left: 50%;

    transform: translate( -50%, -50%);
    transition: all 0.5s ease;

    opacity: 0;
  }

  .welcome-in {
    opacity: 1;
    top: 50%;
  }

</style>
