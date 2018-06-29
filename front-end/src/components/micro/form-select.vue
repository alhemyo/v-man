<template>

    <div class="form-select">

        <slot name="title">Select</slot>

    </div>
    
</template>

<script>

    export default {
        
        name: 'form-select'

    }

</script>

<style scoped>

    .form-select {

        width: 100%;
        height: 40px;

        position: relative;

        background-color: var(--gray);
        border-radius: 30px;
    }
    
    .form-select > * {

        color: var(--dark);

        padding: 13px 20px;
    }


</style>


