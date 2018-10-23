<template>

    <div class="projects">

        <view-template>

            <div slot="card" class="card projects-card">

                <p class="head-text"><span>Admin |</span> Projects</p>

                <div class="card-menu">

                    <i class="fas fa-file-alt" />

                </div>

            </div>

        </view-template>

    </div>
    
</template>

<script>

    export default {

        name: 'projects',

        components: {
            viewTemplate: () => import('../../components/templates/viewTemplate.vue')
        }

    }

</script>

<style scoped >

    .projects-card {

        padding-left: 40px;

        display: grid;
        grid-template-columns: auto 200px;
        grid-template-rows: 60px;
        align-items: center;
        align-content: center;
    }

    .card-menu {

        grid-column: 2/3;

        display: grid;
        grid-template-columns: 60px;
        grid-template-rows: 60px;
        align-items: center;
        justify-content: center;
    }

</style>
