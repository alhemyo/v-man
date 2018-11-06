<template>
    
    <div class="project">

        <div class="priority" :class="{ mid: priority === 2, high: priority === 3 }" ></div>

        <p class="default-text project-info">{{ name }}</p>

        <p class="default-text project-info">{{ state }}</p>

        <p class="default-text project-info">{{ users + ' Users' }}</p>

    </div>

</template>

<script>

    export default {

        name: 'project',

        props: {
            id: Number,
            name: String,
            priority: Number,
            users: Number
        },

        data() {
            return {
                state: 'active'
            }
        }

    }

</script>

<style scoped >

    .project {

        width: 100%;
        height: 60px;

        position: relative;
        margin-top: 4px;

        display: grid;
        grid-template-columns: 40px 290px 100px 100px;
        grid-template-rows: 60px;
        align-items: center;

        background-color: var(--content);
        border-radius: 3px;
    }

    .project:nth-child(1) {

        margin-top: 0px;
    }

    .priority {

        width: 4px;
        height: 14px;

        justify-self: center;

        background-color: var(--icon);
        border-radius: 4px;
    }

    .mid {

        background-color: var(--lightblue);
    }

    .high {

        background-color: var(--blue);
    }

    .project-info {

        text-align: center;

        padding: 0px 10px;
    }

    .project-info:nth-child(2) {

        text-align: left;
    }

</style>
