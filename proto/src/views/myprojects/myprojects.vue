<template>
    
    <div class="myprojects">

        <loader 
            :condition="loading"
            message="Fetching projects"
        />

        <p v-if="empty" class="default-text empty">No assigned projects.</p>

        <transition-group name="list" tag="a" >

            <project-badge 
        
                v-if="!loading && !empty"
                :key="project.id"
                v-for="project in myProjects"
                :id="project.id"
                :name="project.name"
                :priority="project.priority"
            
            />

        </transition-group>

    </div>

</template>

<script>

    export default {

        name: 'myprojects',

        data() {
            return {
                loading: true,
                empty: false
            }
        },

        components: {
            loader: () => import('../../components/widgets/loader.vue'),
            projectBadge: () => import('../../components/widgets/projectBadge.vue')
        },

        computed: {
            myProjects: {
                get() { return this.$store.state.myProjects.myProjects }
            }
        },

        watch: {
            myProjects() { // Display message if there are no projects in the list.
                this.empty = this.myProjects.length > 0 ? false : true
            }
        },

        created() {

            this.$store.dispatch( 'getMyProjects' )
            .then(() => {

                this.loading = false // Stop loading

                if ( this.$route.params.id ) { // If there is a param id load that project
                    this.$router.push({ name: 'project', params: { id: this.$route.params.id } }) 
                }
                else { // If not than load the first on the list
                    this.$router.push({ name: 'project', params: { id: this.myProjects[0].id } }) 
                }

            })
        }

    }

</script>

<style>

    .myprojects {

        width: 100%;
        height: auto;
        min-height: calc( 100vh - 388px );

        position: relative;
    }

    .project-badge:nth-child(1) {

        margin-top: 0px;
    }

</style>
