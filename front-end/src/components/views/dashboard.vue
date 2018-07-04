<template>
    
    <div id="dashboard" class="dashboard">
       
        <nav-bar />
        <side-bar />

        <div class="loader">

            <router-view></router-view>

        </div>
        
    </div>

</template>

<script>

    import navBar from '../nav/nav-bar'
    import sideBar from '../nav/side-bar'
    import formSelect from '../macro/form-select'
    import pop from '../macro/pop'

    export default {
    
        name: 'dashboard',

        components: {
            navBar,
            sideBar,
            formSelect,
            pop
        },

        beforeMount() {
            this.$store.dispatch( 'GET_USER' )
        }
    }

</script>

<style scoped>

    .dashboard {

        width: 100%;
        height: 100vh;

        position: absolute;
        z-index: 0;

        display: grid;
        grid-template-columns: 300px auto;
        grid-template-rows: 80px auto;

        overflow: hidden;
    }

    .loader {

        position: relative;

        padding: 0px 40px;
    }

</style>