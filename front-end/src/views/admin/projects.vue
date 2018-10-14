<template>
    
    <div class="projects">
        
        <p :key="project.id" v-for="project in projects">{{ project.name }}</p>

    </div>

</template>

<script>

    export default {

        name: 'projects',

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
    }

</style>
