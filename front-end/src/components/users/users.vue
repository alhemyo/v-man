<template>
    
    <div class="users-wrap">
        
        <div class="users">
        
            <div class="users-nav">

                <router-link to="/dashboard/users/all-users" class="users-nav-link">All users</router-link>

                <router-link to="/dashboard/users/add-user" class="users-nav-link">Add user</router-link> 

                <router-link to="/dashboard/users/edit-user" class="users-nav-link">Edit user</router-link> 

                <router-link to="/dashboard/users/delete-user" class="users-nav-link">Delete user</router-link>    
                
            </div> <!-- end .users-nav -->

            <div class="users-loader">

                <transition mode="out-in" name="routes">

                    <router-view />    
                    
                </transition>    
                
            </div> <!-- end .users-loader -->
            
        </div> <!-- end .users -->

        <pop />
        
    </div> <!-- end .users-wrap -->

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

    .users-wrap {

        width: calc( 100% + 17px );
        height: 100%;

        position: absolute;
        top: 0px;
        left: 0px;

        overflow-y: scroll;
    }

    .users {

        width: 100%;
        min-width: 780px;
        max-width: 1200px;
        height: auto;

        position: relative;
        margin: auto;

        padding: 40px;
    }

    .users-nav {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 60px;
        grid-column-gap: 10px;

        align-items: center;
    }

    .users-nav-link {

        font-size: 12px;
        text-align: center;
        color: var(--dark);
        white-space: nowrap;
        
        padding: 22px;

        transition: 0.2s ease;

        border-bottom: 4px solid var(--gray);
    }

    .users-nav-link:hover {

        border-bottom: 4px solid rgba(0,0,0,0.3);
    }

    .router-link-active {

        border-bottom: 4px solid var(--red);
    }

    .router-link-active:hover {

        border-bottom: 4px solid var(--red);
    }

</style>


