<template>
    
    <div class="myprojects">

        <transition-group name="list" >

            <project-badge 
        
                :key="project.id"
                v-for="project in myProjects"
                :name="project.name"
                :priority="project.priority"
            
            />

        </transition-group>

    </div>

</template>

<script>

    import { orderBy } from 'lodash'

    export default {

        name: 'myprojects',

        data() {
            return {
                loading: true
            }
        },

        components: {
            projectBadge: () => import('../../components/widgets/projectBadge.vue')
        },

        computed: {
            myProjects: {
                get() { return orderBy(this.$store.state.myProjects.myProjects, ['priority', 'deadline'] ) }
            }
        },

        created() {

            this.$store.dispatch( 'getMyProjects' )
            .then(() => {
                this.loading = false
            })
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
