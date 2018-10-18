<template>
    
    <div class="myprojects">

        <transition-group name="list" >

            <project-badge 
        
                :key="index"
                v-for="(project, index) in 10"
                :name="'project ' + index"
            
            />

        </transition-group>

    </div>

</template>

<script>

    export default {

        name: 'myprojects',

        components: {
            projectBadge: () => import('../../components/widgets/projectBadge.vue')
        }

    }

</script>

<style>

    .myprojects {

        width: 100%;
        height: auto;
    }

    .project-badge:nth-child(1) {

        margin-top: 0px;
    }

</style>
