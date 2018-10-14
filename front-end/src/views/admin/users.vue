<template>
    
    <div class="users">

        <p :key="user.id" v-for="user in users">{{ user.name + ' ' + user.surname }}</p>

    </div>

</template>

<script>

    export default {

        name: 'users',

        computed: {

            users: { get() { return this.$store.state.users.users } }

        },

        created() {
            this.$store.dispatch('getUsers')
        }

    }

</script>

<style>

</style>
