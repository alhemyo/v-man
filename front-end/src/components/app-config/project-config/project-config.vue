<template>
    
    <div class="project-config">

        <div class="project-config-header"></div>

        <div class="project-config-nav">

            <router-link to="/dashboard/project-config/add-project" class="project-config-link">Create project</router-link>

            <router-link to="/dashboard/project-config/edit-project" class="project-config-link">Edit project</router-link>

            <router-link to="/dashboard/project-config/delete-project" class="project-config-link">Delete project</router-link>

        </div> <!-- end .user-config-nav -->

        <div class="project-config-loader">

            <transition mode="out-in" name="side-fade">

                <router-view class="project-config-view"></router-view>

            </transition>

        </div> <!-- end .user-config-loader -->

        <div class="project-config-footer"></div> <!-- end .user-config-footer -->

    </div> <!-- end .user-config -->

</template>

<script>

    export default {
        
        name: 'project-config',

        mounted() {
            this.$router.push({ name: 'add-project' })
        }

    }

</script>

<style scoped>

    .side-fade-enter-active, .side-fade-leave-active {

        transition: all 0.2s ease;
    }

    .side-fade-enter {

        transform: translateX(30px);
        opacity: 0;
    }

    .side-fade-leave-to {

        transform: translateX(-30px);
        opacity: 0;
    }

    .project-config {

        width: 100%;
        height: 100%;

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40px 60px auto 80px;

        background-color: var(--white);

        overflow: hidden;
    }

    .project-config-nav {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 10px;
        align-items: center;
    }

    .project-config-link {

        font-size: 14px;
        color: var(--dark);
        text-align: center;

        padding: 20px 0px;

        border-bottom: 4px solid rgba(0,0,0,0.05);

        transition: all 0.3s ease;
    }

    .project-config-link:hover {

        border-bottom: 4px solid var(--gray);
    }

    .router-link-exact-active {

        border-bottom: 4px solid var(--red);
    }

    .router-link-exact-active:hover {

        border-bottom: 4px solid var(--red);
    }

    .project-config-loader {

        width: calc(100% + 17px);
        min-height: 0;
        height: auto;

        position: relative;

        overflow-y: scroll;
        overflow-x: hidden;
    }

    .project-config-footer {

        height: 80px;

        z-index: 5;

        background-color: var(--white);
        border-top: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0px -5px 20px rgba(0,0,0,0.1);
    }

</style>


