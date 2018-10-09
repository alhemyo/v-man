<template>
    
    <div class="user-badge">

        <div class="header">

            <div class="avatar">

                <img src="/images/janeDoe.png" />

            </div>

            <p class="name" >{{ name }}</p>

            <div class="settings">

                <i class="fas fa-bars" />

            </div>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'user-badge',

        props: {

            id: String,
            name: String

        }

    }

</script>

<style scoped>

    .user-badge {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 4px;

        background-color: white;
        border-radius: 3px;
    }

    .header {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: 40px auto 40px;
        align-items: center;
    }

    .avatar {

        width: 40px;
        height: 40px;

        padding: 5px;
    }

    .name {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);
        white-space: nowrap;
        text-overflow: ellipsis;

        padding: 0px 10px;

        overflow: hidden;
    }

    .settings {

        width: 40px;
        height: 40px;

        display: grid;
        align-items: center;
    }

</style>
