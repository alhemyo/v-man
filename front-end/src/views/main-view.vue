<template>
    
    <div class="main-view">

        <transition name="views" mode="out-in" >

            <router-view :key="this.$route.fullPath" />

        </transition>

    </div>

</template>

<script>

    export default {

        name: 'main-view'

    }

</script>

<style scoped>

    .main-view {

        width: 100%;
        height: calc( 100vh - 80px );

        padding: 4px;
        padding-top: 2px;
    }

</style>
