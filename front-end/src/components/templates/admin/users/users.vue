<template>
    
    <div class="users">

        <div class="header">

            <p><span>{{ usersLength }}</span> Users</p>

        </div>

        <div class="users-list">

            <user 
            :key="user.umcn" 
            v-for="user in users" 
            :name="user.name + ' ' + user.surname"
            :gender="user.gender" />

        </div>

        <div class="footer"></div>

    </div>

</template>

<script>

    import user from './user'

    export default {
    
        name: 'users',

        computed: {

            users: { get() { return this.$store.state.users.users } },
            usersLength() { return this.users.length }

        },

        components: {

            user

        },

        created() {

            this.$store.dispatch( 'GET_USERS' )

        }

    }

</script>

<style scoped>

    .users {

        width: 100%;
        height: calc( 100vh - 80px );

        position: relative;

        display: grid;
        grid-template-rows: 100px auto 60px;
    }

    .header {

        width: 100%;
        height: 100px;

        position: relative;

        padding: 0px 20px;

        display: grid;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .users-list {

        width: calc( 100% + 17px );

        padding: 0px 2px;

        background-color: rgba(0,0,0,0.1);

        overflow-y: scroll;
    }

    .footer {

        border-top: 1px solid rgba(0,0,0,0.1);
    }

</style>


