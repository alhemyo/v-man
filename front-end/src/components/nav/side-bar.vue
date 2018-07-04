<template>
    
    <div class="side-bar">

        <div class="user-card">

            <div class="avatar-wrap">

                <img src="/images/janeDoe.png" />

            </div>

            <div class="user-info-wrap">

                <p class="user-info user-info-name">{{ username }}</p>
                <p class="user-info">{{ position }}</p>
                <p class="user-info user-info-status">online</p>
                <p class="user-info">06:14:45</p>

            </div>

        </div> <!-- end .user-card -->

        <div class="project-list-title">

            MY PROJECTS

        </div> <!-- end .project-list-title -->

        <div class="project-list-wrap"></div> <!-- end .project-list-wrap -->

    </div>

</template>

<script>

    export default {
        
        name: 'side-bar',

        computed: {
            username: { get() { return this.$store.state.users.user.name + ' ' + this.$store.state.users.user.surname } },
            position: { get() { return this.$store.state.users.user.position } }
        }

    }

</script>

<style scoped>

    .side-bar {

        width: 300px;
        height: calc(100vh - 80px);

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 180px 60px auto 80px;

        background-color: var(--white);

        border-right: 1px solid rgba(0,0,0,0.05);
    }

    .user-card {

        display: grid;
        grid-template-columns: 100px auto;
        grid-template-rows: 100px;
        grid-column-gap: 20px;

        padding: 40px;
    }

    .avatar-wrap {

        border-radius: 100%;

        overflow: hidden;
    }

    .user-info-wrap {

        display: grid;
        grid-template-rows: repeat(min-content);
        align-content: space-around;

        padding: 6px 0px;
    }

    .user-info {

        font-size: 12px;
        color: var(--black);
    }

    .user-info-name {

        font-size: 14px;
        font-weight: 600;
    }

    .user-info-status {

        color: var(--green);
    }

    .project-list-title {

        font-size: 14px;
        font-weight: 600;
        color: var(--black);

        display: grid;
        grid-template-rows: 60px;
        justify-content: center;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

</style>


