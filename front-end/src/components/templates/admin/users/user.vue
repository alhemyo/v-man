<template>
    
    <div class="user">

        <div class="header">

            <img class="avatar" :src="userAvatar" />

            <p class="name">{{ name ? name : '/' }}</p>

            <p class="position">{{ position ? position : '/' }}</p>

            <p class="admin">{{ admin === "true" ? adminType : 'regular user' }}</p>

        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    export default {
    
        name: 'user',

        props: {

            name: String,
            avatar: String,
            gender: String,
            birthday: String,
            position: String,
            admin: String,
            adminType: String

        },

        computed: {

            userAvatar() { return this.gender === 'male' ? '/images/johnDoe.png' : '/images/janeDoe.png' },
            formatBirthday() { return moment(this.birthday).format("DD MM YYYY") }

        }

    }

</script>

<style scoped>

    .user {

        width: 100%;
        height: 60px;

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40px;

        background-color: white;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .header {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 40px 200px 80px 110px;
        align-items: center;
    }

    .header > p {

        font-size: 12px;
        text-align: center;
        color: rgba(0,0,0,0.5);

        padding: 4px 10px;
    }

    .avatar {

        padding: 8px;
    }

    .header .name {

        color: var(--dark);
        font-weight: 500;
        text-align: left;
    }

</style>


