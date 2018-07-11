<template>

    <div id="login" class="login-wrap">

		<transition name="left-pane">

			<div class="login-pane login-left-pane">
			
				<div class="left-pane">
					
					<form class="login-form">
						
						<h1><span>V</span>-MAN | <span>project assistant</span></h1>

						<div class="input-wrap">

							<input 
							class="login-input username" 
							type="text" 
							placeholder="username"
							@keypress="load"
							@keyup="validate"
							v-model="username" />

							<p class="input-static">@vertigo.com.mk</p>

						</div> <!-- end .input-wrap -->

						<input 
							class="login-input password" 
							type="password" 
							placeholder="password"
							@keypress="load"
							@keyup="validate"
							v-model="password" />

						<div class="login-form-footer">
							
							<p>I forgot my password</p>

							<div class="login-loader">
								
								<div class="loader-item" :class="{ load : loader }" ></div>
								<div class="loader-item" :class="{ load : loader }" ></div>
								<div class="loader-item" :class="{ load : loader }" ></div>

							</div> <!-- end .login-loader -->

						</div> <!-- end .login-form-footer -->

					</form> <!-- end .login-form -->

				</div> <!-- end .left-pane -->

			</div> <!-- end .login-pane login-left-pane -->

		</transition>

		<transition name="right-pane">

			<div class="login-pane login-right-pane">
				
				<div class="right-pane">
					
					<img class="logo" src="/images/assets/logo/logo.png" />

					<div class="circles">
						
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>
						<div class="circle"></div>

					</div> <!-- end .circles -->

				</div> <!-- end .right-pane -->

			</div> <!-- end .login-pane login-right-pane -->

		</transition>

	</div> <!-- end .login-wrap -->
    
</template>

<script>

	import _ from 'lodash'

    export default {
    
		name: 'login',

		data() {
			return {
				loader: false
			}
		},
		
		computed: {

			// Login user credentials
			username: {
				get() { return this.$store.state.auth.username },
				set(value) { this.$store.commit( 'updateAuthUsername', value ) }
			},
			password: {
				get() { return this.$store.state.auth.password },
				set(value) { this.$store.commit( 'updateAuthPassword', value ) }
			}

		},

		methods: {

			load() { this.loader = true },

			validate: _.debounce(function() {

				this.loader = false

				if ( this.username.match(this.$store.state.regex.login) )
				
				{
					this.username = ""
					$('.username, .input-static').prop('placeholder', 'Invalid username').addClass('error')
					setInterval(() => { $('.username, .input-static').prop('placeholder', 'username').removeClass('error') },2000)
				}

				else if ( this.username != "" && this.password != "" ) 

				{
					this.$store.dispatch( 'AUTHENTICATE_USER' )
						
						.then(() => {

							this.$store.dispatch('GET_USER')
							this.$router.push({ name: 'dashboard' })

						})
						
						.catch( error => {

							console.log(error)

						})
				}

			},1000)
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

			opacity: 0.5;
		}

		100% {

			width: 100vh;
			height: 100vh;

			opacity: 0;
		}

	}

	@keyframes load {
		0% {
			transform: translateY( 0px );
		}

		50% {
			transform: translateY( -7px );
		}

		100% {
			transform: translateY( 0px );
		}
	}

	.login-wrap {

		width: 100%;
		height: 100vh;

		position: absolute;
		z-index: 1;

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 100vh;
	}

	.login-pane {

		position: relative;

		overflow: hidden;
	}

	.login-left-pane {

		background-color: var(--white);
	}

	.login-right-pane {

		background-color: var(--darkRed);
	}

	.left-pane {

		width: 100%;
		height: 100%;
		max-width: 600px;
		max-height: 1040px;

		position: absolute;
		top: 50%;
		right: 0px;

		transform: translateY( -50% );
	}

	.right-pane {

		width: 100%;
		height: 100%;
		max-width: 600px;
		max-height: 1040px;

		position: absolute;
		top: 50%;
		left: 0px;

		transform: translateY( -50% );
	}

	.login-form {

		width: 100%;
		max-width: 300px;
		height: auto;

		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate( -50%, -50% );

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(auto);
		grid-row-gap: 30px;
	}

	h1 {

		font-size: 32px;
		color: var(--black);
		text-align: center;
	}

	h1 span {

		color: var(--red);
	}

	h1 span:nth-child(2) {

		font-size: 18px;
		font-weight: 400;
		color: var(--black);
		white-space: nowrap;
	}

	.input-wrap {

		display: grid;
		grid-template-columns: auto min-content;

		align-items: center;

	}

	.input-static {

		font-size: 14px;
		color: var(--dark);
		user-select: none;

		padding: 13px 20px;
		padding-left: 0px;

		background-color: rgba(0,0,0,0.05);
		border-radius: 0px 30px 30px 0px;

		transition: all .2s ease;
	}

	.login-input {

		font-family: var(--mainFont);
		font-size: 14px;
		font-weight: 400;
		color: var(--dark);
		text-align: right;

		width: 100%;
		height: 40px;

		display: block;

		padding: 0px 20px;

		background-color: rgba(0,0,0,0.05);
		border: none;
		border-radius: 30px;

		transition: all .2s ease;
	}

	.username {

		padding-right: 0px;

		border-radius: 30px 0px 0px 30px;
	}

	.login-input::placeholder {

		color: rgba(0,0,0,0.3);
		opacity: 1;
	}

	.error {

		color: var(--white);
		background-color: var(--red);
	}

	.success {

		color: var(--white);
		background-color: var(--green);
	}

	.error::placeholder, .success::placeholder {

		color: var(--white);
		opacity: 1;
	}

	.login-form-footer {

		font-size: 12px;
		color: var(--gray);

		width: 100%;
		height: 40px;

		padding: 0px 20px;

		display: grid;
		grid-template-columns: 1fr min-content;
		align-items: center;
	}

	.login-loader {

		width: 40px;
		height: 40px;

		position: relative;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
		align-items: center;
	}

	.loader-item {

		width: 6px;
		height: 6px;

		background-color: var(--dark);
		border-radius: 10px;
	}

	.load {

		animation: load 1s linear infinite;
	}

	.loader-item:nth-child(2) {

		animation-delay: 0.33s;
	}

	.loader-item:nth-child(3) {

		animation-delay: 0.66s;
	}

	.logo {

		width: 130px;
		height: 130px;

		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate( -50%, -50% );

		opacity: 0.5;
	}

	.circles {

		width: 0px;
		height: 0px;

		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate( -50%,-50% );
	}

	.circle {

		width: 0px;
		height: 0px;

		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate( -50%,-50% );

		border: 1px solid white;
		border-radius: 100%;

		opacity: 0;

		animation: pulse 10s linear infinite;
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
	
</style>


