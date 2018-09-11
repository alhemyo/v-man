<template>
    
    <div class="project">

        <div class="header">

            <div class="priority" :class="{ mid : ( priority === 'mid' ), high: ( priority === 'high' ) }"></div>

            <p class="name">{{ name }}</p>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'project',

        props: {

            name: String,
            priority: String

        }

    }

</script>

<style scoped>

    .project {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 2px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40px;

        background-color: white;
    }

    .header {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: 20px 200px;
        align-items: center;
    }

    .priority {

        width: 2px;
        height: 14px;

        justify-self: center;

        background-color: gray;
        border-radius: 4px;
    }

    .mid {

        background-color: var(--yellow);
    }

    .high {

        background-color: var(--red);
    }

    .name {

        font-size: 12px;

        padding: 0px 10px;
    }

</style>


