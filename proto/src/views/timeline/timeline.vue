<template>
    
    <div class="timeline">Timeline {{ today }}</div>

</template>

<script>

    import moment from 'moment'

    export default {

        name: 'timeline',

        data() {
            return {

                today: moment().format( 'DD MMM YYYY - HH:mm:ss' )

            }
        }

    }

</script>

<style>

</style>
