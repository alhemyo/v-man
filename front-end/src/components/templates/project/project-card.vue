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

        <p v-show="client" class="project-info date">{{ client + ' / ' + formatDeadline }}</p>

        <div class="visual">

            <bars
            class="bars"
            :data="tasks"
            :height="90"
            :padding="20"
            :gradient="['#FFC107','#FF312E']"
            :barWidth="5"
            :growDuration="0.1"

            />

        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    export default {
    
        name: 'project-card',

        props: {

            name: String,
            client: String,
            deadline: String,
            priority: String

        },

        computed: {

            formatDeadline() { return moment(this.deadline).format("DD MMM YYYY") },
            tasks: { get() { return this.$store.state.tasks.tasks.map(task => { return moment(task.created).minutes() }) } }
            
        },

        mounted() {

            console.log(this.tasks)
        }

    }

</script>

<style scoped>

    .visual {

        width: 100%;
        height: 100%;

        position: relative;

        grid-column: 3/4;
        grid-row: 1/3;
    }

    [v-cloak] {

        display: none;
    }

    .project-card {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: 10px 200px auto ;
        grid-template-rows: 40px 40px;
        grid-column-gap: 10px;
        grid-row-gap: 20px;
        align-items: center;
        align-content: center;
    }

    .priority {

        width: 4px;
        height: 44px;

        grid-row: 1/3;
        justify-self: flex-start;

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

        align-self: flex-start;
    }

    .name {

        font-size: 14px;
        text-align: left;
        white-space: nowrap;
        color: var(--dark);

        padding: 0px;

        grid-column: 2/3;
        align-self: flex-end;

        background-color: white;
    }

</style>


