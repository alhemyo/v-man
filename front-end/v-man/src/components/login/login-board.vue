
<template>

  <div class="login-board">

    <div class="vertigo-wrap">

      <div class="vertigo-circle v-c-a"></div>
      <div class="vertigo-circle v-c-b"></div>
      <div class="vertigo-circle v-c-c"></div>

    </div>

    <h1>V-MAN | <span>project assistant</span></h1>
    <p class="welcome-message">{{ msg }}</p>

  </div>

</template>

<script>

export default {

  data() {
    return {
      name: 'login-board',
      msg: ""
    }
  },
  computed: {
    validation() {
      return this.$store.state.login.validation
    },
    username() {
      return this.$store.state.login.username
    },
    welcomeName() {
      // Return only first name from full name
      let w = this.username.split(" ")
      return w[0]
    },
    successMsg() {
      let messages =
        [
          "Welcome " + this.welcomeName + ", have a coffee, we are setting things for you",
          "Hello " + this.welcomeName + ", please wait till we set yer boat",
          "Aloha " + this.welcomeName + ", Have a coconut while we arange your stuff",
          "Wingapu " + this.welcomeName + ", wait for us to adjust the satelites"
        ]
      let randNum = Math.floor( Math.random() * ( messages.length - 0 ) ) + 0
      return messages[randNum]
    },
    errorMsg() {
      let messages =
        [
          "Are you shure your name is " + this.welcomeName + "?",
          "Hey " + this.welcomeName + ", We are calling ofca, you are in trouble!"
        ]
        let randNum = Math.floor( Math.random() * ( messages.length - 0 ) ) + 0
        return messages[randNum]
    }
  },
  watch: {
    validation() {
      if ( this.validation === "success" )
        {
          this.msg = this.successMsg
          $('.welcome-message').addClass('welcome-in')
          $('h1').addClass('heading-out')
        }
      else if ( this.validation === "error" )
        {
          this.msg = this.errorMsg
          $('.welcome-message').addClass('welcome-in')
          $('h1').addClass('heading-out')
        }
      else
        {
          $('.welcome-message').removeClass('welcome-in')
          $('h1').removeClass('heading-out')
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

  overflow: hidden;
}

.vertigo-wrap {

  width: 1200px;
  height: 1200px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate( -50%, -50% );
}

@keyframes pulse {
  0%   { transform: scale(0); opacity: 0.1 }
  50%  { transform: scale(0.5); opacity: 0.2 }
  100% { transform: scale(1); opacity: 0 }
}

.vertigo-circle {

  width: 100%;
  height: 100%;

  position: absolute;

  border: 2px solid white;
  border-radius: 100%;

  opacity: 0;

  animation: pulse 5s linear infinite;
}

.v-c-b {
  animation-delay: 2s;
}

.v-c-c {
  animation-delay: 3.5s;
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
