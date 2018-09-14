<template>
    
    <div class="side-bar" :class="{ 'side-bar-mini' : miniSidebar }">

        <h1 :class="{ 'h1-mini' : miniSidebar }" >V <span :class="{ mini : miniSidebar }" >MAN</span></h1>

        <user-card />

        <user-nav />

        <user-projects />

        <div class="side-bar-footer" :class="{ 'side-bar-footer-mini' : miniSidebar }" >

            <div class="button side-bar-button" :class="{ 'mini-side-bar-button' : miniSidebar }" >

                <p>New project</p>

                <i class="material-icons">add</i>

            </div>

        </div>

    </div>

</template>

<script>

    import userCard from './user-card'
    import userNav from './user-nav'
    import userProjects from './user-projects'

    export default {

        name: 'side-bar',

        components: {

            userCard,
            userNav,
            userProjects

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

        }
 
    }

</script>

<style scoped>

    .side-bar {

        width: 280px;
        height: 100vh;

        position: relative;

        grid-row: 1/3;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 100px 60px auto 60px;

        transition: width 0.3s ease;

        background-color: var(--dark);

        overflow: hidden;
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
        color: rgba(255,255,255,0.3);

        transition: 0.2s ease;
    }

    .mini {

        opacity: 0;
    }

    .side-bar-footer {

        width: 100%;
        height: 60px;

        position: relative;

        padding: 0px 20px;

        display: grid;
        align-items: center;
        justify-content: flex-end;

        transition: width 0.3s ease;
    }

    .side-bar-footer-mini {

        width: 80px;

        justify-content: center;
    }

    .side-bar-button {

        color: rgba(255,255,255,0.5);

        transition: 0.3s ease;

        background-color: var(--black);
    }

    .mini-side-bar-button {

        width: 40px;

        justify-content: flex-end;

        overflow: hidden;
    }

</style>


