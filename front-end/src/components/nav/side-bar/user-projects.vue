<template>
    
    <div class="user-projects" :class="{ mini : miniSidebar }">

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

        .then(() => {

            this.$router.push({ name: 'myproject', params: { id : this.projects[0].id } })

        })

        }

    }

</script>

<style scoped>

    .user-projects {

        width: 100%;
        height: calc( 100vh - 400px );

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;

        transition: opacity 0.3s ease;

        overflow: hidden;
    }

    .projects {

        width: calc( 100% + 17px );
        min-height: 0;

        position: relative;

        overflow: hidden;
        overflow-y: scroll;
    }

    .mini {

        opacity: 0;
    }

</style>


