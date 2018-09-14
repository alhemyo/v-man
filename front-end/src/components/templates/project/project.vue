<template>
    
    <div class="project">

        <project-card
        :name="project.name"
        :client="project.client"
        :deadline="project.deadline"
        :priority="project.priority" />

        <!-- replace with component when content -->

        <div class="project-nav"></div>

        <div class="project-content">

            <tasks />

            <users />

        </div>

        <add-task />

    </div>

</template>

<script>

    import addTask from '../forms/add-task'
    import projectCard from './project-card'
    import tasks from './tasks'
    import users from './users'

    export default {
    
        name: 'project',

        components: {

            projectCard,
            tasks,
            users,
            addTask
        },

        computed: {

            project() {

                return this.$store.state.thisUserProjects.projects.find((project) => {

                    return project.id === Number( this.$route.params.id )

                }) || {}

            }

        }

    }

</script>

<style scoped>

    .project {

        width: 100%;
        height: calc( 100vh - 80px );

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 100px 60px auto;
    }

    .project-content {

        display: grid;
        grid-template-columns: auto 200px;
        grid-template-rows: 1fr;
    }

</style>


