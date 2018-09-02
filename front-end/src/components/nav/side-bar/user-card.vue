<template>
    
    <div class="user-card">

        <div class="avatar-wrap">

            <img class="avatar" :src="(gender === 'female') ? female : male" />

            <div class="status"></div>

        </div>

        <div class="info" :class="{ mini : miniSidebar }">

            <p class="user-info name">{{ name }}</p>

            <p class="user-info position">{{ position }}</p>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'user-card',

        data() {

            return {

                male: "/images/johnDoe.png",
                female: "/images/janeDoe.png"

            }

        },

        computed: {

            miniSidebar: { get() { return this.$store.state.miniSidebar } },

            name: { get() { return this.$store.state.thisUser.name + ' ' + this.$store.state.thisUser.surname } },
            position: { get() { return this.$store.state.thisUser.position } },
            gender: { get() { return this.$store.state.thisUser.gender } }

        }

    }

</script>

<style scoped>

    .user-card {

        width: 100%;
        height: 100px;

        position: relative;

        display: grid;
        grid-template-columns: minmax( 80px, 100px ) 180px;

        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .avatar-wrap {

        position: relative;

        padding: 20px;

        display: grid;
        align-items: center;

        transition: 0.3s ease;
    }

    .status {

        width: 15px;
        height: 15px;

        position: absolute;
        left: 50%;
        bottom: 12px;

        transform: translateX(-50%);

        background-color: var(--green);
        border: 2px solid var(--white);
        border-radius: 15px;
    }

    .info {

        padding: 20px 0px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 16px 20px;
        align-content: center;
        align-items: center;
        grid-row-gap: 10px;

        transition: 0.2s ease;
    }

    .user-info {

        font-size: 14px;
        font-weight: 500;
        color: rgba(0,0,0,0.5);
    }

    .name {

        font-size: 14px;
        font-weight: 600;
        color: var(--dark);
    }

    .mini {

        opacity: 0;
    }

</style>


