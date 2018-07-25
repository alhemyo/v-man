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

		transform: translateX( 10px );
		opacity: 0;
	}

    .routes-leave-to {

        transform: translateX( -10px );
        opacity: 0;
    }

	/* -------------------- Form CSS -------------------- */

    .form-scroll-wrap {

        width: calc(100% + 17px);
        height: 100%;

        overflow-y: scroll;
    }

    .form {

        width: 100%;
        max-width: 700px;
        height: auto;

        position: relative;
        margin: auto;
        margin-top: 40px;

        padding: 40px 20px;

        display: grid;
        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: auto;
        grid-column-gap: 20px;
        grid-row-gap: 40px;
    }

    .form-1 {

        grid-column: 1/2;
    }

    .form-2 {

        grid-column: 2/3;
    }

    .form-3 {

        grid-column: 3/4;
    }

    .form-4 {

        grid-column: 4/5;
    }

    .form-half-1 {

        grid-column: 1/3;
    }

    .form-half-2 {

        grid-column: 3/5;
    }

    .form-third-1 {

        grid-column: 1/4;
    }

    .form-sub-title {

        font-size: 12px;
        color: var(--dark);

        align-self: center;
    }

    /* -------------------- form-input CSS -------------------- */

    .form-input {

        font-size: 12px;
        color: var(--dark);

        width: 100%;
        height: 40px;

        padding: 0px 20px;

        border: none;
        border: 1px solid var(--darkGray);
        border-radius: 30px;
    }

    .form-input::placeholder {

        color: var(--darkGray);
    }

    .form-input::-moz-placeholder {

        color: var(--darkGray);
    }

    /* -------------------- form-date CSS -------------------- */

    .form-date {

        width: 150px;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 1fr 1fr 1.5fr;

        border: 1px solid var(--darkGray);
        border-radius: 5px;
    }

    .form-date > input {

        font-size: 12px;
        text-align: center;
        color: var(--dark);

        width: 100%;

        padding: 0px 12px;

        background-color: transparent;
        border: none;
    }

    .form-date > input:nth-child(3) {

        border-left: 1px solid var(--darkGray);
        border-right: 1px solid var(--darkGray);
    }

    .form-date-name {

        font-size: 12px;
        color: var(--darkGray);

        position: absolute;
        top: -20px;
        left: 20px;
    }

    /* -------------------- form-button CSS -------------------- */

    .form-button {

        font-size: 12px;
        text-align: center;
        color: var(--white);

        width: 150px;
        height: 40px;

        padding: 12px 0px;

        background-color: var(--dark);
        border-radius: 30px;

		cursor: pointer;
    }

    /* -------------------- form-validation CSS -------------------- */

    .error {

        border: 1px solid var(--red);
    }

    .success {

        border: 1px solid var(--green);
    }

</style>
