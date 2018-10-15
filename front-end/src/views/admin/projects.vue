<template>
    
    <div class="projects">
        
        <project
        
            :key="project.id" 
            v-for="project in projects"
            :priority="project.priority"
            :name="project.name"
        
        />

    </div>

</template>

<script>

    export default {

        name: 'projects',

        components: {
            project: () => import('./project')
        },

        data() {
            return {
                loading: true
            }
        },

        computed: {
            projects: { get() { return this.$store.state.projects.projects } }
        },

        created() {
            this.$store.dispatch('getProjects')
            .then(() => { this.loading = false })
        }

    }

</script>

<style>

    .projects {

        width: 100%;
        height: 100%;

        padding: 4px;
        padding-top: 0px;
    }

</style>
