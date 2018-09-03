<template>
    
    <div class="tasks">

        <div class="header">

            <p class="header-text">{{ tasksLength }} Tasks</p>

        </div>

        <div class="task-list">

            <loader :condition="loading" />

            <transition-group mode="out-in" name="list">

                <task
                :key="task.id" 
                v-for="task in tasks"
                :name="task.name"
                :priority="task.priority"
                :state="task.state"
                :deadline="task.deadline" />

            </transition-group>

        </div>

    </div>

</template>

<script>

    import task from './task'
    import loader from '../../widgets/loader'

    export default {
    
        name: 'tasks',

        components: {

            task,
            loader
        },

        computed: {

            tasks: { get() { return this.$store.state.tasks.tasks || [] } },
            tasksLength() { return this.tasks.length || 0 },
            loading() { return this.tasks.length === 0 ? true : false }

        },

        created() {

            this.$store.commit( 'resetTasksState' )
            this.$store.dispatch( 'GET_TASKS', this.$route.params.id )

        }

    }

</script>

<style scoped>

    .tasks {

        height: calc( 100vh - 300px );
        min-height: 0;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto;

        border-right: 1px solid rgba(0,0,0,0.05);

        overflow: hidden;
    }

    .header {

        display: grid;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .header-text {

        padding: 23px 20px;
    }

    .task-list {

        width: calc( 100% + 17px );
        min-height: 0;

        position: relative;

        padding: 10px 14px;

        overflow: hidden;
        overflow-y: scroll;
    }

</style>


