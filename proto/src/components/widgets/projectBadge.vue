<template>
    
    <router-link to="#" class="project-badge">

        <div class="priority"></div>

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
        priority: String
    }

}

</script>

<style>

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

    .project-badge i {

        font-size: 14px;

        opacity: 1;
    }

</style>
