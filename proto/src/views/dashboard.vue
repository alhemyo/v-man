<template>

    <div class="dashboard">

        <navbar />

        <sidebar />

        <div class="mainview">

            <router-view />

        </div>

    </div>
    
</template>

<script>

    export default {

        name: 'dashboard',

        components: {
            navbar: () => import('../components/nav/navbar'),
            sidebar: () => import('../components/nav/sidebar')
        }

    }

</script>

<style>

    /* ********** Global CSS ********** */

    /* Vue transitions */

    .list-enter-active, .list-leave-active {

        transition: 0.3s ease;
    }

    .list-enter, .list-leave-to {

        transform: translateY(20px);
        opacity: 0;
    }

    /* Icons */

    i {

        font-size: 20px;
        text-align: center;
        color: var(--icon);

        cursor: pointer;
    }

    /* Text */

    .head-text {

        font-family: var(--main);
        font-size: 16px;
        font-weight: 500;
        color: var(--activeText);
    }

    .default-text {

        font-family: var(--main);
        font-size: 12px;
        font-weight: 500;
        color: var(--defaultText);
    }

    /* Components */

    .card {

        width: 100%;
        height: 160px;

        position: relative;
    }

    .nav {

        width: 100%;
        height: 60px;

        position: relative;
    }

    /* ********** Dashboard CSS ********** */

    .dashboard {

        width: 100%;
        height: calc( 100vh - 8px );

        position: relative;

        display: grid;
        grid-template-columns: min-content auto;
        grid-template-rows: 80px auto;
        grid-gap: 4px;

        overflow: hidden;
    }

    .mainview {

        width: 100%;
        height: calc( 100vh - 92px );

        position: relative;
    }

</style>
