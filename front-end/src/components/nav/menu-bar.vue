<template>
    
    <div class="menu-bar" :class="{ 'menu-bar-expand' : menubar }" >
        
        <h1 class="menu-bar-header">Settings</h1>

        <div class="menu">
 
            <router-link class="menu-link" to="/dashboard/users">Users</router-link>

            <router-link class="menu-link" to="/dashboard/projects">Projects</router-link>
            
        </div> <!-- end .menu -->

        <div class="menu-bar-footer">

            <img @click="logout" src="/images/assets/icons/off.png" />    
            
        </div> <!-- end .menu-bar-footer --> 
    
    </div> <!-- end .menu-bar -->

</template>

<script>

    export default {

        name: 'menu-bar',

        computed: {

            menubar: {
                get() { return this.$store.state.menubar },
                set(menubar) { this.$store.commit( 'updateMenubar', menubar ) }
            }
        },

        methods: {

            logout() {

                this.$store.dispatch('LOG_OUT')
            }
        }

    }

</script>

<style scoped>

    .menu-bar {

        width: 0px;
        height: 100%;

        position: absolute;
        right: 0px;
        z-index: 10;

        transition: 0.3s ease;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px auto 80px;

        background-color: var(--black);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
    }

    .menu-bar-expand {

        width: 200px;
    }

    h1 {

        font-size: 14px;
        font-weight: 400;
        color: var(--white);
        text-align: right;

        padding: 32px 40px;
    }

    .menu {

        padding: 0px 30px;
    }

    .menu-link {

        font-size: 12px;
        text-align: right;
        color: rgba(255,255,255,0.5);

        padding: 10px 10px;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .menu-link:hover {

        color: var(--white);
    }

    .router-link-active {

        color: var(--white);
    }

    .menu-bar-footer img {

        padding: 28px 30px;

        cursor: pointer;
    }

</style>


