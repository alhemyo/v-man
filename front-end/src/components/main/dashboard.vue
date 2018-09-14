<template>
    
    <div class="dashboard">

        <side-bar />

        <nav-bar />

        <div class="view">

            <transition mode="out-in" name="route">

                <router-view :key="this.$route.fullPath" />

            </transition>

        </div>

    </div>
    
</template>

<script>

    import sideBar from '../nav/side-bar/side-bar'
    import navBar from '../nav/nav-bar/nav-bar'
    

    export default {

        name: 'dashboard',

        components: {
            sideBar,
            navBar
        }
        
    }

</script>

<style>

    .route-enter-active, .route-leave-active {

        transition: 0.3s ease;
    }

    .route-enter {

        transform: translateX(50px);

        opacity: 0;
    }

    .route-leave-to {

        transform: translateX(-50px);

        opacity: 0;
    }

    .dashboard {

        width: 100%;
        height: 100vh;

        position: relative;

        display: grid;
        grid-template-columns: min-content auto;
        grid-template-rows: 80px auto;
    }

    .view {

        overflow: hidden;
    }

</style>


