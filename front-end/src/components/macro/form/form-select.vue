<template>
    
    <div class="form-select">

        <p>priority</p>

        <label class="options">

            <div class="custom-options">

                <div class="custom-option custom-low" ></div>

                <div class="custom-option custom-mid" ></div>

                <div class="custom-option custom-high" ></div>

            </div>

            <input 
            type="radio" 
            name="option" 
            value="low" 
            class="option low"
            id="low"
            @change="$emit( 'change', $event.target.value )" />

            <input 
            type="radio" 
            name="option" 
            value="mid" 
            class="option mid"
            @change="$emit( 'change', $event.target.value )" />

            <input 
            type="radio" 
            name="option" 
            value="high" 
            @change="$emit( 'change', $event.target.value )" />

        </label>

    </div>

</template>

<script>

    export default {
    
        name: 'form-select',

        props: [ 'priority' ]

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

        position: relative;

        display: grid;
        grid-template-columns: 14px 14px 14px;
        grid-column-gap: 10px;
        justify-content: center;
        align-items: center;

        background-color: white;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;

        overflow: hidden;
    }

    .option {

        z-index: 1;

        opacity: 0;
    }

    .custom-options {

        width: 100%;
        height: 100%;

        position: absolute;
        top: 0px;
        left: 0px;

        display: grid;
        grid-template-columns: 14px 14px 14px;
        grid-column-gap: 10px;
        justify-content: center;
        align-items: center;

        background-color: white;

        pointer-events: none;
    }

    .custom-option {

        width: 14px;
        height: 14px;

        border: 2px solid gray;
        border-radius: 30px;
    }

    .custom-mid {

        border-color: var(--yellow);
    }

    .custom-high {

        border-color: var(--red);
    }

    .low-checked {

        background-color: gray;
    }

    .mid-checked {

        background-color: var(--yellow);
    }

    .high-checked {

        background-color: var(--red);
    }

</style>


