<template>
    
    <div class="form-radio">

        <p class="form-radio-name">{{ name }}</p>

        <div class="form-radio-value"></div>    
        
    </div> <!-- end .form-radio -->

</template>

<script>

    export default {

        props: {

            name: ''
        },
    
        name: 'form-radio'

    }

</script>

<style scoped>

    .form-radio {

        width: 150px;
        height: 40px;

        display: grid;
        grid-template-columns: auto 40px;
        grid-template-rows: 40px;

        border: 1px solid var(--darkGray);
        border-radius: 30px;

        cursor: pointer;
    }

    .form-radio-name {

        font-size: 12px;
        color: var(--dark);

        padding: 12px 20px;
    }

    .form-radio-value {

        width: 20px;
        height: 20px;

        background-color: var(--gray);
        border: 1px solid var(--darkGray);
        border-radius: 30px;

        align-self: center;
        justify-self: center;
    }

</style>


