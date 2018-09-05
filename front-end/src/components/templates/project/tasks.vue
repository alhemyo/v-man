<template>
    
    <div class="tasks">

        <div class="header">

            <p class="header-text"><span>{{ finishedTasks }}</span> / {{ tasksLength }} Tasks</p>

            <i class="material-icons" title="new task" >add</i>

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
            finishedTasks() { return 0 },
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

        border-right: 1px solid white;

        overflow: hidden;
    }

    .header {

        display: grid;
        grid-template-columns: auto 60px;
        align-items: center;
    }

    .header-text {

        font-size: 12px;

        padding: 23px 20px;
    }

    .header-text span {

        color: var(--green);
    }

    .task-list {

        width: calc( 100% + 17px );
        min-height: 0;

        position: relative;

        padding: 10px 14px;

        background-color: var(--white);

        overflow: hidden;
        overflow-y: scroll;
    }

    .material-icons {

        color: rgba(0,0,0,0.5);

        justify-self: center;

        cursor: pointer;
    }

    .material-icons:hover {

        background-color: lightgray;
        border-radius: 30px;
    }

</style>


