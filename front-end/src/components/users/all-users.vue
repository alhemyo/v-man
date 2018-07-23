<template>
    
    <div class="all-users">

        <div class="all-users-scroll-wrap">
            
            <div :key="index" v-for="(user, index) in users" class="user">

                <div class="user-avatar">
                    
                    <img src="/images/janeDoe.png" />    
                    
                </div> <!-- end .user-avatar -->

                <p class="user-text user-name">{{ user.user.name + ' ' + user.user.surname }}</p>

                <p class="user-text user-position">{{ user.user.position }}</p> 
                
            </div> <!-- end .user -->    
            
        </div> <!-- end .all-users-scroll-wrap -->

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
    }

    .all-users-scroll-wrap {

        width: 100%;
        height: auto;

        padding: 40px 0px;
    }

    .user {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 60px 150px 100px;
        grid-template-rows: 60px;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .user-avatar {

        width: 60px;
        height: 60px;

        padding: 10px;
    }

    .user-text {

        font-size: 12px;
        color: var(--dark);
    }

    .user-position {

        text-align: center;
    }

</style>


