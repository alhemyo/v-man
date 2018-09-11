<template>
    
    <div class="user">

        <div class="header">

            <img class="avatar" :src="userAvatar" />

            <p class="name">{{ name }}</p>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'user',

        props: {

            name: String,
            avatar: String,
            gender: String

        },

        computed: {

            userAvatar() { return this.gender === 'male' ? '/images/johnDoe.png' : '/images/janeDoe.png' }

        }

    }

</script>

<style scoped>

    .user {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 2px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40px;

        background-color: white;
    }

    .header {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: 40px 200px;
        align-items: center;
    }

    .header > * {

        border-right: 1px solid rgba(0,0,0,0.1);
    }

    .avatar {

        padding: 8px;
    }

    .name {

        font-size: 12px;

        padding: 2px 10px;
    }

</style>


