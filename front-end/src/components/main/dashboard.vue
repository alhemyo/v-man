<template>
    
    <div class="dashboard">

        <side-bar />

    </div>
    
</template>

<script>

    import sideBar from '../nav/side-bar/side-bar'
    import loader from '../widgets/loader'

    export default {

        name: 'dashboard',

        components: {
            sideBar,
            loader
        }
        
    }

</script>

<style>

    .dashboard {

        width: 100%;
        height: 100vh;

        position: relative;

        display: grid;
        grid-template-columns: min-content auto;
        grid-template-rows: 100vh;
    }

</style>


