<template>
    
    <div class="note">

        <div class="note-head">

            <div class="avatar">

                <img v-if="!client" src="/images/janeDoe.png" />

                <div v-if="client" class="client">

                    <p>{{ project.client }}</p>

                </div>

            </div>

            <p>{{ client ? project.client : getUser[0].name + ' ' + getUser[0].surname }}</p>

            <p>{{ formatDate }}</p>

        </div>

        <div class="note-body">

            <i class="fas fa-sticky-note" />

            <div>

                <p class="note-message" :class="{ 'client-message' : client }" >{{ message }}</p>

            </div>

        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    export default {

        name: 'note',

        props: {

            user: String,
            message: String,
            client: Boolean,
            date: String

        },

        computed: {

            formatDate() { return moment(this.date).format("DD MMM YYYY - HH:mm") },
            getUser() { return this.$store.state.users.users.filter(user => { return user.umcn === this.user }) },
            project() { return this.$store.state.myProjects.myProjects.find((project) => { return project.id === Number( this.$route.params.id ) }) || {} }

        }

    }

</script>

<style scoped>

    .note {

        width: 100%;
        height: auto;

        padding: 20px 0px;

        display: grid;
        grid-template-rows: 40px auto;
        grid-row-gap: 10px;

        border-bottom: 1px solid var(--lightgray);
    }

    .note-head {

        height: 40px;

        display: grid;
        grid-template-columns: 40px min-content auto;
        align-items: center;
    }

    .avatar {

        width: 40px;
        height: 40px;

        padding: 4px;
    }

    .note-head p {

        font-size: 10px;
        font-weight: 500;
        text-align: right;
        color: var(--darkgray);
    }

    .note-head p:nth-child(2) {

        font-size: 12px;
        white-space: nowrap;

        padding: 0px 14px;
    }

    .note-body {

        display: grid;
        grid-template-columns: 40px auto;

    }

    .note-body i {

        width: 40px;
    }

    .note-message {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);
        line-height: 1.3;

        float: left;

        padding: 14px;

        background-color: var(--lightgray);
        border-radius: 3px;
    }

    .client-message {

        color: white;

        background-color: var(--darkgray);
    }

    .client {

        width: 32px;
        height: 32px;

        display: grid;
        align-items: center;
        justify-content: center;

        background-color: var(--darkgray);

        border-radius: 100%;
    }

    .client p {

        color: white;
    }

</style>
