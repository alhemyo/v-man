<template>
	
	<div class="dashboard">
		
		<nav-bar />
		<side-bar />

		<div class="dash-loader">

			<router-view></router-view>

		</div> <!-- end .dash-loader -->

		<settings />

	</div>

</template>

<script>

	import navBar from './nav/nav-bar'
	import sideBar from './nav/side-bar'
	import settings from './nav/settings'
	
	export default {

		name: 'dashboard',

		components: {

			navBar,
			sideBar,
			settings

		},

		mounted() {
			this.$store.dispatch('GET_USER')
		}

	}

</script>

<style scoped>

	.dashboard {

		width: 100%;
		height: 100vh;

		position: relative;
		
		margin: 0px;

		display: grid;
		grid-template-columns: 300px auto;
		grid-template-rows: 80px auto;
	}

	p {
		
		font-size: 12px;
		color: white;

		position: absolute;
		right: 20px;
		top: 100px;

		padding: 10px;
		background-color: var(--green);
		border-radius: 5px;

		cursor: pointer;
	}

	.dash-loader {

		width: 100%;
		height: 100%;

		position: relative;

		margin: 0px;

		background-color: var(--white);

		overflow: hidden;
	}

</style>