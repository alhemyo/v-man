<template>

  <div id="app">
  	
  	<nav-bar />

  	<login />

  	<div class="app-loader">

  		<dashboard />

  		<current-project />

  	</div>

  </div>

</template>

<script>

	import login from './components/login'
	import navBar from './components/nav-bar'
	import dashboard from './components/dashboard'
	import currentProject from './components/current-project'

  export default {

    name: 'App',

    components: {
    	login,
    	navBar,
    	dashboard,
    	currentProject
    }

  }

</script>

<style>

:root {
	--mainFont: 'Roboto', sans-serif;
	--jet: #3A383F;
	--red: #FF312E;
	--green: #8BC34A;
	--yellow: #FFC107;
	--dashGray: #F6F6F6;
	--defaultGray: #AAA9AC;
}

* {
	font-family: var(--mainFont);
	font-weight: 400;
	color: var(--jet);
	user-select: none;
}

#app {

	width: 100%;
	height: 100vh;

	position: relative;

	background-color: var(--dashGray);
}

.app-loader {

	width: 100%;
	height: 100vh;

	position: relative;

	display: grid;
	grid-template-columns: 264px auto;
	grid-template-rows: 100vh;

	overflow: hidden;
}

</style>
