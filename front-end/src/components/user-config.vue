<template>
	
	<transition name="comp-in">
		
		<div v-show="userConfig" class="user-config"></div>

	</transition>

</template>

<script>
	
	export default {

		name: 'user-config',

		computed: {

			// GET user config
			userConfig: { get() { return this.$store.state.components.userConfig } }
		}

	}

</script>

<style scoped>
	
	.user-config {

		width: 100%;
		height: 100vh;
	}

</style>