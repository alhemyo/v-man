<template>
    
    <div class="user-settings">

        <div class="settings-nav">

            <router-link class="settings-link" to="/dashboard/user-settings/add-user">Add user</router-link>

            <router-link class="settings-link" to="/dashboard/user-settings/edit-user">Edit user</router-link>

            <router-link class="settings-link" to="/dashboard/user-settings/delete-user">Delete user</router-link>

        </div>

        <div class="settings-loader">

            <router-view />

        </div> <!-- end .settings-loader -->

        <div class="settings-footer"></div>

        <pop />

    </div>

</template>

<script>

    import pop from '../../macro/pop'

    export default {
    
        name: 'user-settings',

        components: {
            pop
        }

    }

</script>

<style scoped>

    .user-settings {

        width: 100%;
        max-width: 1200px;
        height: 100%;

        position: relative;
        margin: auto;

        padding-top:40px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto 80px;

        overflow: hidden;
    }

    .settings-nav {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 10px;
    }

    .settings-link {

        font-size: 12px;
        text-align: center;
        color: var(--dark);

        padding: 22px 20px;

        border-bottom: 4px solid rgba(0,0,0,0.1);
    }

    .settings-link:hover {

        border-bottom: 4px solid rgba(0,0,0,0.2);
    }

    .router-link-active {

        border-bottom: 4px solid var(--red);
    }

    .router-link-active:hover {

        border-bottom: 4px solid var(--red);
    }

    .settings-loader {

        width: calc( 100% + 17px );
        height: 100%;
        min-height: 0;
        max-height: 100%;

        position: relative;

        padding-top: 40px;

        overflow-y: scroll;
    }

</style>


