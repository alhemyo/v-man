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

        display: grid;
        grid-template-columns: 40px auto 40px;
        grid-column-gap: 10px;
        align-items: center;

        background-color: white;
        border-bottom: 1px solid rgba(0,0,0,0.05);

        cursor: pointer;
    }

    .avatar {

        padding: 8px;

        opacity: 0.8;
    }

    .user-name {

        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;

        overflow: hidden;
    }

</style>


