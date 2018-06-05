<template>

  <div id="app">
  	
  	<nav-bar />

  	<login />

  	<div class="app-loader">

  		<dashboard />

  		<div class="loader">
  			
  			<current-project />
  			<user-config />

  		</div>

  	</div>

  </div>

</template>

<script>

	import login from './components/login'
	import navBar from './components/nav-bar'
	import dashboard from './components/dashboard'
	import currentProject from './components/current-project'
	import userConfig from './components/user-config'

  export default {

    name: 'App',

    components: {
    	login,
    	navBar,
    	dashboard,
    	currentProject,
    	userConfig
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

.loader {

	width: 100%;
	height: 100vh;
}

.comp-in-enter-active {

		transition: all .5s ease .6s;
}

.comp-in-leave-active {

		transition: all .5s ease;
}

.comp-in-enter, .comp-in-leave-to {

		transform: translateX(50px);
		opacity: 0;
}

 

</style>
