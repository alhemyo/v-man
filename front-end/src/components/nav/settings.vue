<template>

    <div class="settings" :class="{ 'open-settings' : settings }">

        <h1>Settings</h1>

        <ul>

            <li><router-link class="settings-link" to="/dashboard/user-settings">user settings</router-link></li>
            
            <li><router-link class="settings-link" to="/dashboard/project-settings">project settings</router-link></li>

        </ul>

        <div class="settings-footer">

            <img @click="logout" src="/images/assets/icons/off.png" />

        </div>
        
    </div> <!-- end .settings -->
    
</template>

<script>

    export default {
        
        name: "settings",

        computed: {

            settings: { get() { return this.$store.state.settings } }
        },

        methods: {

            logout() {

                this.$store.dispatch('LOG_OUT')
            }
        }

    }

</script>

<style scoped>

    .settings {

        user-select: none;

        width: 200px;
        height: 100vh;

        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 10;

        transition: 0.3s ease;

        transform: translateX(200px);

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px auto 80px;

        background-color: var(--red);
    }

    .open-settings {

        transform: translateX(0px);
    }

    h1 {

        font-size: 16px;
        color: var(--white);
        text-align: right;
        user-select: none;

        padding: 30px 40px;
    }

    ul {

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px;

        padding: 40px 20px;
    }

    .settings-link {

        font-size: 12px;
        text-align: center;
        color: var(--white);
        user-select: none;

        padding: 24px 0px;

        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .settings-footer img {

        padding: 28px;

        cursor: pointer;
    }

</style>

