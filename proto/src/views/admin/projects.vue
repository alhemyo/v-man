<template>

    <div class="projects">

        <view-template>

            <div slot="card" class="card projects-card">

                <p class="head-text"><span>Admin |</span> Projects</p>

                <div class="card-menu">

                    <i class="fas fa-file-alt" />

                </div>

            </div>

            <div slot="nav" class="nav projects-nav">

                <i class="fas fa-signal" />

                <p class="default-text nav-info">Project name</p>

                <p class="default-text nav-info">state</p>

                <p class="default-text nav-info">users</p>

            </div>

            <div slot="content" class="project-list">

                <loader 
                
                    message="Fetching projects"
                    :condition="loading"

                />

                <p v-if="empty" class="default-text empty">No projects.</p>

                <transition-group mode="out-in" name="list">

                    <project 

                        v-if="project.name"
                        v-for="project in projects"
                        :key="project.id"
                        :id="project.id"
                        :name="project.name"
                        :priority="project.priority"
                        :users="project.users.length"
                    
                    />
                    
                </transition-group>

            </div>

        </view-template>

    </div>
    
</template>

<script>

    export default {

        name: 'projects',

        components: {
            viewTemplate: () => import('../../components/templates/viewTemplate.vue'),
            loader: () => import('../../components/widgets/loader.vue'),
            project: () => import('../../components/templates/project.vue')
        },

        data() {
            return {
                loading: true,
                empty: false
            }
        },

        computed: {
            projects: {
                get() { return this.$store.state.projects.projects }
            }
        },

        watch: {
            projects() { // Display message if there are no projects in the list.
                this.empty = this.projects.length > 0 ? false : true
            }
        },

        created() {
            this.$store.dispatch('getProjects')
            .then(() => {
                this.loading = false
            })
        }

    }

</script>

<style scoped >

    .projects-card {

        padding-left: 40px;

        display: grid;
        grid-template-columns: auto 200px;
        grid-template-rows: 60px;
        align-items: center;
        align-content: center;
    }

    .card-menu {

        grid-column: 2/3;

        display: grid;
        grid-template-columns: 60px;
        grid-template-rows: 60px;
        align-items: center;
        justify-content: center;
    }

    .projects-nav {

        display: grid;
        grid-template-columns: 40px 290px 100px 100px;
        grid-template-rows: 60px;

        align-items: center;

        background-color: rgba( 0, 0, 0, 0.1 );
    }

    .nav-info:nth-child(2) {

        text-align: left;
    }

</style>
