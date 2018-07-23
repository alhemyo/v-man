<template>
    
    <div class="projects-wrap">
        
        <div class="projects">
        
            <div class="projects-nav">

                <router-link to="/dashboard/projects/all-projects" class="projects-nav-link">All projects</router-link>

                <router-link to="/dashboard/projects/add-project" class="projects-nav-link">Add project</router-link> 

                <router-link to="/dashboard/projects/edit-project" class="projects-nav-link">Edit project</router-link> 

                <router-link to="/dashboard/projects/delete-project" class="projects-nav-link">Delete project</router-link>    
                
            </div> <!-- end .projects-nav -->

            <div class="projects-loader">

                <transition mode="out-in" name="routes">

                    <router-view />    
                    
                </transition>    
                
            </div> <!-- end .projects-loader -->
            
        </div> <!-- end .projects -->

        <pop />    
        
    </div> <!-- end .projects-wrap -->

</template>

<script>

    import pop from '../macro/pop'

    export default {
    
        name: 'projects',

        components: {

            pop
        },

        created() { 

            this.$router.push({ name: 'allProjects' })
        }

    }

</script>

<style scoped>

    .projects-wrap {

        width: calc( 100% + 17px );
        height: 100%;

        position: absolute;
        top: 0px;
        left: 0px;

        overflow-y: scroll;
    }

    .projects {

        width: 100%;
        min-width: 780px;
        max-width: 1200px;
        height: auto;

        position: relative;
        margin: auto;

        padding: 40px;
    }

    .projects-nav {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 60px;
        grid-column-gap: 10px;

        align-items: center;
    }

    .projects-nav-link {

        font-size: 12px;
        text-align: center;
        color: var(--dark);
        white-space: nowrap;
        
        padding: 22px;

        transition: 0.2s ease;

        border-bottom: 4px solid var(--gray);
    }

    .projects-nav-link:hover {

        border-bottom: 4px solid rgba(0,0,0,0.3);
    }

    .router-link-active {

        border-bottom: 4px solid var(--red);
    }

    .router-link-active:hover {

        border-bottom: 4px solid var(--red);
    }

</style>


