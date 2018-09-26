<template>
    
    <div class="user-nav" :class="{ mini : miniSidebar }">

        <router-link class="link" :to="{ name: 'myprofile' }" ><i class="material-icons">person</i></router-link>

        <router-link class="link" :to="{ name: 'myprojects' }" ><i class="material-icons">list</i></router-link>

        <router-link class="link" :to="{ name: 'myevents' }" ><i class="material-icons">access_time</i></router-link>

    </div>

</template>

<script>

    export default {
    
        name: 'user-nav',

        computed: {

            miniSidebar: { get() { return this.$store.state.miniSidebar } }

        }

    }

</script>

<style scoped>

    .user-nav {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: repeat(3, 50px);
        justify-content: center;
        align-items: center;

        border-top: 1px solid rgba(0,0,0,0.1);
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .user-nav > .link i {

        font-size: 26px;
    }

    .user-nav > .link:nth-child(2) i {

        font-size: 32px;
    }

    .user-nav > .link:nth-child(3) i {

        font-size: 24px;
    }

    .link {

        color: rgba(255,255,255,0.2);
        text-align: center;
    }

    .router-link-active {

        color: white;
    }

    .mini {

        opacity: 0;
    }

</style>


