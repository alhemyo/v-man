<template>
    
    <div class="user-projects" :class="{ mini : miniSidebar }">

        <p class="projects-header"><i class="material-icons">view_headline</i>My projects</p>

        <div class="projects">

            <loader :shade="'light'" :condition="loading" />

            <transition-group name="list" >

                <user-project 
                :key="project.id" 
                v-for="project in projects"
                :name="project.name"
                :id="project.id"
                :priority="project.priority" />

            </transition-group>

        </div>

    </div>

</template>

<script>

    import userProject from './user-project'
    import loader from '../../macro/loader'

    export default {
    
        name: 'user-projects',

        components: {

            userProject,
            loader

        },

        computed: {

            miniSidebar: { get() { return this.$store.state.miniSidebar } },

            projects: { get() { return this.$store.state.thisUserProjects.projects || [] } },

            loading() { return this.projects.length === 0 ? true : false }

        },

        created() {

            this.$store.dispatch( 'GET_THIS_USER_PROJECTS' )

        }

    }

</script>

<style scoped>

    .user-projects {

        width: 100%;
        height: calc( 100vh - 300px );

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto;

        transition: opacity 0.3s ease;

        overflow: hidden;
    }

    .projects-header {

        font-size: 12px;
        color: rgba(255,255,255,0.3);

        padding: 0px 20px;

        display: grid;
        grid-template-columns: 20px auto;
        grid-template-rows: 60px;
        grid-column-gap: 10px;
        align-items: center;
    }

    .projects {

        width: calc( 100% + 20px );
        min-height: 0;

        position: relative;

        padding: 10px 0px;
        padding-right: 20px;

        background-color: rgba(0, 0, 0, 0.03);

        overflow: hidden;
        overflow-y: scroll;
    }

    .material-icons {
        
        color: gray;
    }

    .mini {

        opacity: 0;
    }

</style>


