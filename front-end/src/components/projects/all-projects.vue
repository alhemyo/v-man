<template>
    
    <div class="all-projects">

        <div class="project-nav">

            <p class="project-text">Client</p> 

            <p class="project-text">Project name</p> 

        </div>

        <div class="projects-scroll-wrap">
            
            <div :key="index" v-for="(project, index) in projects" class="project">

                <p class="project-text project-name">{{ project.project.client }}</p>

                <p class="project-text project-name">{{ project.project.name }}</p>
                
            </div> <!-- end .project -->    
            
        </div> <!-- end .all-projects-scroll-wrap -->

    </div> <!-- end .all-projects -->

</template>

<script>

    export default {
    
        name: 'all-projects',

        computed: {

            projects: { get() { return this.$store.state.projects.projects } }
        },

        created() { 

            this.$store.dispatch('GET_PROJECTS')
        }

    }

</script>

<style scoped>

    .all-projects {

        width: 100%;
        height: 100%;
        min-height: 0;

        position: relative;

        padding-top: 40px;

        display: grid;
        grid-template-rows: 60px auto;

        overflow: hidden;
    }

    .project-nav {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 60px 200px;
        grid-column-gap: 10px;

        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .projects-scroll-wrap {

        width: calc(100% + 17px);

        position: relative;

        display: grid;
        grid-template-rows: auto;
        grid-row-gap: 5px;
        align-content: flex-start;

        overflow-y: scroll;
    }

    .project {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 60px 200px;
        grid-template-rows: 60px;
        grid-column-gap: 10px;
        align-items: center;
        
        background-color: white;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0px 0px 5px rgba(0,0,0,0.05);;
    }

    .project-text {

        font-size: 12px;
        color: var(--dark);

        padding: 8px 5px;

        border-right: 1px solid rgba(0,0,0,0.1);
    }

    .project-nav .project-text {

        color: var(--darkGray);
    }

</style>


