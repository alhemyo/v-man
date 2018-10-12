<template>
    
    <div class="my-projects" :class="{ 'collapse-my-projects' : !sidebar }" >

        <loader 

            :condition="loading"
            message="Loading projects..."

        />

        <div class="projects-list">

            <transition-group name="list">

                <project-link 
        
                v-if="!loading"
                v-for="project in myProjects"
                :key="project.id"
                :id="project.id"
                :name="project.name"
                :priority="project.priority"
                
                />

            </transition-group>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'my-projects',

        components: {
            projectLink: () => import('./project-link'), 
            loader: () => import('../../components/widgets/loader')
        },

        data() {
            return {
                loading: true
            }
        },
        
        computed: {
            sidebar: { get() { return this.$store.state.sidebar } },
            myProjects: { get() { return this.$store.state.myProjects.myProjects } }
        },

        created() {

            this.$store.dispatch('getMyProjects')
            
            .then(() => { 

                this.loading = false 

                if ( this.$route.params.id ) {
                    this.$router.push({ name: 'project', params: { id : this.$route.params.id } })
                }

                else {
                    this.$router.push({ name: 'project', params: { id : this.myProjects[0].id } })
                }

            })
        }

    }

</script>

<style scoped>

    .my-projects {

        width: 280px;
        height: auto;

        position: relative;

        transition: transform, opacity 0.3s ease;

        overflow: hidden;
    }

    .collapse-my-projects {

        transform: translateX( -50px );

        opacity: 0;
    }

    .projects-list {

        width: calc( 100% + 17px );
        height: calc( 100vh - 420px );
        min-height: 0;

        position: relative;

        padding: 0px 20px;

        overflow-y: scroll;
    }

</style>
