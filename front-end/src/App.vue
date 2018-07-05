<template>

  <div id="app" @click="close">

    <router-view />

  </div>

</template>

<script>

	export default {
	
		name: 'app',

		methods: {

			close(event) {

				if ( !$(event.target).hasClass('nav-bar-settings') )

				{
					this.$store.commit( 'updateSettings', false )
				}

			}
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

		overflow: hidden;
	}

</style>
