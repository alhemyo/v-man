<template>
    
    <div class="project">

        <div class="project-info">

            <div class="project-priority" :class="{ mid: priority === 'mid', high: priority === 'high' }"></div>

            <p class="project-text project-name">{{ project.name }}</p>

            <p class="project-text project-admin">Admin: {{ project.admin || 'Jane Doe' }}</p>

            <p class="project-text project-client">Client: {{ project.client }}</p>

            <p class="project-text project-deadline">Deadline: {{ project.deadline }}</p>
            
        </div> <!-- end .project-info -->

    </div> <!-- end .project -->

</template>

<script>

    export default {
    
        name: 'project',

        computed: {

            project: { get() { return this.$store.state.project.project } },
            priority: { get() { return this.$store.state.project.project.priority } }
        }
    }

</script>

<style scoped>

    .project-info {

        width: 100%;
        height: 100px;

        display: grid;
        grid-template-columns: 4px 250px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px;
        align-items: center;
    }

    .project-priority {

        height: 100px;

        grid-row: 1/5;

        background-color: var(--gray);
        border-radius: 5px;
    }

    .mid {

        background-color: var(--yellow);
    }

    .high {

        background-color: var(--red);
    }

    .project-text {

        font-size: 12px;
        color: var(--dark);
    }

    .project-name {

        font-size: 16px;
        font-weight: 500;
        color: var(--black);
    }

</style>


