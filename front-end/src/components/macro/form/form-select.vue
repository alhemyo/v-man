<template>
    
    <div class="form-select">

        <p>priority</p>

        <div class="options">

            <div class="option low" @click="low" ></div>

            <div class="option mid"></div>

            <div class="option high"></div>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'form-select',

        props: [ 'priority' ],

        methods: {

            low() {

                this.priority = 'low'

                this.$emit( 'click', $event.target.priority )
            }

        }

    }

</script>

<style scoped>

    .form-select {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }

    .form-select p {

        font-size: 12px;
        text-align: center;
        white-space: nowrap;
    }

    .options {

        height: 40px;

        display: grid;
        grid-template-columns: 14px 14px 14px;
        grid-column-gap: 10px;
        justify-content: center;
        align-items: center;

        background-color: white;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;
    }

    .option {

        width: 14px;
        height: 14px;

        background-color: white;
        border: 2px solid gray;
        border-radius: 20px;

        cursor: pointer;
    }

    .low {

        border-color: gray;
    }

    .mid {

        border-color: var(--yellow);
    }

    .high {

        border-color: var(--red);
    }

</style>


