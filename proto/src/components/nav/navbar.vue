<template>
    
    <div class="navbar">

        <div class="navbar-admin">

            <router-link class="navbar-link" to="#"><i class="fas fa-cog" /></router-link>

            <router-link class="navbar-link" to="#"><i class="fas fa-sliders-h" /></router-link>

            <router-link class="navbar-link" to="#"><i class="fas fa-users-cog" /></router-link>

        </div>

        <div class="navbar-default">

            <i class="fas fa-search" />

            <i @click="logout" class="fas fa-power-off" />

        </div>

    </div>
    
</template>

<script>

    export default {

        name: 'navbar',

        methods: {

            logout() {

                this.$store.dispatch( 'logout' )
                .then(() => {
                    this.$socket.emit('logout', this.$socket.id )
                    this.$router.push('/login')
                })
            }

        }

    }

</script>

<style>

    .navbar {

        width: 100%;
        height: 80px;

        position: relative;

        grid-column: 2/3;

        display: grid;
        grid-template-columns: min-content min-content;
        justify-content: space-between;

        background-color: var(--content);
        border-radius: 3px;
    }

    .navbar-admin {

        display: grid;
        grid-template-columns: 80px 80px 80px;
        grid-template-rows: 80px;
    }

    .navbar-default {

        display: grid;
        grid-template-columns: 80px 80px;
        grid-template-rows: 80px;
        align-items: center;
    }

    .navbar-link {

        width: 80px;
        height: 80px;

        display: grid;
        align-items: center;
    }

</style>
