<template>
    
    <div class="user-nav" :class="{ mini : miniSidebar }">

        <i class="material-icons" title="profile" >account_circle</i>

        <i class="material-icons" >timeline</i>

        <i class="material-icons" >access_time</i>

        <i class="material-icons" @click="logout" title="Logout" >power_settings_new</i>

    </div>

</template>

<script>

    export default {
    
        name: 'user-nav',

        computed: {

            miniSidebar: { get() { return this.$store.state.miniSidebar } }

        },

        methods: {

            logout() {

                this.$store.dispatch('LOGOUT')

            }
        }

    }

</script>

<style scoped>

    .user-nav {

        width: 100%;
        height: 60px;

        position: relative;

        display: grid;
        grid-template-columns: 60px 60px 60px 60px;
        grid-template-rows: 60px;
        justify-content: space-around;

        transition: 0.3s ease;
    }

    .material-icons {

        font-size: 22px;
        color: var(--white);

        padding: 18px;

        transition: 0.2s ease;

        opacity: 0.3;

        cursor: pointer;
    }

    .material-icons:hover {

        opacity: 0.6;
    }

    .mini {

        opacity: 0;
    }

</style>


