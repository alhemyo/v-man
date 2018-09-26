<template>
    
    <div class="side-bar" :class="{ 'side-bar-mini' : miniSidebar }">

        <div class="header" :class="{ 'header-mini' : miniSidebar }" >

            <img src="/images/assets/logo/vertigo_logo.png" alt="logo" />

        </div>

        <user-card />

        <user-nav />

        <div class="side-view" >

            <transition name="route" mode="out-in">

                <router-view name="sideview"></router-view>

            </transition>

        </div>

        <!--

        <user-events />
        <user-projects />
        
        -->

        <div class="side-bar-footer" :class="{ 'side-bar-footer-mini' : miniSidebar }" >

            <i class="material-icons" @click="logout" >power_settings_new</i>

        </div>

    </div>

</template>

<script>

    import userCard from './user-card'
    import userNav from './user-nav'
    import userProjects from './user-projects'
    import userEvents from './user-events'

    export default {

        name: 'side-bar',

        components: {

            userCard,
            userNav,
            userProjects,
            userEvents

        },

        data() {

            return {

                mini: false

            }

        },

        computed: {

            miniSidebar: {
                get() { return this.$store.state.miniSidebar }
            }

        },

        methods: {

            openProjectForm() {

                this.$router.push({ name: 'projects' })
                this.$store.commit( 'updateOpenProjectForm', true )

            },

            logout() {

                if ( confirm( 'Are you sure you want to Logout?' ) ) {

                    this.$store.dispatch( 'LOGOUT' )

                }

            }
        }
 
    }

</script>

<style scoped>

    .side-bar {

        width: 280px;
        height: 100vh;

        position: relative;

        padding: 0px 20px;

        grid-row: 1/3;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 160px 60px auto 60px;

        transition: width 0.3s ease;

        background-color: var(--dark);

        overflow: hidden;
    }

    .header {

        width: 100%;

        padding: 20px 0px;

        transition: width 0.3s ease;
    }

    .header-mini {

        width: 40px;

        padding: 25px 0px;
    }

    .header-img {

        transition: 0.3s ease;
    }

    .side-bar-mini {

        width: 80px;
    }

    h1 {

        font-size: 22px;
        font-weight: 700;
        color: var(--red);
        white-space: nowrap;
        user-select: none;

        padding: 28px 20px;

        transition: 0.3s ease;
    }

    .h1-mini {

        padding: 28px 30px;
    }

    h1 span {

        font-weight: 500;
        color: white;

        transition: 0.2s ease;
    }

    .mini {

        opacity: 0;
    }

    .side-view {

        height: 100%;

        position: relative;

        padding-top: 40px;
    }

    .side-bar-footer {

        color: rgba( 255, 255, 255, 0.3 );

        width: 100%;
        height: 60px;

        position: relative;

        display: grid;
        align-items: center;
        justify-content: center;

        transition: 0.3s ease;
    }

    .side-bar-footer:hover {

        color: rgba( 255, 255, 255, 0.8 );
    }

    .side-bar-footer-mini {

        width: 40px;

        padding: 0px;
    }

    .side-bar-footer > i {

        padding: 18px;

        cursor: pointer;
    }


</style>


