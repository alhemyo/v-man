<template>
    
    <div class="users">

        <div class="header">

            <p><span>{{ usersLength }}</span> Users</p>

        </div>

        <div class="users-nav">

            <i class="material-icons">person</i>

            <p>Name</p>

        </div>

        <div class="users-list">

            <loader :condition="loading" />

            <transition-group mode="in-out" name="list">

                <user 
                :key="user.umcn" 
                v-for="user in users" 
                :name="user.name + ' ' + user.surname"
                :gender="user.gender" />

            </transition-group>

        </div>

        <div class="footer"></div>

    </div>

</template>

<script>

    import user from './user'
    import loader from '../../../macro/loader'

    export default {
    
        name: 'users',

        computed: {

            users: { get() { return this.$store.state.users.users } },
            usersLength() { return this.users.length },
            loading() { return this.usersLength > 0 ? false : true }

        },

        components: {

            user,
            loader

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
        grid-template-rows: 100px 60px auto 60px;
    }

    .header {

        width: 100%;
        height: 100px;

        position: relative;

        padding: 0px 20px;

        display: grid;
        align-items: center;
    }

    .users-nav {

        color: rgba(0,0,0,0.5);

        padding: 0px 4px;

        display: grid;
        grid-template-columns: 40px 200px;
        align-items: center;
    }

    .users-nav > * {

        border-right: 1px solid rgba(0,0,0,0.1);
    }

    .users-nav p {

        font-size: 12px;

        padding: 10px 10px;

    }

    .users-nav .material-icons {

        text-align: center;

        width: 40px;

        padding: 10px px;

        justify-self: center;
    }

    .users-list {

        width: calc( 100% + 17px );

        padding: 0px 4px;

        background-color: rgba(0,0,0,0.1);

        overflow-y: scroll;
    }

    .footer {

        border-top: 1px solid rgba(0,0,0,0.1);
    }

</style>


