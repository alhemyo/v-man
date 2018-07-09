<template>

  <div id="app" @click="close">

    <router-view />

  </div>

</template>

<script>

	export default {
	
        name: 'app',
        
        computed: {
            
            settings: { get() { return this.$store.state.settings } }
        },

		methods: {

			close(event) {

				if ( !$(event.target).hasClass('nav-bar-settings') && this.settings )

				{
					this.$store.commit( 'updateSettings', false )
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
		--darkRed: #E3170A;
		--red: #FF312E;
		--green: #8BC34A;
		--yellow: #FFC107;
	}

	#app {

		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		overflow: hidden;
	}

	/* ---- ROUTER VIEW TRANSITIONS ---- */

	.swipe-enter-active, .swipe-leave-active { transition: 0.2s ease; }

	.swipe-leave-to { transform: translateX( 50px ); opacity: 0; }

	.swipe-enter { transform: translateX( -50px ); opacity: 0; }

	/* ---- FORM CSS ---- */

	hr {

        grid-column: 1/5;

        opacity: 0.3;
    }

    .settings-form {

        width: 660px;
        height: auto;

        position: relative;
        margin: auto;

        display: grid;
        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: 60px;
        grid-column-gap: 20px;
        grid-row-gap: 30px;
        align-items: center;
        align-content: center;
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

    .form-full {

        grid-column: 1/5;
    }

    .form-subtitle, .form-message {

        font-size: 12px;
        color: var(--dark);

        padding: 0px 20px;
    }

    .form-input {

        font-size: 12px;
        color: var(--dark);

        width: 100%;
        min-width: 150px;
        height: 40px;

        padding: 12px 20px;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;
    }

    .form-input::placeholder {

        color: rgba(0,0,0,0.6);
    }

    .form-button {

        font-size: 12px;
        text-align: center;
        color: var(--white);

        width: 150px;
        height: 40px;

        padding: 12px 20px;

        background-color: var(--dark);
        border-radius: 30px;

        cursor: pointer;
    }

    .form-button:hover {

        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    }

    .error {

        border: 2px solid var(--red);
    }

    /* --------- FORM DATE -------- */

    .form-date {

        width: 150px;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 1fr 1fr 1.2fr;

        border: 1px solid var(--gray);
        border-radius: 5px;
    }

    .form-date-title {

        font-size: 10px;
        text-align: center;
        color: rgba(0,0,0,0.5);
        
        width: 100%;

        position: absolute;
        top: -20px;

        padding: 4px;
    }

    .form-date > input {

        font-size: 12px;
        text-align: center;
        color: var(--dark);

        width: 100%;

        display: block;

        padding: 0px 12px;

        background-color: transparent;
    }

    .form-date-day {

        border: none;
    }

    .form-date-month {

        border: none;
        border-left: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
    }

    .form-date-year {

        border: none;
    }

</style>
