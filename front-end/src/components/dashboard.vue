<template>
	
	<div class="dashboard">
		
		DASHBOARD

		<p @click="logout">logout</p>

	</div>

</template>

<script>
	
	export default {

		name: 'dashboard',

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
	}

	p {
		display: inline;
	}

</style>