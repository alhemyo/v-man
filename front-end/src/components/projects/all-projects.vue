<template>
    
    <div class="all-projects">

        <div class="all-projects-scroll-wrap">
            
            <div :key="index" v-for="(project, index) in projects" class="project">

                <p class="project-text project-name">{{ project.project.name }}</p>
                
            </div> <!-- end .user -->    
            
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
    }

    .all-projects-scroll-wrap {

        width: 100%;
        height: auto;

        padding: 40px 0px;
    }

    .project {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 150px;
        grid-template-rows: 60px;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .project-text {

        font-size: 12px;
        color: var(--dark);
    }

</style>


