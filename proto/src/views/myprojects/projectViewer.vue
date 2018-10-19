<template>
    
    <div class="myprojects-view">

        <transition mode="out-in" name="routes">

            <router-view :key="$route.fullPath" />

        </transition>

    </div>

</template>

<script>

export default {

    name: 'myprojects-view'

}

</script>

<style>


</style>
