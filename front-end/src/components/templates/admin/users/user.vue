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
        height: 60px;

        position: relative;
        margin-top: 2px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px;

        background-color: white;
    }

    .header {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 60px 200px;
        align-items: center;
    }

    .avatar {

        padding: 14px;
    }

    .name {

        font-size: 12px;

        padding: 0px 20px;
    }

</style>


