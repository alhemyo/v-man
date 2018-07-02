<template>

    <div class="form-select">

        <slot name="title">Select</slot>

        <slot class="value" name="value">value</slot>

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

        display: grid;
        grid-template-columns: minmax(min-content, 1fr) min-content;
        align-items: center;

        background-color: var(--gray);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;
    }
    
    .form-select > * {

        color: var(--dark);

        padding: 0px 13px;
    }

    .form-select > *:nth-child(2){

        font-size: 11px;
        color: black;

        border-left: 1px solid rgba(0,0,0,0.1);
    }


</style>


