<template>
    
    <div class="nav-bar">{{ date }}</div>

</template>

<script>

    import moment from 'moment'

    export default {
    
        name: 'nav-bar',

        data() {

            return {

                date: moment().format('DD MMM YYYY - HH.mm.ss')

            }

        }

    }

</script>

<style scoped>

    .nav-bar {

        text-align: right;
        color: rgba(0,0,0,0.3);

        width: 100%;
        height: 80px;

        position: relative;

        padding: 32px;

        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

</style>


