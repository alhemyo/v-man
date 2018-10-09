<template>
    
    <div class="dashboard">

        <navbar />

        <sidebar />

        <router-view class="main-view" />

        <user />

    </div>

</template>

<script>

    export default {

        name: 'dashboard',
        
        components: { 
            navbar: () => import ('../components/nav/navbar'), 
            sidebar: () => import('../components/nav/sidebar'),
            user: () => import('../components/forms/user')
        }

    }

</script>

<style>

    /* TRANSITIONS */

    .views-enter-active, .views-leave-active {

        transition: 0.3s ease;
    }

    .views-enter {

        transform: translateX( 30px );
        opacity: 0;
    }

    .views-leave-to {

        transform: translateX( -30px );
        opacity: 0;
    }

    .list-enter-active, .list-leave-active {

        transition: 0.3s ease-in;
    }

    .list-move {

        transition: 0.3s ease;
    }

    .list-enter, .list-leave-to {

        transform: translateY( 30px );

        opacity: 0;
    }

    /* DASHBOARD CSS */

    .dashboard {

        width: 100%;
        height: 100vh;

        position: relative;

        display: grid;
        grid-template-columns: min-content auto;
        grid-template-rows: 80px auto;

        background-color: var(--lightgray);

        overflow: hidden;
    }

    .main-view {

        overflow: hidden;
    }

</style>
