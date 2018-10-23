<template>

    <template-view>

        <div slot="card" class="card project-card">

            <div class="priority" :class="{ mid: project.priority === 2, high: project.priority === 3 }" ></div>

            <p class="head-text">{{ project.name }}</p>

            <p class="default-text">{{ project.client + ' / ' + deadline }}</p>

            <div class="card-menu">

                <i class="fas fa-file-alt" />

                <i class="fas fa-user-plus" />

            </div>

        </div>

        <div slot="nav" class="nav"></div>

        <div slot="content" class="content">

            <transition-group name="list">

                <task
                
                    v-for="task in tasks"
                    :key="task.id"
                    :id="task.id"
                    :name="task.name"
                    :priority="task.priority"

                />

            </transition-group>

        </div>

    </template-view>
    
</template>

<script>

    import moment from 'moment'

    export default {

        name: 'project',

        components: {
            templateView: () => import('../../components/templates/viewTemplate.vue'),
            task: () => import('../../components/templates/task.vue')
        },

        computed: {

            // Project computed properties

            project() {

                return this.$store.state.myProjects.myProjects.find((project) => {

                    return project.id === Number(this.$route.params.id)

                }) || {}

            },

            deadline() { return moment(this.project.deadline).format("DD MMM YYYY") },

            // Tasks computed properties

            tasks: {
                get() { return this.$store.state.tasks.tasks }
            }
        },

        created() {
            this.$store.dispatch( 'getTasks', this.$route.params.id )
            .then(() => {
                this.taskLoading = false
            })
        }

    }

</script>

<style scoped >

    .project-card {

        white-space: nowrap;

        display: grid;
        grid-template-columns: 40px auto 200px;
        grid-template-rows: 30px 30px;
        grid-column-gap: 10px;
        align-content: center;
        align-items: center;

        background-color: var(--content);
    }

    .priority {

        width: 4px;
        height: 60px;

        justify-self: center;
        grid-row: 1/3;

        background-color: var(--icon);
        border-radius: 3px;
    }

    .mid {

        background-color: var(--lightblue);
    }

    .high {

        background-color: var(--blue);
    }

    .card-menu {

        width: 200px;

        grid-column: 3/4;
        grid-row: 1/3;

        display: grid;
        grid-template-columns: 60px 60px;
        grid-template-rows: 60px;
        align-items: center;
        justify-content: center;
    }

    .nav {

        background-color: var(--menu);
    }

</style>
