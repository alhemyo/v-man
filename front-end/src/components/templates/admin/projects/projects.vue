<template>
    
    <div class="projects">

        <div class="header">

            <p><span>{{ projectsLength }}</span> Projects</p>

        </div>

        <div class="projects-nav">

            <i class="material-icons">assessment</i>

            <p>project name</p>

        </div>

        <div class="projects-list">

            <loader :condition="loading" />

            <transition-group mode="out-in" name="list">

                <project 
                :key="project.id" 
                v-for="project in projects" 
                :name="project.name"
                :priority="project.priority" />

            </transition-group>

        </div>

        <div class="footer"></div>

    </div>

</template>

<script>

    import project from './project'
    import loader from '../../../macro/loader'

    export default {
    
        name: 'projects',

        computed: {

            projects: { get() { return this.$store.state.projects.projects || [] } },
            projectsLength() { return this.projects.length },
            loading() { return this.projectsLength > 0 ? false : true }

        },

        components: {

            project,
            loader

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
        grid-template-rows: 100px 60px auto 60px;
    }

    .header {

        width: 100%;
        height: 100px;

        position: relative;

        padding: 0px 20px;

        display: grid;
        align-items: center;
    }

    .projects-nav {

        color: rgba(0,0,0,0.5);

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 40px 200px;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .projects-nav > * {

        border-right: 1px solid rgba(0,0,0,0.1);
    }

    .projects-nav .material-icons {

        font-size: 22px;

        text-align: center;
    }

    .projects-nav p {

        font-size: 12px;

        padding: 6px 10px;
    }

    .projects-list {

        width: calc( 100% + 17px );

        background-color: rgba(0,0,0,0.1);

        overflow-y: scroll;
    }

    .footer {

        border-top: 1px solid rgba(0,0,0,0.1);
    }

</style>


