<template>
    
    <div class="user">

        <img class="avatar" :src="avatar" />

        <p class="user-name" >{{ name }}</p>

        <div class="settings"></div>

    </div>

</template>

<script>

    export default {
    
        name: 'user',

        props: {

            name: String,
            avatar: String

        }

    }

</script>

<style scoped>

    .user {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 4px;

        display: grid;
        grid-template-columns: 40px auto 40px;
        align-items: center;

        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;

        cursor: pointer;
    }

    .avatar {

        padding: 5px;

        opacity: 0.8;
    }

    .user-name {

        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;

        overflow: hidden;
    }

</style>


