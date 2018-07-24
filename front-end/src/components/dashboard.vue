<template>
    
    <div class="dashboard">

        <nav-bar />

        <side-bar />

        <div class="dash-loader">

            <transition name="routes">

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

    .dashboard {

        width: 100%;
        height: 100vh;

        position: relative;

        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: 80px auto;

        background-color: white;

        overflow: hidden;
    }

    .dash-loader {

        position: relative;

        padding: 40px;

        overflow: hidden;
    }

</style>


