<template>
    
    <div class="date">

        <p class="date-name">{{ name }}</p>

        <input class="date-input" type="text" placeholder="dd" maxlength="2" v-model="day" />

        <input class="date-input" type="text" placeholder="mm" maxlength="2" v-model="month" />

        <input class="date-input" type="text" placeholder="yyyy" maxlength="4" v-model="year" />

    </div>

</template>

<script>

    export default {
    
        name: 'date-input',

        props: {

            name: String,
            day: String,
            month: String,
            year: String

        }

    }

</script>

<style scoped>

    .date {

        width: 100%;
        height: 50px;

        display: grid;
        grid-template-columns: 1fr 1fr 1.5fr;
        grid-template-rows: 20px 30px;
    }

    .date-name {

        font-size: 12px;
        color: var(-dark);

        grid-row: 1/2;
        grid-column: 1/5;
    }

    .date-input {

        font-family: var(--default);
        font-size: 12px;
        font-weight: 500;
        color: var(--dark);
        text-align: center;

        width: 100%;
        height: 30px;

        border: 1px solid rgba(0,0,0,0.1);
    }

    .date-input:nth-child(2) {

        border-right: none;
        border-radius: 5px 0px 0px 5px;
    }

    .date-input:nth-child(4) {

        border-left: none;
        border-radius: 0px 5px 5px 0px;
    }

</style>


