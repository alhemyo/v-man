<template>
    
    <div class="mainview">

        <loader :condition="true" />

        <router-view name="mainview" />

    </div>

</template>

<script>

    import loader from '../macro/loader'

    export default {
    
        name: 'mainview',

        components: {

            loader
        }

    }

</script>

<style>

    .mainview {

        width: 100%;
        height: 100%;

        position: relative;
    }

</style>


