<template>

    <div class="sidebar" :class="{ 'sidebar-mini' : sidebar }" >

        <div class="sidebar-header" :class="{ mini : sidebar }" >

            <img @click="sidebar = !sidebar" src="/images/assets/logo/vman_logo.png" alt="logo" />

        </div>

        <div class="card sidebar-card" :class="{ 'card-mini' : sidebar }" >

            <div class="avatar">

                <img :src=" gender === 'female' ? '/images/janeDoe.png' : '/images/johnDoe.png'" />

            </div>

            <div class="user-info" :class="{ 'user-info-mini' : sidebar }" >

                <p class="head-text" >{{ name + ' ' + surname }}</p>
                <p class="default-text">{{ position }}</p>

            </div>

        </div>

        <div class="nav sidebar-nav" :class="{ 'nav-mini mini' : sidebar }" >

            <router-link class="nav-link" :to="{ name: 'myprofile' }" ><i class="fas fa-user" /></router-link>

            <router-link class="nav-link" :to="{ name: 'myprojects' }" ><i class="fas fa-bars" /></router-link>

            <router-link class="nav-link" :to="{ name: 'myevents' }" ><i class="fas fa-calendar-alt" /></router-link>

        </div>

        <div vue-scrollbar class="sidebar-view" :class="{ 'sidebar-view-mini' : sidebar }" >

            <transition mode="out-in" name="routes" >
            
                <router-view name="sideview" />

            </transition>

        </div>

        <div class="sidebar-footer" :class="{ 'mini' : sidebar }" >

            <i class="fas fa-bug" />

        </div>

    </div>
    
</template>

<script>

    export default {

        name: 'sidebar',

        data() {
            return {
                name: localStorage.getItem( 'name' ) || 'Jane',
                surname: localStorage.getItem( 'surname' ) || 'Doe',
                position: localStorage.getItem( 'position' ) || 'DESIGN',
                gender: localStorage.getItem( 'gender' )
            }
        },

        computed: {

            sidebar: {
                get() { return this.$store.state.uiComponents.sidebar },
                set( sidebar ) { this.$store.commit( 'updateSidebar', sidebar ) }
            }

        }

    }

</script>

<style scoped >

    .sidebar {

        width: 280px;
        height: calc( 100vh - 8px );

        position: relative;

        grid-row: 1/3;

        display: grid;
        grid-template-rows: 80px 160px min-content auto 60px;
        grid-row-gap: 4px;

        transition: width 0.3s ease, padding 0.3s ease;

        overflow: hidden;
    }

    .sidebar-mini {

        width: 80px;

        padding: 0px 10px;

        grid-template-rows: 80px 160px 180px auto 60px;
    }

    /* SIDEBAR HEADER */

    .sidebar-header {

        width: 100%;
        height: 80px;

        position: relative;

        display: grid;
        align-items: center;

        transition: width 0.3s ease;
    }

    /* SIDEBAR CARD */

    .sidebar-card {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: 60px auto;
        grid-column-gap: 20px;
        align-items: center;

        transition: padding 0.3s ease;
    }

    .card-mini {

        padding: 0px;
    }

    .avatar {

        width: 60px;
        height: 60px;

        padding: 10px;
    }

    .user-info {

        white-space: nowrap;

        display: grid;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        grid-row-gap: 6px;

        transition: opacity 0.3s ease;

        opacity: 1;
    }

    .user-info-mini {

        opacity: 0;
    }

    /* SIDEBAR NAV */

    @keyframes nav {

        0% { opacity: 0; }

        30% { opacity: 0; }

        100% { opacity: 1; }
    }

    .sidebar-nav {

        display: grid;
        grid-template-columns: 60px 60px 60px;
        grid-template-rows: 60px;
        justify-content: center;
        justify-items: center;
        align-items: center;
    }

    .nav-mini {

        grid-template-columns: 60px;
        grid-template-rows: 60px 60px 60px;

        align-items: center;

        animation: nav 1s ease;
    } 

    .nav-link {

        width: 60px;
        height: 60px;

        display: grid;
        align-items: center;
    }

    .nav-link i {

        font-size: 16px;
    }

    .router-link-active i {

        color: var(--blue);
    }

    /* SIDEBAR VIEW */

    .sidebar-view {

        width: 100%;
        max-width: 280px;
        height: calc( 100vh - 384px );
        min-height: 0;

        padding: 0px 20px;

        transition: height 0s ease;

        overflow: hidden;
        overflow-y: auto;
    }

    .sidebar-view-mini {

        height: calc( 100vh - 504px );
    }

    /* SIDEBAR FOOTER */

    .sidebar-footer {

        width: 100%;

        display: grid;
        align-items: center;

        transition: width 0.3s ease;
    }

    .mini {

        width: 60px;
    }

</style>
