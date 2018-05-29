<template>
	
	<div class="login">
		
		<img class="logo" src="/static/images/logo/vertigo_logo_white.png" />

		<div class="circles">
			
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>

		</div> <!-- end .circles -->

		<form class="login-form" name="login-form">
			
			<input
				class="login-input" 
				type="text" 
				name="username" 
				placeholder="username" 
				v-model="username">

			<input
				class="login-input"
				type="password"
				name="password"
				placeholder="password"
				v-model="password">

		</form>

	</div> <!-- end .login -->

</template>

<script>
	
	export default {

		name: 'login',

		computed: {
			username: {
				get() { return this.$store.state.user.username },
				set(value) { this.$store.commit('updateUsername', value) }
			},
			password: {
				get() { return this.$store.state.user.password },
				set(value) { this.$store.commit('updatePassword', value) }
			}
		}

	}

</script>

<style scoped>

	@keyframes pulse {
		0% {
			width: 0px;
			height: 0px;
			opacity: 0;
		}

		50% {
			opacity: 1;
		}

		100% {
			width: 150vh;
			height: 150vh;
			opacity: 0;
		}
	}
	
	.login {

		width: 100%;
		height: 100vh;

		position: absolute;
		top: 0px;
		left: 0px;

		z-index: 90;

		background-color: var(--jet);

		overflow: hidden;
	}

	.logo {

		height: 15vh;

		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;

		transform: translate(-50%,-50%);
	}

	.circles {

		width: auto;
		height: auto;

		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate(-50%,-50%);
	}

	.circle {

		position: absolute;
		top: 0px;
		left: 0px;

		border: 1px solid rgba(255,255,255,0.3);
		border-radius: 100%;

		transform: translate(-50%,-50%);

		animation: pulse 8s linear infinite;
	}

	.circle:nth-child(2) {

		animation-delay: 2s;
	}

	.circle:nth-child(3) {

		animation-delay: 4s;
	}

	.circle:nth-child(4) {

		animation-delay: 6s;
	}

	.circle:nth-child(5) {
		
		animation-delay: 8s;
	}

	.login-form {

		width: 270px;
		height: auto;

		position: absolute;
		top: 50%;
		left: 20px;

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 40px 40px;
		grid-row-gap: 20px;

		transform: translateY(-50%);
	}

	.login-input {

		color: var(--defaultGray);

		background-color: transparent;
		border: none;
		border-bottom: 4px solid white;

		padding: 20px;
	}
	
</style>