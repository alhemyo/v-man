<template>
	
	<div class="dashboard">
		
		<nav-bar />
		<side-bar />

		<div class="dash-loader">

			<router-view></router-view>

		</div>

		<p @click="logout">logout</p>

	</div>

</template>

<script>

	import navBar from './nav/nav-bar'
	import sideBar from './nav/side-bar'
	
	export default {

		name: 'dashboard',

		components: {

			navBar,
			sideBar

		},

		methods: {

			logout() {
				this.$store.dispatch('LOGOUT')
				.then(response => {
					this.$router.push({ name: 'login' })
				})
				.catch(error => {
					console.log(error)
				})
			}
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

		overflow: hidden;
	}

</style>