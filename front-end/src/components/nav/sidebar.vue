<template>
    
    <div class="sidebar" :class="{ 'collapse-sidebar' : !sidebar }" >

        <!-- HEADER -->

        <div class="header" :class="{ 'collapse-header' : !sidebar }" >

            <img src="/images/assets/logo/vertigo_logo.png" alt="logo" />

        </div>

        <!-- USER CARD -->

        <div class="user-card" :class="{ 'collapse-user-card' : !sidebar }" >

            <div class="avatar" :class="{ 'collapse-avatar' : !sidebar }" >

                <img src="/images/janeDoe.png" />

            </div>

            <transition name="card">

                <div v-if="sidebar" class="card" :class="{ 'collapse-card' : !sidebar }" >

                    <p>{{ fullName }}</p>

                    <p>{{ position }}</p>

                </div>

            </transition>

        </div>

        <!-- USER NAV -->

        <div class="nav" :class="{ 'collapse-nav' : !sidebar }" >

            <i class="fas fa-user"></i>

            <router-link class="link" :to="{ name: 'myprojects' }" ><i class="fas fa-bars"></i></router-link>

            <i class="fas fa-calendar-alt"></i>

        </div>

        <!-- MAIN VIEW -->

        <div class="view">

            <router-view name="sideview" />

        </div>

        <!-- FOOTER -->

        <div class="footer"></div>

    </div>

</template>

<script>

    export default {

        name: 'sidebar',

        computed: {
            sidebar: { get() { return this.$store.state.sidebar } },
            fullName: { get() { return this.$store.state.thisUser.name + ' ' + this.$store.state.thisUser.surname } },
            position: { get() { return this.$store.state.thisUser.position } }
        },
        
    }

</script>

<style scoped>

    .sidebar {

        width: 280px;
        height: 100vh;

        position: relative;

        grid-row: 1/3;

        display: grid;
        grid-template-rows: 80px 160px 120px auto 60px;

        transition: width 0.3s ease;

        overflow: hidden;
    }

    .collapse-sidebar {

        width: 80px;

        grid-template-rows: 80px 160px 120px auto 60px;
    }

    /* SIDEBAR HEADER CSS */

    .header {

        width: 280px;

        display: grid;
        grid-template-columns: 80px;
        justify-content: center;

        transition: width 0.3s ease;
    }

    .collapse-header {

        width: 80px;
    }

    .header img {

        padding: 20px;

        transition: 0.3s ease;
    }

    /* SIDEBAR USERCARD CSS */

    .user-card {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: 60px auto;
        grid-template-rows: 60px;
        grid-column-gap: 10px;
        align-items: center;
        align-content: center;

        transition: 0.3s ease;
    }

    .collapse-user-card {

        padding: 0px;
    }

    .avatar {

        width: 60px;

        transition: 0.3s ease;

        border-radius: 100%;

        overflow: hidden;
    }

    .collapse-avatar {

        width: 80px;
    }

    .card {

        font-size: 14px;
        color: var(--darkgray);
        white-space: nowrap;

        width: 170px;

        display: grid;
        grid-template-rows: min-content min-content;
        grid-row-gap: 10px;

        transition: width 0.3s ease;

        overflow: hidden;
    }

    .card-enter-active {

        transition: 0.3s;
    }

    .card-leave-active {

        transition: 0.3s;
    }

    .card-enter, .card-leave-to {

        opacity: 0;
    }

    .collapse-card {

        width: 0px;
    }

    .card p:nth-child(1) {

        font-size: 16px;
        font-weight: 600;
        color: var(--black);
        text-overflow: ellipsis;

        overflow: hidden;
    }

    /* SIDEBAR NAV CSS */

    .nav {

        font-size: 20px;
        text-align: center;

        display: grid;
        grid-template-columns: repeat( 3, 40px );
        align-items: center;
        justify-content: center;

        transition: 0.3s ease;
    }

    .collapse-nav {

        width: 80px;

        grid-template-columns: 80px;
        grid-template-rows: repeat( 3, 40px );
    }

    .link:hover i {

        color: var(--darkgray);
    }

    .router-link-active i {

        color: var(--darkgray);
    }

</style>
