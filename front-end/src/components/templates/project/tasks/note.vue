<template>
    
    <div class="note" :key="user" >

        <div class="note-header">

            <img src="/images/janeDoe.png" />

            <p class="note-user">{{ noteUser.surname }}</p>

            <p class="note-date">{{ date }}</p>

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

            noteUser() { return this.user ? this.$store.state.users.users.find(user => { return user.umcn === this.user }) : false }

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
        align-items: center;

        border-bottom: 1px solid rgba( 0, 0, 0, 0.05 );
    }

    .note-header {

        font-size: 14px;
        color: var(--dark);
        white-space: nowrap;

        display: grid;
        grid-template-columns: 40px auto min-content;
        grid-template-rows: 30px;
        align-items: center;
    }

</style>
