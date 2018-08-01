<template>
    
    <div class="all-projects">

        <div class="project-nav">

            <div class="project-main-nav">

                <p class="project-text main-nav-title">PROJECTS</p>

            </div>

            <p class="project-text project-client">Client</p>

            <p class="project-text project-state">State ⯆</p>

            <p class="project-text"></p>

            <p class="project-text project-deadline">Deadline ⯆</p>

            <p class="project-text">Add Task</p>

        </div>

        <div class="projects-scroll-wrap">
            
            <div v-if="project.name" :key="index" v-for="(project, index) in projects" class="project" >

                <div v-if="project.priority === 'low'" class="project-priority"></div> <!-- end .project-priority -->

                <div v-if="project.priority === 'mid'" class="project-priority mid-priority"></div> <!-- end .project-priority -->

                <div v-if="project.priority === 'high'" class="project-priority high-priority"></div> <!-- end .project-priority -->

                <p class="project-text project-name" @click="openProject" >{{ project.name }}</p>

                <p class="project-text project-client">{{ project.client }}</p>

                <p class="project-text project-state">production</p>

                <p class="project-text"></p>

                <p class="project-text project-deadline">{{ project.deadline }}</p>

                <div class="project-settings">

                    <img src="/images/assets/icons/add_task.png" title="Add task" />

                    <router-link class="project-settings-link" to="edit-project"><img src="/images/assets/icons/edit_project.png" title="Edit Project" /></router-link>

                    <router-link class="project-settings-link" to="delete-project"><img src="/images/assets/icons/delete_project.png" title="Delete Project" /></router-link>

                </div>
                
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

        methods: {

            openProject(event) {

                let name = $(event.target).html()
                let project = this.$store.state.projects.projects.find((project) => { return project.name === name })

                this.$store.commit('updateProject', project)
                this.$router.push({ name: 'project', params: { name: name } })
            }
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
        grid-template-columns: 260px 60px 100px auto 100px 100px;

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
        grid-template-columns: 10px 250px 60px 100px auto 100px 100px;
        grid-template-rows: 60px;
        align-items: center;
        
        background-color: white;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    }

    .project-text {

        font-size: 12px;
        color: var(--dark);
        text-align: center;

        padding: 8px 5px;

        border-right: 1px solid rgba(0,0,0,0.1);
    }

    .main-nav-title {

        font-weight: bold;
        color: var(--black);
        text-align: left;
    }

    .project-priority {

        width: 3px;
        height: 16px;

        background-color: var(--gray);
        border-radius: 4px;
    }

    .mid-priority {

        background-color: var(--yellow);
    }

    .high-priority {

        background-color: var(--red);
    }

    .project-name {

        text-align: left;

        padding: 20px 0px;

        cursor: pointer;
    }

    .project-settings {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 19px;
    }

    .project-settings img {

        opacity: 0.5;

        cursor: pointer;
    }

    .project-settings img:hover {

        opacity: 1;
    }

</style>


