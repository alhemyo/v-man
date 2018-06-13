<template>

  <div id="app">

    <login />

  </div>

</template>

<script>

	import login from './components/auth/login'
	
	export default {

		name: 'app',

		components: {

			login

		}

	}

</script>

<style>

	* {

		--mainFont: 'Roboto', sans-serif;
		--white: #F9F8F8;
		--black: #3A383F;
		--dark: #5B5961;
		--gray: #DBDBDB;
		--darkRed: #E3170A;
		--red: #FF312E;
		--green: #8BC34A;
	}

  #app {

    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

</style>
