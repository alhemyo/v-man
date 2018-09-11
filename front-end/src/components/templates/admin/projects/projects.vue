<template>
    
    <div class="projects">

        <div class="header">

            <p><span>{{ projectsLength }}</span> Projects</p>

        </div>

        <div class="projects-list">

            <project 
            :key="project.id" 
            v-for="project in projects" 
            :name="project.name"
            :priority="project.priority" />

        </div>

        <div class="footer"></div>

    </div>

</template>

<script>

    import project from './project'

    export default {
    
        name: 'projects',

        computed: {

            projects: { get() { return this.$store.state.projects.projects || [] } },
            projectsLength() { return this.projects.length }

        },

        components: {

            project

        },

        created() {

            this.$store.dispatch( 'GET_PROJECTS' )

        }

    }

</script>

<style scoped>

    .projects {

        width: 100%;
        height: calc( 100vh - 80px );

        position: relative;

        display: grid;
        grid-template-rows: 100px auto 60px;
    }

    .header {

        width: 100%;
        height: 100px;

        position: relative;

        padding: 0px 20px;

        display: grid;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .projects-list {

        width: calc( 100% + 17px );

        padding: 0px 2px;

        background-color: rgba(0,0,0,0.1);

        overflow-y: scroll;
    }

    .footer {

        border-top: 1px solid rgba(0,0,0,0.1);
    }

</style>


