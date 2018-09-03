<template>
    
    <div class="project-card">

        <div
        v-show="priority"
        class="priority"
        :class="{

            high : ( priority === 'high' ),
            mid : ( priority === 'mid' )

        }"></div>

        <p v-cloak class="project-info name">{{ name }}</p>

        <p v-show="client" class="project-info">{{ client + ' / ' + deadline }}</p>

    </div>

</template>

<script>

    export default {
    
        name: 'project-card',

        props: {

            name: String,
            client: String,
            deadline: String,
            priority: String

        }

    }

</script>

<style scoped>

    [v-cloak] {

        display: none;
    }

    .project-card {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: 20px auto;
        grid-template-rows: 20px 20px;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        align-items: center;
        align-content: center;
    }

    .priority {

        width: 4px;
        height: 44px;

        grid-row: 1/3;
        justify-self: center;

        background-color: gray;
        border-radius: 4px;
    }

    .high {

        background-color: var(--red);
    }

    .mid {

        background-color: var(--yellow);
    }

    .project-info {

        font-size: 12px;
        color: var(--dark);
        white-space: nowrap;
    }

    .name {

        font-size: 14px;
        text-align: left;
        white-space: nowrap;
        color: var(--dark);

        padding: 0px;

        grid-column: 2/3;
        align-self: center;

        background-color: white;
    }

</style>


