<template>
	
	<div class="nav-bar">
		
		<p @click="logout" class="app-name">V<span>-MAN</span></p>

	</div>

</template>

<script>
	
	export default {

		name: 'nav-bar',

		computed: {
			login: { get() { return this.$store.state.components.login } }
		},

		methods: {
			logout() {
				this.$store.commit('updateLogin', true)
			}
		}

	}

</script>

<style scoped>
	
	.nav-bar {

		width: 100%;
		height: 60px;

		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 100;
	}

	.app-name {

		font-weight: 600;
		font-size: 16px;
		color: var(--red);
		user-select: none;

		position: relative;
		float: left;

		padding: 20px;
	}

	.app-name span {

		font-weight: 500;
		color: white;
	}

</style>