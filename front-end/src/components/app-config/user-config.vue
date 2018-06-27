<template>
    
    <div class="user-config">

        <div class="user-config-header"></div>

        <div class="user-config-nav">

            <router-link to="/dashboard/user-config/add-user" class="user-config-link">Add user</router-link>

            <router-link to="/dashboard/user-config/edit-user" class="user-config-link">Edit user</router-link>

            <router-link to="/dashboard/user-config/delete-user" class="user-config-link">Delete user</router-link>

        </div>

        <transition mode="out-in" name="side-fade">

            <router-view class="user-config-view"></router-view>

        </transition>

        <div class="user-config-footer"></div> <!-- end .user-config-footer -->

    </div>

</template>

<script>

    export default {
        
        name: 'user-config',

        mounted() {
            this.$router.push({ name: 'add-user' })
        }

    }

</script>

<style scoped>

    .side-fade-enter-active, .side-fade-leave-active {

        transition: all 0.2s ease;
    }

    .side-fade-enter {

        transform: translateX(30px);
        opacity: 0;
    }

    .side-fade-leave-to {

        transform: translateX(-30px);
        opacity: 0;
    }

    .user-config {

        width: 100%;
        height: 100%;

        position: relative;

        padding: 0px 40px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 60px auto 80px;
    }

    .user-config-nav {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 10px;
        align-items: center;
    }

    .user-config-link {

        font-size: 14px;
        color: var(--dark);
        text-align: center;

        padding: 20px 0px;

        border-bottom: 4px solid rgba(0,0,0,0.05);

        transition: all 0.3s ease;
    }

    .user-config-link:hover {

        border-bottom: 4px solid var(--gray);
    }

    .router-link-exact-active {

        border-bottom: 4px solid var(--red);
    }

    .router-link-exact-active:hover {

        border-bottom: 4px solid var(--red);
    }
    
    .user-config-view {

        width: 100%;
        min-height: 0;
        height: auto;
        max-height: 100%;

        overflow-y: auto;
    }

    .user-config-footer {

        height: 80px;

        z-index: 5;

        background-color: var(--white);
    }

</style>


