<template>
    
    <div class="note" :key="user" >

        <div class="note-header">

            <img v-if="!client" :src=" noteUser.gender === 'female' ? '/images/janeDoe.png' : '/images/johnDoe.png' " />

            <div class="note-client" v-if="client">{{ clientName }}</div>

            <p class="note-user">{{ !client ? noteUser.name + ' ' + noteUser.surname : clientName }}</p>

            <p class="note-date date">{{ formatDate }}</p>

        </div>

        <div class="note-message">

            <i class="material-icons">note</i>

            <div>

                <p class="message" :class="{ 'client-message' : client }" >{{ message }}</p>

            </div>

        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    export default {

        name: 'note',

        props: {

            client: Boolean,
            clientName: String,
            user: String,
            date: String,
            message: String,
            visible: Boolean

        },

        computed: {

            noteUser() { return this.$store.state.users.users.find(user => { return user.umcn === this.user }) },

            formatDate() { return moment(this.date).format('DD MMM YYYY - HH:mm:ss') }

        }

    }

</script>

<style scoped>

    .note {

        width: 100%;
        height: auto;

        position: relative;
        z-index: 1;

        padding: 20px 0px;

        display: grid;
        grid-template-rows: 30px auto;
        grid-row-gap: 10px;
        align-items: center;

        border-bottom: 1px solid rgba( 0, 0, 0, 0.1 );
    }

    .note:nth-last-child(1) {

        border: none;
    }

    .note-header {

        font-size: 12px;
        color: var(--dark);
        white-space: nowrap;

        z-index: 1;

        display: grid;
        grid-template-columns: 30px auto min-content;
        grid-template-rows: 30px;
        grid-column-gap: 10px;
        align-items: center;
    }

    .note-client {

        font-size: 12px;
        text-align: center;
        color: white;

        width: 30px;
        height: 30px;

        display: grid;
        align-items: center;

        background-color: var(--red);
        border-radius: 30px;

    }

    .note-date {

        font-size: 10px;
    }

    .note-message {

        width: 100%;
        height: auto;

        position: relative;

        display: grid;
        grid-template-columns: 30px auto;
        grid-column-gap: 10px;
    }

    .note-message i {

        font-size: 20px;
        text-align: center;
        color: rgba( 0, 0, 0, 0.3 );

        width: 30px;

        position: relative;
        float: left;

        padding: 10px 0px;

        align-self: flex-start;
    }

    .message {

        font-size: 12px;
        white-space: normal;
        line-height: 1.4;

        position: relative;
        float: left;

        padding: 14px;

        background-color: rgba( 0, 0, 0, 0.1 );
        border-radius: 5px;
    }

    .client-message {

        color: white;

        background-color: var(--red);
    }


</style>
