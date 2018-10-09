<template>

  <div id="app">

    <transition name="route" mode="out-in" appear >

      <router-view/>

    </transition>

  </div>

</template>

<style>

  /* GLOBAL VARIABLES */

  * {

    /* font variables */

    --main: 'Quicksand', sans-serif;

    /* color variables */

    --lightgray: #F6F6F6;
    --midgray: #DEDEDE;
    --darkgray: #9A9A9A;
    --black: #383A47;
    --red: #EC2E2E;
    --yellow: #FFC107;
    --green: #8BC34A;

  }

  /* BUTTONS */

  .button-v {

    width: 60px;
    height: 60px;

    display: grid;
    grid-template-rows: 40px 20px;
    align-items: center;

    cursor: pointer;

  }

  .button-v i {

    font-size: 24px;

    transition: 0.2s ease;
  }

  .button-v p {

    font-size: 12px;
    font-weight: 500;
    text-align: center;
    color: var(--darkgray);

    transition: 0.2s ease;

    transform: translateY(10px);

    opacity: 0;
  }

  .button-v:hover i {

    color: var(--darkgray);
  }

  .button-v:hover p {

    transform: translateY(0px);

    opacity: 1;
  }

  /* VIEW TRANSITION CLASSES */

  .route-enter-active, .route-leave-active {

    transition: 0.3s ease;
  }

  .route-enter, .route-leave-to {

    opacity: 0;
  }

  /* APP CSS */

  #app {
    
    font-family: var(--main);
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  i {

    text-align: center;
    color: var(--midgray);

    cursor: pointer;
  }

</style>
