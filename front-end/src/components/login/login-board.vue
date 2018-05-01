<template>

  <div class="login-board-wrap">

    <div class="login-board">

      <p class="login-board-title">V-MAN | <span>project assistant</span></p>
      <p class="login-board-message">Welcome {{ name }}, we are setting things up for you</p>

    </div>

  </div>

</template>

<script>

  export default {
    name: "login-board",

    computed: {
      validation: {
        get() { return this.$store.state.login.validation }
      },
      name: {
        get() { return this.$store.state.user.name }
      }
    },

    watch: {
      validation() {
        if ( this.validation === 'success' )
          {
            $('.login-board-message').addClass('login-board-message-in')
          }
      }
    }
  }

</script>

<style scoped>

  /* Google Fonts
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  .login-board-wrap {

    position: relative;

    background-color: #E74040;

    transition: all 0.3s ease;
  }

  .login-board {

    width: 100%;
    height: auto;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate( -50%, -50% );
  }

  .login-board-title {

    font-family: 'Rubik', sans-serif;
    font-size: 40px;
    font-weight: normal;
    color: white;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: 100%;

    padding: 20px;
  }

  .login-board-title span {

    font-size: 20px;
    color: #B50000;
  }

  .login-board-message {

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: lighter;
    color: rgba(255,255,255,0.8);
    text-align: center;
    white-space: nowrap;

    width: auto;

    position: absolute;
    top: 80px;
    left: 50%;

    transform: translateX( -50% ) rotateX(-90deg);
    transition: all 0.3s ease;

    display: inline-block;

    padding: 20px;
    opacity: 0;
  }

  .login-board-message-in {

    transform: translateX(-50%) rotateX(0deg);
    opacity: 1;
  }

</style>
