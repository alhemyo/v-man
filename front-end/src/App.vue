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

    font-size: 20px;

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

  /* FORM */

  .form {

      width: 350px;
      height: 100vh;

      position: absolute;
      top: 0px;
      right: -350px;
      z-index: 5;

      display: grid;
      grid-template-rows: 60px auto 60px;

      transition: right 0.3s ease;

      background-color: white;
      
      overflow: hidden;
  }

  .open {

      right: 0px;

      box-shadow: 0px 0px 20px var(--darkgray);
  }

  .form-header {

      font-size: 14px;
      font-weight: 500;
      color: var(--black);
      user-select: none;

      width: 100%;
      height: 60px;

      padding: 20px;

      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
  }

  .form-body {

      width: calc( 100% + 17px );
      height: auto;
      max-height: calc( 100vh - 120px );

      padding: 20px;

      align-self: center;

      display: grid;
      grid-template-columns: 150px 150px;
      grid-auto-rows: max-content;
      grid-gap: 10px;

      overflow-y: auto;
  }

  .form-footer {

      position: relative;
  }

  /* FORM BUTTON */

  .form-button {

      width: 40px;
      height: 40px;

      position: absolute;
      right: 290px;
      top: 10px;

      transition: 0.3s ease;

      display: grid;
      align-items: center;

      border-radius: 60px;

      cursor: pointer;
  }

  .form-button:hover {

      background-color: var(--lightgray);

  }

  .valid {

      right: 20px;
  }

  .form-button i {

      font-size: 20px;
  }

  .not-valid-icon {

      color: var(--red);
  }

  .valid-icon {

      color: var(--green);
  }

  /* FORM MESSAGE */

  .form-message {

      font-size: 12px;
      font-weight: 500;
      color: var(--darkgray);
      text-align: center;

      width: 230px;

      position: relative;
      margin: auto;

      padding: 24px 0px;
  }

  /* FORM INPUT */

  .form-input {

      width: 100%;
      min-height: 40px;
      height: auto;

      display: grid;
      grid-template-columns: auto 40px;
      align-items: center;

      background-color: var(--lightgray);
      border-radius: 3px;
  }

  .form-1-1 {

    grid-column: 1/2;
  }

  .form-1-2 {

    grid-column: 2/3;
  }

  .form-full {

    grid-column: 1/3;
  }

  .form-input input {

    font-family: var(--main);
    font-size: 12px;
    font-weight: 500;
    color: var(--darkgray);

    width: 100%;
    height: 40px;

    padding: 0px 10px;
    padding-right: 0px;

    background-color: transparent;
    border: none;
  }

  .form-input textarea {

    font-family: var(--main);
    font-size: 12px;
    font-weight: 500;
    color: var(--darkgray);
    resize: none;

    width: 100%;
    min-height: 150px;
    max-height: 150px;

    padding: 10px;

    grid-column: 1/3;

    background-color: transparent;
    border: none;
  }

  .form-input i {

      font-size: 12px;
      color: rgba(0,0,0,0.2);
  }

</style>
