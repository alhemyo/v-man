<template>

  <div id="app">

		<transition mode="out-in" name="test">
			<router-view />
		</transition>

  </div>

</template>

<script>
	
	export default {

		name: 'app',
		
		mounted() {
			this.$store.dispatch('GET_USER')
		}

	}

</script>

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

		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

	}

	.test-enter-active, .test-leave-active {

		transition: all 0.5s ease;
	}

	.test-enter, .test-leave-to {
		opacity: 0;
	}

	.test-leave-to {

		opacity: 0;
	}

</style>
