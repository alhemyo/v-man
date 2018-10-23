<template>

    <div class="dashboard">

        <navbar />

        <sidebar />

        <div class="mainview">

            <transition mode="out-in" name="routes">

                <router-view />

            </transition>

        </div>

    </div>
    
</template>

<script>

    export default {

        name: 'dashboard',

        components: {
            navbar: () => import('../components/nav/navbar'),
            sidebar: () => import('../components/nav/sidebar')
        },

        computed: {
            sidebar: {
                get() { return this.$store.state.uiComponents.sidebar },
                set(sidebar) { this.$store.commit('updateSidebar', sidebar) }
            }
        },

        watch: {

            $route: {
                immediate: true,
                handler: function() {
                    this.$route.meta.admin ? this.sidebar = true : this.sidebar = false
                }
            }
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

    .routes-enter-active, .routes-leave-active {

        transition: 0.3s ease;
    }

    .routes-enter {

        transform: translateY( -5px );

        opacity: 0;
    }

    .routes-leave-to {

        transform: translateY( 5px );

        opacity: 0;
    }

    /* Icons */

    i {

        font-size: 20px;
        text-align: center;
        color: var(--icon);

        transition: 0.1s ease;

        cursor: pointer;
    }

    i:hover {

        color: var(--defaultText);
    }

    /* Text */

    .head-text {

        font-family: var(--main);
        font-size: 16px;
        font-weight: 600;
        color: var(--activeText);
    }

    .head-text span {

        color: var(--defaultText);
    }

    .default-text {

        font-family: var(--main);
        font-size: 12px;
        font-weight: 500;
        color: var(--defaultText);
    }

    .empty {

        text-align: center;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );
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

    .nav i {

        font-size: 14px;
    }

    .nav-info {

        text-align: center;

        padding: 0px 10px;
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

        overflow: hidden;
    }

</style>
