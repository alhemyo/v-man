<template>

    <div class="settings" :class="{ 'open-settings' : settings }">

        <p class="settings-title">SETTINGS</p>

        <ul>

            <li><router-link class="settings-item" to="/dashboard/user-config">user configuration</router-link></li>

            <li><router-link class="settings-item" to="/dashboard/project-config">project configuration</router-link></li>

        </ul>

        <div class="settings-footer" @click="logout">

            <img src="/images/assets/icons/off.png" />

        </div>

    </div>
    
</template>

<script>

    export default {
        
        name: "settings",

        computed: {
            settings: { get() { return this.$store.state.settings } }
        },

        methods: {
            logout() {
				this.$store.dispatch('LOGOUT')
				.then(response => {
                    this.$router.push({ name: 'login' })
                    this.$store.commit('updateSettings', false)
				})
				.catch(error => {
					console.log(error)
				})
			}
        }

    }

</script>

<style scoped>

    .settings {

        width: 200px;
        height: 100vh;

        position: absolute;
        right: 0px;
        z-index: 5;

        display: grid;
        grid-template-rows: 80px auto 80px;

        transform: translateX(200px);

        background-color: var(--red);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);

        transition: all 0.5s ease;
    }

    .open-settings {

        transform: translateX(0px);
    }

    .settings-title {

        font-size: 14px;
        color: var(--white);

        width: 200px;
        height: 80px;

        padding: 32px 80px;
        padding-right: 0px;
    }

    .settings > ul > li {

        font-size: 12px;
        color: var(--white);

        display: grid;
        grid-template-rows: 60px;
        justify-content: center;
        align-items: center;

        padding: 0px 40px;
    }

    .settings-item {

        padding: 20px 0px;

        color: rgba(255,255,255,0.5);

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .settings-item:hover {

        color: var(--white);
    }

    .settings-footer {

        display: grid;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

</style>

