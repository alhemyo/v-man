<template>
    
    <div class="user-events">

        <calendar />

    </div>

</template>

<script>

    import calendar from '../../macro/calendar'

    export default {

        name: 'user-events',

        components: {

            calendar
        }

    }

</script>

<style scoped>

    .user-events {

        width: 100%;
        height: auto;

        color: white;
    }

</style>


