<template>
    
    <div class="test">

        {{ task }}

    </div>

</template>

<script>

export default {

    computed: {
        task: {
            get() { return this.$store.state.socket.task }
        }
    }

}

</script>

<style>

    .test {
        
        text-align: center;

        width: 100%;
        height: 100%;

        display: grid;
        align-items: center;
    }

</style>
