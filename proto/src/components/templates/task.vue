<template>
    
    <div class="task">

        <div class="header">

            <div class="priority"></div>

            <p class="default-text">{{ name }}</p>

        </div>

        <div class="body"></div>

        <div class="footer"></div>

    </div>

</template>

<script>

    export default {

        name: 'task',

        props: {
            name: String
        }

    }

</script>

<style scoped >

    .task {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 4px;

        display: grid;
        grid-template-rows: 40px 400px 40px;

        background-color: var(--content);
        border-radius: 3px;

        overflow: hidden;
    }

    .task:nth-child(1) {

        margin-top: 0px;
    }

    /* HEADER CSS */

    .header {

        display: grid;
        grid-template-columns: 40px 290px;
        grid-template-rows: 40px;
        align-items: center;
    }

    .priority {

        width: 4px;
        height: 14px;

        justify-self: center;

        background-color: var(--icon);
        border-radius: 3px;
    }

</style>
