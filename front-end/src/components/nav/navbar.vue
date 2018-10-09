<template>
    
    <div class="navbar-wrap">

        <div class="navbar">

            <i class="fas fa-angle-left" :class="{ 'fa-angle-right' : !sidebar }" @click="sidebar = !sidebar" ></i>

            <i class="fas fa-sliders-h"></i>

            <i class="fas fa-users-cog"></i>

            <i></i>

            <i class="fas fa-search"></i>

            <i class="fas fa-power-off" @click="logout" ></i>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'navbar',

        computed: {

            sidebar: {
                get() { return this.$store.state.sidebar },
                set(sidebar) { this.$store.commit('updateSidebar', sidebar) }
            }

        },

        methods: {

            logout() {
                this.$store.dispatch('logout')
            }

        }
    }

</script>

<style>

    .navbar-wrap {

        padding: 4px;
        padding-bottom: 2px;

        grid-column: 2/3;
    }

    .navbar {

        font-size: 20px;

        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 80px 80px 80px auto 80px 80px;
        align-items: center;

        background-color: white;
    }

</style>
