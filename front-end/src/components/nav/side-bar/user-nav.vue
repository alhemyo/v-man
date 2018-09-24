<template>
    
    <div class="user-nav" :class="{ mini : miniSidebar }">

        <i class="material-icons">person</i>

        <i class="material-icons">list</i>

        <i class="material-icons">access_time</i>

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

        color: rgba(255,255,255,0.2);
        text-align: center;

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: repeat(3, 50px);
        justify-content: center;
        align-items: center;

        border-top: 1px solid rgba(0,0,0,0.1);
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .user-nav > i {

        font-size: 26px;
    }

    .user-nav > i:nth-child(2) {

        font-size: 32px;
    }

    .user-nav > i:nth-child(3) {

        font-size: 24px;
    }

    .mini {

        opacity: 0;
    }

</style>


