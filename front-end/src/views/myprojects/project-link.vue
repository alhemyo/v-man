<template>
    
    <router-link class="project-link" :to="{ name: 'project', params: { id: id } }">

        <div class="priority" :class="{ mid : priority === 'mid', high : priority === 'high' }" ></div>

        <p>{{ name }}</p>

        <i class="fas fa-angle-right" />

    </router-link>

</template>

<script>

    export default {

        name: 'project-link',

        props: {

            name: String, 
            id: Number,
            priority: String

        }

    }

</script>

<style scoped>

    .project-link {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);

        position: relative;

        padding: 0px 10px;

        display: grid;
        grid-template-columns: 20px auto 20px;
        grid-template-rows: 40px;
        align-items: center;

        transition: 0.1s ease;

        border-radius: 3px;
    }

    .priority {

        width: 4px;
        height: 14px;

        background-color: var(--darkgray);

        border-radius: 4px;
    }

    .mid { background-color: var(--yellow) }

    .high { background-color: var(--red) }

    .project-link i {

        transition: 0.3s ease;

        transform: translateX(-10px);

        opacity: 0;
    }

    .project-link:hover {

        color: var(--black);
        font-weight: 500;
    }

    .project-link:hover i {

        color: var(--darkgray);

        transform: translateX(0px);

        opacity: 1;
    }

    .router-link-active {

        color: var(--black);
        font-weight: 500;

        background-color: white;
    }

    .router-link-active:hover {

        color: var(--black);
        font-weight: 500;

        background-color: white;
    }

    .router-link-active i {

        color: var(--darkgray);

        transform: translateX(0px);

        opacity: 1;
    }

</style>
