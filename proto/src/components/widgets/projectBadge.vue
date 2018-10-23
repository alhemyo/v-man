<template>
    
    <router-link :to="{ name: 'project', params: { id } }" class="project-badge">

        <div class="priority" :class="{ mid : priority === 2, high : priority === 3 }" ></div>

        <p class="default-text">{{ name }}</p>

        <i class="fas fa-angle-right" />

    </router-link>

</template>

<script>

export default {

    name: 'project-badge',

    props: { 
        id: Number,
        name: String,
        priority: Number
    }

}

</script>

<style scoped >

    .project-badge {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 4px;

        display: grid;
        grid-template-columns: 40px auto 40px;
        align-items: center;
        
        border-radius: 3px;
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
    
    .project-badge i {

        font-size: 14px;

        transition: 0.2s ease;

        transform: translateX( -10px );

        opacity: 0;
    }

    .project-badge:hover i {

        transform: translateX( 0px );

        opacity: 1;
    }

    .router-link-active {

        background-color: var(--content);
    }

    .router-link-active i {

        color: var(--icon);

        transform: translateX( 0px );

        opacity: 1;
    }

</style>
