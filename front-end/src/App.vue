<template>

  <div id="app">
  	
  	<nav-bar />

  	<div class="app-loader">

  		<dashboard />

  	</div>

  </div>

</template>

<script>

	import navBar from './components/nav-bar'
	import dashboard from './components/dashboard'

  export default {

    name: 'App',

    components: {
    	navBar,
    	dashboard
    }

  }

</script>

<style>

:root {
	--mainFont: 'Roboto', sans-serif;
	--jet: #3A383F;
	--red: #FF312E;
	--dashGray: #F6F6F6;
}

* {
	font-family: var(--mainFont);
	font-weight: 400;
	color: var(--jet);
}

#app {

	width: 100%;
	height: 100vh;

	position: relative;
}

.app-loader {

	width: 100%;
	height: 100vh;

	position: relative;

	display: grid;
	grid-template-columns: 264px auto;
	grid-template-rows: 100vh;
}

</style>
