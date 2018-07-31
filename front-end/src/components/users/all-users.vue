<template>
    
    <div class="all-users">

            <div class="user-nav">

                <div></div>

                <p class="user-text">Name</p> 

                <p class="user-text user-position">Position</p>    
                
            </div> <!-- end .user-nav -->
            
            <div class="users-scroll-wrap">
                
                <div :key="index" v-for="(user, index) in users" class="user">

                    <div class="user-avatar">
                        
                        <img src="/images/janeDoe.png" />    
                        
                    </div> <!-- end .user-avatar -->

                    <p class="user-text user-name">{{ user.name + ' ' + user.surname }}</p>

                    <p class="user-text user-position">{{ user.position }}</p> 
                    
                </div> <!-- end .user -->     
                
            </div> <!-- end .users-scroll-wrap -->   

    </div> <!-- end .all-projects -->

</template>

<script>

    export default {
    
        name: 'all-users',

        computed: {

            users: { get() { return this.$store.state.users.users } }
        },

        created() { 

            this.$store.dispatch('GET_USERS')
        }

    }

</script>

<style scoped>

    .all-users {

        width: 100%;
        height: 100%;
        min-height: 0;

        position: relative;

        padding-top: 40px;

        display: grid;
        grid-template-rows: 60px auto;

        overflow: hidden;
    }

    .user-nav {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 60px 200px 80px;
        grid-column-gap: 10px;

        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    }

    .users-scroll-wrap {

        width: calc(100% + 17px);

        position: relative;

        display: grid;
        grid-template-rows: auto;
        grid-row-gap: 5px;
        align-content: flex-start;

        overflow-y: scroll;
    }

    .user {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 60px 200px 80px;
        grid-template-rows: 60px;
        grid-column-gap: 10px;
        align-items: center;
        
        background-color: white;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    }

    .user-avatar {

        width: 60px;
        height: 60px;

        padding: 10px;
    }

    .user-text {

        font-size: 12px;
        color: var(--dark);

        padding: 8px 5px;

        border-right: 1px solid rgba(0,0,0,0.1);
    }

    .user-nav .user-text {

        color: var(--darkGray);
    }


</style>


