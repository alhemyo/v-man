<template>

  <div id="app">

		<transition mode="out-in" name="test">
			<router-view />
		</transition>

  </div>

</template>

<script>
	
	export default {

		name: 'app',
		
		mounted() {
			this.$store.dispatch('GET_USER')
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

	}

	.test-enter-active, .test-leave-active {

		transition: all 0.5s ease;
	}

	.test-enter, .test-leave-to {
		opacity: 0;
	}

	.test-leave-to {

		opacity: 0;
	}

	/* -------------------------------- FORM CSS -------------------------------------- */

	.form-sub-title, .form-message {

        font-size: 12px;
        color: rgba(0,0,0,0.5);

        padding: 20px;
    }

    .form-1 {

        grid-column: 1/2;
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

    .form-full-1 {

        grid-column: 1/4;
    }

    /* ------------- FORM SELECT CSS ------------- */

    .form-select {

        text-align: center;

        width: 100%;
        height: 40px;

        position: relative;

        cursor: pointer;
    }

    .form-select-drawer {

        width: 100%;
        height: auto;
        max-height: 40px;

        position: absolute;
        z-index: 1;

        padding: 13px;

        background-color: var(--gray);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;

        overflow: hidden;

        transition: 0.1s ease;
    }

    .open-select {

        max-height: 1000px;

        z-index: 100;
    }

    .form-select-placeholder {

        color: var(--dark);

        padding-bottom: 10px;
    }

    .form-select-value {

        color: rgba(0,0,0,0.4);

        padding: 10px;
    }

    .form-select-value:hover {

        color: var(--dark);
    }

    /* ------------- FORM RADIO CSS ------------- */

    .form-radio {

        text-align: left;

        width: 100%;
        height: 40px;

        position: relative;
        z-index: 2;

        padding: 0px 20px;
        padding-right: 10px;

        display: grid;
        grid-template-columns: auto min-content;
        align-items: center;

        background-color: var(--gray);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;
    }

    .radio {

        width: 20px;
        height: 20px;

        background-color: var(--dark);
        border: 2px solid darkgray;
        border-radius: 30px;

        cursor: pointer;

        transition: 0.1s ease;
    }

    .radio:hover {

        background-color: var(--yellow);
    }

    .true {

        background-color: var(--green);
    }

    .true:hover {

        background-color: var(--red);
    }

    .admin {

        transform: translateY(65px);

        transition: all 0.3s ease;
    }

    .is-admin {

        transform: translateY(0px);
    }

    /* ------------ FORM INPUT CSS -------------- */

    .form-input {

        font-size: 12px;
        color: var(--dark);

        width: 100%;
        height: auto;
        max-height: 40px;

        padding: 13px 20px;

        background-color: var(--gray);
        border: none;
        border-radius: 30px;
    }

    .form-input::placeholder {

        color: rgba(0,0,0,0.5);
    }

    /* ------------ FORM INPUT DATE CSS -------------- */

    .form-input-date {

        height: auto;
        max-height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 1.5fr 1fr 1.5fr;
        grid-template-rows: 40px;
    }

    .form-input-date-day {

        text-align: center;
        color: var(--dark);

        width: 100%;
        
        padding: 13px 20px;
        padding-right: 10px;

        border: none;
        border-right: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px 0px 0px 30px;
        background-color: var(--gray);
    }

    .form-input-date-month {

        text-align: center;
        color: var(--dark);

        width: 100%;

        padding: 13px 10px;

        border: none;
        border-radius: 0px;
        background-color: var(--gray);
    }

    .form-input-date-year {

        text-align: center;
        color: var(--dark);

        width: 100%;

        padding: 13px 20px;
        padding-left: 10px;

        border: none;
        border-left: 1px solid rgba(0,0,0,0.1);
        border-radius: 0px 30px 30px 0px;
        background-color: var(--gray);
    }

    .form-input-date-placeholder {

        color: rgba(0,0,0,0.3);

        width: 100%;
        height: 100%;

        position: absolute;

        padding: 13px 20px;

        background-color: var(--gray);
        border-radius: 30px;

        cursor: pointer;
    }

    /* ------------ FORM BUTTON CSS -------------- */

    .form-button {

        color: white;
        text-align: center;

        width: 100%;
        height: 40px;

        padding: 13px;

        background-color: var(--dark);

        border-radius: 30px;

        cursor: pointer;
    }

</style>
