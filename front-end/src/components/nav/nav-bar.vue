<template>
    
    <div  class="nav-bar">

        <h1><span>V</span> MAN</h1>

        <div class="main-nav">

            <router-link to="/dashboard/activity" class="main-nav-link" ><img src="/images/assets/icons/dashboard.png" /></router-link>

            <router-link to="/dashboard/projects" class="main-nav-link" ><img src="/images/assets/icons/projects.png" /></router-link>

            <router-link to="/dashboard/chat" class="main-nav-link" ><img src="/images/assets/icons/chat.png" /></router-link>  
            
        </div> <!-- end .main-nav -->

        <div></div>

        <div class="menu-button" @click="menubar = !menubar" :class="{ 'menu-button-expand' : menubar }" >

            <img src="/images/assets/icons/settings.png" />

        </div> <!-- end .menu-button -->

    </div>

</template>

<script>

    export default {

        name: 'nav-bar',

        computed: {

            menubar: {
                get() { return this.$store.state.menubar },
                set(menubar) { this.$store.commit( 'updateMenubar', menubar ) }
            }
        }

    }

</script>

<style scoped>

    .nav-bar {

        width: 100vw;
        height: 80px;

        position: relative;

        grid-column: 1/3;

        display: grid;
        grid-template-columns: min-content 144px auto 80px;
        grid-template-rows: 1fr;

        background-color: var(--black);
    }

    h1 {

        font-size: 24px;
        font-weight: 300;
        color: var(--white);
        white-space: nowrap;
        user-select: none;

        padding: 28px 40px;
    }

    h1 span {

        font-weight: normal;
        color: var(--red);
    }

    .main-nav {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        align-items: center;
    }

    .main-nav-link > img {

        filter: grayscale(1);
    }

    .router-link-active > img {

        filter: grayscale(0);
    }

    .menu-button {

        width: 80px;
        height: 80px;

        position: relative;
        z-index: 15;

        display: grid;
        align-items: center;

        transition: 0.25s ease-out;

        cursor: pointer;
    }

    .menu-button-expand {

        transform: translateX( -120px ) rotate( 90deg );
    }

    .menu-button img {

        pointer-events: none;
    }

</style>


