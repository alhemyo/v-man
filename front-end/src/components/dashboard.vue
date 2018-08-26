<template>
    
    <div class="dashboard">

        <nav-bar />
        <side-bar />

        <div class="loader">

            <transition mode="out-in" name="swipe">

                <router-view />

            </transition>

        </div>

    </div>

</template>

<script>

    import navBar from './nav/nav-bar'
    import sideBar from './nav/side-bar'

    export default {
        name: 'dashboard',
        components: {
            navBar,
            sideBar
        },
        data() {
            return {
                date: new Date()
            }
        },
        mounted() {
            console.log(this.date)
            console.log(this.date.getTime())
        }
    }

</script>

<style>

    .swipe-enter-active, .swipe-leave-active {

        transition: all 0.5s ease;
    }

    .swipe-enter, .swipe-leave-to {

        transform: translateX(30px);
        opacity: 0;
    }

    .dashboard {

        width: 100%;
        height: 100%;

        position: relative;

        display: grid;
        grid-template-columns: 280px auto;
        grid-template-rows: 80px auto;
        grid-gap: 4px;
    }

    .loader {

        background-color: var(--dark);
        border-radius: 5px;
    }

</style>


