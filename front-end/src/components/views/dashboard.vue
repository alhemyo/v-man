<template>
    
    <div id="dashboard" class="dashboard">
       
        <nav-bar />
        <side-bar />

        <div class="loader">

            <transition mode="out-in" name="swipe">

                <router-view></router-view>

            </transition>

        </div> <!-- end .loader -->

        <settings />
        
    </div>

</template>

<script>

    import navBar from '../nav/nav-bar'
    import sideBar from '../nav/side-bar'
    import settings from '../nav/settings'

    export default {
    
        name: 'dashboard',

        components: {
            navBar,
            sideBar,
            settings
        },

        beforeMount() {
            this.$store.dispatch( 'GET_USER' )
        }
    }

</script>

<style scoped>

    .dashboard {

        width: 100%;
        height: 100vh;

        position: absolute;
        z-index: 0;

        display: grid;
        grid-template-columns: 300px auto;
        grid-template-rows: 80px auto;

        overflow: hidden;
    }

    .loader {

        min-height: 0;
        height: 100%;
        max-height: 100%;

        position: relative;

        padding: 0px 40px;
    }

</style>