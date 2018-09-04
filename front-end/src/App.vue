<template>

  <div id="app">

    <transition mode="out-in" name="fade">

      <router-view />

    </transition>

  </div>

</template>

<style>

  .fade-enter-active, .fade-leave-active {

    transition: 0.3s ease;
  }

  .fade-enter, .fade-leave-to {

    opacity: 0;
  }

  .list-enter-active, .list-leave-active {

    transition: 0.3s ease;
  }

  .list-enter {

    transform: translateY(30px);

    opacity: 0;
  }

  .list-leave-to {

    transform: translateY(-30px);

    opacity: 0;
  }

  #app {

    /* Variables */

    /* FONTS */
    --main-font: 'Quicksand', sans-serif;
    --extra-font: 'Roboto', sans-serif;

    /* COLORS */
    --black: #333541;
    --dark: #383A47;
    --white: #F9F8F8;
    --red: #FF312E;
		--green: #8BC34A;
		--yellow: #FFC107;

    /* APP CSS */

    font-family: var(--main-font);
    font-size: 14px;
    font-weight: 500;
    color: var(--dark);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow: hidden;
  }

  .material-icons {

    user-select: none;
  }

</style>
