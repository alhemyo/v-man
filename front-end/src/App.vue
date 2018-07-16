<template>

  <div id="app" @click="closeMenu" >

    <transition name="parent-route">

			<router-view/>

		</transition>

  </div>

</template>

<script>

	export default {

		name: 'app',

		computed: {

			menubar: {
				get() { return this.$store.state.menubar },
				set(menubar) { this.$store.commit( 'updateMenubar', menubar ) }
			}
		},

		methods: {

			closeMenu(event) {

				if ( !$(event.target).parents('.menu-bar').length > 0 && !$(event.target).hasClass('menu-button') && this.menubar ) {

					this.$store.commit( 'updateMenubar', false )
				}
			}
		}

	}

</script>


<style>

  	html, body {

		overflow: hidden;
		margin: 0px;
		padding: 0px;
	}

	* {

		--mainFont: 'Roboto', sans-serif;
		--white: #F9F8F8;
		--black: #3A383F;
		--dark: #5B5961;
		--gray: #DBDBDB;
		--darkGray: #BABABA;
		--darkRed: #E3170A;
		--red: #FF312E;
		--green: #8BC34A;
		--yellow: #FFC107;
	}

	#app {

		font-family: var(--mainFont);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.parent-route-enter-active, .parent-route-leave-active {

		transition: 0.5s ease;
	}

	.parent-route-enter, .parent-route-leave-to {

		opacity: 0;
	}

	.routes-enter-active, .routes-leave-active {

        transition: 0.3s ease;
    }

	.routes-enter {

		transform: translateX( 20px );
		opacity: 0;
	}

    .routes-leave-to {

        transform: translateX( -20px );
        opacity: 0;
    }

</style>
