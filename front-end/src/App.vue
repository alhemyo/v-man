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

  /* FORM CSS */

  .form-input {

      font-family: var(--default);
      font-size: 12px;
      font-weight: 500;
      color: var(--dark);

      width: 100%;
      height: 40px;

      padding: 0px 20px;

      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 3px;

  }

  .form-text-area {

      font-family: var(--default);
      font-size: 12px;
      font-weight: 500;
      color: var(--dark);

      width: 100%;
      height: 120px;

      resize: none;

      padding: 20px 20px;

      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 3px;
  }

  .form-half-1 {

    grid-column: 1/3;
  }

  .form-half-2 {

    grid-column: 3/5;
  }

  .form-full {

    grid-column: 1/5;
  }

</style>
