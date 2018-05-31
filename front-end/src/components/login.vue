<template>
	
	<transition name="login">
		
		<div v-show="login" class="login">
		
			<img :class="{ fade : !login }" class="logo" src="/static/images/logo/vertigo_logo_white.png" />

			<div :class="{ fade : !login }" class="circles">
				
				<div class="circle" :class="{ error : error, success : validation }"></div>
				<div class="circle" :class="{ error : error, success : validation }"></div>
				<div class="circle" :class="{ error : error, success : validation }"></div>
				<div class="circle" :class="{ error : error, success : validation }"></div>
				<div class="circle" :class="{ error : error, success : validation }"></div>

			</div> <!-- end .circles -->

			<form :class="{ 'login-form-slide' : !login }" class="login-form" name="login-form">
				
				<input
					@keypress="active = true" 
					@keyup="validate"
					class="login-input username" 
					type="text" 
					name="username" 
					placeholder="username" 
					v-model="username">

				<input
					@keypress="active = true" 
					@keyup="validate"
					class="login-input password"
					type="password"
					name="password"
					placeholder="password"
					v-model="password">

				<p class="password-link">forgot my password</p>

	      <div class="loader">

	        <div class="loader-item" :class="{ load : active }"></div>
	        <div class="loader-item" :class="{ load : active }"></div>
	        <div class="loader-item" :class="{ load : active }"></div>

	      </div>

			</form>

		</div> <!-- end .login -->

	</transition>

</template>

<script>

	import _ from 'lodash'
	
	export default {

		name: 'login',

		data() {
      return {
        active: false
      }
    },

		computed: {

			// get user
			username: {
				get() { return this.$store.state.user.username },
				set(value) { this.$store.commit('updateUsername', value) }
			},
			password: {
				get() { return this.$store.state.user.password },
				set(value) { this.$store.commit('updatePassword', value) }
			},
			validation: { get() { return this.$store.state.user.validation } },
      error: { get() { return this.$store.state.user.error } },

      // get components
      login: { get() { return this.$store.state.components.login } }
		},

		methods: {
      validate: _.debounce(function() {

        this.active = false

        if( this.username.match( this.$store.state.regex.login ) )
          {
            this.username = ""
            $('.username').prop( 'placeholder', 'What are you writing?' )

            setTimeout(()=>{
              $('.username').focus().prop( 'placeholder', 'username' )
            },2000)
          }

        else if ( this.password.match( this.$store.state.regex.login ) )
          {
            this.password = ""
            $('.password').prop( 'placeholder', 'Aha! A hacker!' )

            setTimeout(()=>{
              $('.password').focus().prop( 'placeholder', 'password' )
            },2000)
          }

        else if ( this.username === "" )
          {
            $('.username').focus()
          }

        else if ( this.password === "" )
          {
            $('.password').focus()
          }

        else
          {
            this.$store.dispatch('LOGIN_API')
          }

      },1000)
    },

    mounted() {
      $('.username').focus()
    }

	}

</script>

<style scoped>

	@keyframes login {

		0% {
			width: 100%;
		}

		50% {
			width: 264px;
			opacity: 1;
		}

		100% {
			width: 264px;
			opacity: 0;
		}
	}

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

	@keyframes load {

    0% {
      transform: translateY( 0px );
    }

    50% {
      transform: translateY( -10px );
    }

    100% {
      transform: translateY( 0px );
    }
  }

  .login-enter-active {

  	animation: login 1s linear reverse;
  }

  .login-leave-active {

  	animation: login 1s linear;
  }

  .fade {

  	opacity: 0;
  }
	
	.login {

		width: 100%;
		height: 100vh;

		position: absolute;
		top: 0px;
		left: 0px;

		z-index: 90;

		background-color: var(--jet);
		border-left: 4px solid black;

		overflow: hidden;
	}

	.logo {

		height: 15vh;

		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;

		transition: all .5s ease;
		transform: translate(-50%,-50%);
	}

	.circles {

		width: auto;
		height: auto;

		position: absolute;
		top: 50%;
		left: 50%;

		transition: all 0.5s ease;
		transform: translate(-50%,-50%);
	}

	.circle {

		position: absolute;
		top: 0px;
		left: 0px;

		border: 1px solid rgba(255,255,255,0.3);
		border-radius: 100%;

		transform: translate(-50%,-50%);

		transition: all .5s ease;
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
		grid-template-rows: 40px 40px 20px;
		grid-row-gap: 20px;

		transition: all 0.5s ease;
		transform: translateY(-50%);
	}

	.login-form-slide {

		left: -300px;
		opacity: 0;
	}

	.login-input {

		color: var(--defaultGray);

		background-color: transparent;
		border: none;
		border-bottom: 4px solid white;

		padding: 20px;
	}

	.login-input::placeholder {

		color: rgba(255,255,255,0.2);
	}

	.password-link {

    font-size: 11px;
    font-weight: 400;
    color: rgba(255,255,255,0.2);

    position: absolute;
    bottom: -5px;
    left: 20px;

    cursor: pointer;
  }

  .password-link:hover {

    color: gray;
  }

  .loader {

    width: 40px;
    height: 40px;

    position: absolute;
    bottom: -20px;
    right: 20px;

    display: grid;
    grid-template-columns: 6px 6px 6px;
    grid-template-rows: 6px;
    justify-content: space-between;
    align-content: center;
  }

  .loader-item {

    background-color: white;
    border-radius: 12px;

    transition: all .3s ease;
  }

  .loader-item:nth-child(2) {

    animation-delay: 0.1s;
  }

  .loader-item:nth-child(3) {

    animation-delay: 0.3s;
  }

  .load {

    animation: load 0.6s linear infinite;
  }

  .error {

  	border: 2px solid var(--red);
  }

  .success {

  	border: 2px solid var(--green);
  }
	
</style>