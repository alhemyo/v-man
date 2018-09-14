<template>
    
    <div class="nav-bar">

        <div class="main-nav">

            <i class="material-icons close-bar" @click="toggleSidebar" >{{ miniSidebar ? 'keyboard_arrow_right' : 'keyboard_arrow_left' }}</i>

            <router-link v-if="( admin === 'true' && adminType === 'uber admin' || adminType === 'project admin' )" :to="{ name: 'projects' }" >

                <i class="material-icons main-nav-icons">dashboard</i>
                
            </router-link>

            <router-link v-if="( admin === 'true' && adminType === 'uber admin' || adminType === 'user admin' )" :to="{ name: 'users' }" >

                <i class="material-icons main-nav-icons">group</i>

            </router-link>

        </div>

        <div></div>

        <div class="search-bar">

            <input class="search" type="text" placeholder="Search.." />

            <i class="material-icons search-button" >search</i>

        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    export default {
    
        name: 'nav-bar',

        computed: {

            miniSidebar: { get() { return this.$store.state.miniSidebar } },

            admin: { get() { return this.$store.state.thisUser.is_admin } },
            adminType: { get() { return this.$store.state.thisUser.admin_type } },

        },

        methods: {

            toggleSidebar() {

                this.mini = !this.mini

                this.$store.commit('updateMiniSidebar', this.mini )
            }
        }

    }

</script>

<style scoped>

    .nav-bar {

        text-align: center;

        width: 100%;
        height: 80px;

        position: relative;

        padding-right: 20px;

        display: grid;
        grid-template-columns: minmax( 60px, 180px ) auto minmax( 150px, 300px );
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .main-nav {

        width: auto;
        height: 80px;

        display: grid;
        grid-template-columns: 60px 60px 60px;
        grid-template-rows: 80px;
        align-items: center;
        justify-items: center;

        cursor: pointer;
    }

    .close-bar {

        font-size: 36px;
        color: rgba(0,0,0,0.3);

        padding: 3px;

        border-radius: 30px;
    }

    .main-nav-icons {

        color: rgba(0,0,0,0.3);

        padding: 10px;

        transition: 0.2s ease;

        border-radius: 30px;
    }

    .material-icons:hover {

        color: rgba(0,0,0,0.6);

        background-color: rgba(0,0,0,0.05);
    }

    .router-link-active .main-nav-icons {

        color: var(--dark);
    }

    .sub-nav-icons {

        font-size: 18px;
        color: rgba(0,0,0,0.3);

        padding: 10px;

        border-radius: 30px;
    }

    .router-link-active .sub-nav-icons {

        color: var(--dark);
    }

    .search-bar {

        width: 100%;
        height: 80px;

        display: grid;
        grid-template-columns: auto 40px;
        grid-template-rows: 80px;
        align-items: center;
    }

    .search {

        font-family: var(--default);
        font-size: 12px;
        font-weight: 500;
        color: gray;

        width: 100%;
        height: 40px;

        padding: 0px 20px;

        background-color: rgba(0,0,0,0.05);
        border: none;
    }

    .search-button {

        font-size: 22px;
        color: rgba(0,0,0,0.6);

        background-color: rgba(0,0,0,0.05);

        padding: 9px;

        cursor: pointer;
    }

</style>


