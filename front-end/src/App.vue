<template>

  <div id="app">

    <transition name="parent-route">

			<router-view/>

		</transition>

  </div>

</template>

<style>

  html, body {

		overflow: hidden;
		margin: 0px;
		padding: 0px;
	}

	* {

		--mainFont: 'Roboto', sans-serif;
		--white: #F9F8F8;
		--black: #3A383F;
		--dark: #5B5961;
		--gray: #DBDBDB;
		--darkRed: #E3170A;
		--red: #FF312E;
		--green: #8BC34A;
		--yellow: #FFC107;
	}

  #app {

    font-family: var(--mainFont);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

	.parent-route-enter-active, .parent-route-leave-active {

		transition: 0.5s ease;
	}

	.parent-route-enter, .parent-route-leave-to {

		opacity: 0;
	}

</style>
