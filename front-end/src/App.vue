<template>

  <div id="app">

    <transition mode="out-in" name="fade">

      <router-view />

    </transition>

  </div>

</template>

<style>

  .fade-enter-active, .fade-leave-active {

    transition: 0.5s ease;
  }

  .fade-enter, .fade-leave-to {

    opacity: 0;
  }

  html,body {

    width: 100%;

    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  #app {

    /* FONTS */
    --decorative: 'Quicksand', sans-serif;
    --default: 'Roboto', sans-serif;

    /* COLORS */
    --black: #333541;
    --dark: #383A47;
    --white: #F9F8F8;
    --red: #FF312E;
		--green: #8BC34A;
		--yellow: #FFC107;

    /* APP CSS */
    font-family: var(--decorative);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    height: 100vh;

    padding: 4px;

    background-color: var(--black);

    overflow: hidden;
  }

</style>
