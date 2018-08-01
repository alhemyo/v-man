<template>
    
    <div class="user">{{ userProfile.name + ' ' + userProfile.surname }}</div> <!-- end .user -->

</template>

<script>
    export default {
        
        name: 'user',
        computed: {
            userProfile: { get() { return this.$store.state.userProfile.userProfile } }
        }
    }
</script>

<style scoped>

</style>


