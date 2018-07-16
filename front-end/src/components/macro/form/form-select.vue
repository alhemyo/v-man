<template>
    
    <div class="form-select">

        <p class="form-select-name" :class="{ 'form-select-name-value' : value }">{{ name }}</p>

        <p class="form-select-value">{{ value }}</p>

        <img src="/images/assets/icons/r_arrow_dark.png" />

    </div>

</template>

<script>

    export default {

        props: {

            name: "",
            value: ""
        },
    
        name: 'form-select'

    }

</script>


<style scoped>

    .form-select {

        user-select: none;

        width: 150px;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: auto 40px;

        border: 1px solid var(--darkGray);
        border-radius: 30px;

        cursor: pointer;
    }

    .form-select-name {

        font-size: 12px;
        text-align: left;
        color: var(--dark);

        padding: 12px 20px;

        position: absolute;

        transition: 0.2s ease;
    }

    .form-select-name-value {

        color: var(--darkGray);

        top: -32px;
    }

    .form-select-value {

        font-size: 12px;
        text-align: left;
        color: var(--dark);

        padding: 12px 20px;
    }

</style>

