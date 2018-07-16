<template>
    
    <transition name="pop">

        <div class="pop-wrap"></div> <!-- end .pop -->

    </transition>

</template>

<script>

    export default {
    
        name: 'pop'

    }

</script>

<style scoped>

    .pop-wrap {

        width: 100%;
        height: 100%;

        position: absolute;

        background-color: rgba(0,0,0,0.1);
    }

</style>


