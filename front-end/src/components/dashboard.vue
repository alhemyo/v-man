<template>
    
    <div class="dashboard">

        <nav-bar />

        <side-bar />

        <div class="dash-loader">

            <transition name="dash-routes">

                <router-view />

            </transition>

        </div> <!-- end .dash-loader -->

        <menu-bar />

    </div>

</template>

<script>

    import navBar from './nav/nav-bar'
    import sideBar from './nav/side-bar'
    import menuBar from './nav/menu-bar'

    export default {
    
        name: 'dashboard',

        components: {

            navBar,
            sideBar,
            menuBar
        }
    
    }

</script>

<style scoped>

    .dash-routes-enter-active, .dash-routes-leave-active {

        transition: 0.3s ease;
    }

    .dash-routes-enter, .dash-routes-leave-to {

        transform: translateX( -20px );
        opacity: 0;
    }

    .dashboard {

        width: 100%;
        height: 100vh;

        position: relative;

        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: 80px auto;

        background-color: white;
    }

    .dash-loader {

        position: relative;
    }

</style>


