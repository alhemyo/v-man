<template>

  <div id="app">

    <transition mode="out-in" name="fade">

      <router-view />

    </transition>

  </div>

</template>

<style>

  html, body {

    overflow: hidden;
  }

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
    --mono-font: 'Roboto Mono', monospace;

    /* COLORS */
    --black: #333541;
    --dark: #383A47;
    --white: #F9F8F8;
    --red: #FF312E;
		--green: #8BC34A;
		--yellow: #FFC107;

    /* APP CSS */

    width: 100%;
    min-width: 1200px;

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

  .date {

    font-family: var(--mono-font);
    font-weight: 400;
    color: var(--dark);
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

  .form-1 {

    grid-column: 1/2;
  }

  .form-2 {

    grid-column: 2/3;
  }

  .form-3 {

    grid-column: 3/4;
  }

  .form-4 {

    grid-column: 4/5;
  }

  .form-half-1 {

    grid-column: 1/3;
  }

  .form-half-2 {

    grid-column: 3/5;
  }

  .form-third-1 {

    grid-column: 1/4;
  }

  .form-full {

    grid-column: 1/5;
  }

  .form-message {

    font-size: 12px;
    color: var(--red);
  }

  .form-button {

    user-select: none;

    width: 100%;
    height: 40px;

    display: grid;
    align-items: center;
    justify-content: center;

    transition: 0.2s ease;

    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;

    cursor: pointer;
  }

  .form-button:hover {

    background-color: var(--white);
  }

  /* BUTTON CSS */

  .button {

      color: var(--dark);

      width: auto;
      height: 40px;

      display: grid;
      grid-template-columns: min-content 40px;
      grid-column-gap: 10px;
      align-items: center;

      background-color: white;
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 30px;

      cursor: pointer;
  }

  .button p {

      font-size: 12px;
      white-space: nowrap;

      padding-left: 20px;
  }

  .button i {

      font-size: 20px;
      text-align: center;
  }

</style>
