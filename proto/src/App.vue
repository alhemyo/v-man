<template>

  <div id="app">

    <transition mode="out-in" name="views" >
    
      <router-view />
    
    </transition>

  </div>

</template>

<style>

  /* ********** Vue Transitions CSS ********** */

  .views-enter-active, .views-leave-active {

    transition: 0.3s ease;
  }

  .views-enter, .views-leave-to {

    opacity: 0;
  }

  /* ********** Global Variables ********** */

  * {

    /* Fonts */
    --main: 'Quicksand', sans-serif;

    /* Colors */
    --background: #383A47;
    --content: #31323E;
    --menu: #24252E;
    --red: #EC2E2E;
    --yellow: #FFC107;
    --green: #8BC34A;
    --lightblue: #00F9C6;
    --blue: #008CF8;

    --defaultText: #6F738D;
    --activeText: #DEDEDE;
    --icon: #515467;
  }

  /* ********** Scroll Bar CSS ********** */

  ::-webkit-scrollbar {

    width: 2px;
  }

  ::-webkit-scrollbar-track {

    background-color: rgba( 0, 0, 0, 0.05 ); 
  }

  ::-webkit-scrollbar-thumb {

    background-color: rgba( 0, 0, 0, 0.1 );
  }

  /* ********** App CSS ********** */

  #app {

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    height: 100vh;

    padding: 4px;

    background-color: var(--background);
  }

</style>
