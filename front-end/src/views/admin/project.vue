<template>
    
    <div class="project">

        <div class="header" >

            <div class="priority" :class="{ mid : priority === 'mid', high : priority === 'high' }" ></div>

            <p class="project-info">{{ name }}</p>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'project',

        props: {
            priority: String,
            name: String
        }

    }

</script>

<style scoped >

    .project {

        width: 100%;
        height: 60px;

        background-color: white;

        margin-top: 4px;

        border-radius: 3px;
    }

    .header {

        width: 100%;
        height: 60px;

        display: grid;
        grid-template-columns: 40px 290px;
        grid-template-rows: 60px;
        align-items: center;
    }

    .priority {

        width: 4px;
        height: 16px;

        justify-self: center;

        background-color: var(--darkgray);
        border-radius: 3px;
    }

    .mid {

        background-color: var(--yellow);
    }

    .high {

        background-color: var(--red);
    }

    .project-info {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);
    }

</style>
