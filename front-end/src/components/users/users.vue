<template>
        
        <div class="config">
        
            <div class="config-nav">

                <router-link to="/dashboard/users/all-users" class="config-nav-link">All users</router-link>

                <router-link to="/dashboard/users/add-user" class="config-nav-link">Add user</router-link> 

                <router-link to="/dashboard/users/edit-user" class="config-nav-link">Edit user</router-link> 

                <router-link to="/dashboard/users/delete-user" class="config-nav-link">Delete user</router-link>    
                
            </div> <!-- end .users-nav -->

            <div class="config-loader">

                <transition mode="out-in" name="routes">

                    <router-view />    
                    
                </transition>    
                
            </div> <!-- end .users-loader -->

            <pop />
            
        </div> <!-- end .users -->

</template>

<script>

    import pop from '../macro/pop'

    export default {
    
        name: 'users',

        components: {

            pop
        },

        created() { 

            this.$router.push({ name: 'allUsers' })
        }
    }

</script>

<style scoped>

    .config {

        width: 100%;
        min-width: 780px;
        max-width: 1200px;
        height: 100%;

        position: relative;
        margin: auto;

        display: grid;
        grid-template-rows: 60px auto;

        overflow: hidden;
    }

    .config-nav {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 60px;
        grid-column-gap: 10px;

        align-items: center;
    }

    .config-nav-link {

        font-size: 12px;
        text-align: center;
        color: var(--dark);
        white-space: nowrap;
        
        padding: 22px;

        transition: 0.2s ease;

        border-bottom: 4px solid var(--gray);
    }

    .config-nav-link:hover {

        border-bottom: 4px solid rgba(0,0,0,0.3);
    }

    .router-link-active {

        border-bottom: 4px solid var(--red);
    }

    .router-link-active:hover {

        border-bottom: 4px solid var(--red);
    }

    .config-loader {

        width: 100%;

        overflow: hidden;
    }

</style>


