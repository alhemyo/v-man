<template>
    
    <div class="form-select form-input">

        <p class="name">{{ value ? value : name }}</p>

        <i class="material-icons">more_vert</i>

        <div class="pop-up">

            <p class="option" :key="index" v-for="(option, index) in options" >option</p>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'form-select',

        props: {

            name: String,
            value: String,
            options: Array

        }

    }

</script>

<style scoped>

    .form-select {

        color: rgba(0,0,0,0.5);
        user-select: none;
        text-align: center;

        position: relative;

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        cursor: pointer;
    }

    .form-select .material-icons {

        font-size: 18px;
    }

    .pop-up {

        width: calc( 100% + 2px );
        height: auto;
        max-height: 400px;

        position: absolute;
        bottom: -1px;
        left: -1px;

        background-color: white;
        border: 1px solid rgba(0,0,0,0.1);
    }

    .option {

        padding: 20px;
    }

</style>


