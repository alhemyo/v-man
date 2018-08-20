<template>
    
    <div class="nav-bar">

        <img @click="logout" class="logout" src="/images/assets/icons/off.png" />

    </div>

</template>

<script>

    export default {
    
        name: 'nav-bar',

        methods: {

            logout() {

                let clearStorage = new Promise((resolve) => {

                    resolve( 

                        localStorage.clear(),
                        this.$store.commit('updateAuthToken', null),
                        this.$store.commit('resetAuthState'),
                        this.$store.commit('resetAuthUserState'),
                        this.$store.commit('resetUserProjectsState')
                        
                    )

                })

                clearStorage.then(() => {

                    this.$router.push('/login')

                })

            }
        }

    }

</script>


<style scoped>

    .nav-bar {

        width: 100%;
        height: 80px;

        position: relative;

        background-color: var(--dark);
        border-radius: 5px;
    }

    .logout {

        width: 80px;
        height: 80px;

        position: relative;
        float: right;

        padding: 28px;

        opacity: 0.3;

        cursor: pointer;
        

        transition: 0.2s ease;
    }

    .logout:hover {

        opacity: 1;
    }

</style>

