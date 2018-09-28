<template>
    
    <div v-show="visible" class="note">

        <div class="note-header">

            <img src="/images/janeDoe.png" />

            <p>{{ noteUser[0].name + ' ' + noteUser[0].surname }}</p>

            <p>{{ formatDate }}</p>

        </div>

        <div class="note-message">

            <p class="message" >{{ message }}</p>

        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    export default {

        name: 'note',

        props: {

            client: Boolean,
            user: String,
            date: String,
            message: String,
            visible: Boolean

        },

        computed: {

            users: { get() { return this.$store.state.users.users } },
            noteUser() { return this.users.filter( user => { return user.umcn === this.user } ) },
            formatDate() { return moment(this.date).format("DD MMM YYYY - HH:mm:ss") }

        }

    }

</script>

<style scoped>

    .note {

        width: 100%;
        height: auto;

        padding: 20px 0px;

        display: grid;
        grid-template-rows: 20px auto;
        grid-row-gap: 10px;
        align-items: center;

        border-bottom: 1px solid rgba( 0, 0, 0, 0.05 );
    }

    .note-header {

        display: grid;
        grid-template-columns: 20px auto min-content;
        grid-template-rows: 20px;
        grid-column-gap: 10px;
        align-items: center;
    }

    .note-header p {

        font-size: 11px;
        white-space: nowrap;
    }

    .message {

        font-size: 12px;

        padding: 14px 20px;

        background-color: rgba( 0, 0, 0, 0.05 );
        border-radius: 5px;
    }

</style>
