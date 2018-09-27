<template>
    
    <div class="tasks">

        <div class="header">

            <i class="material-icons header-icons">assessment</i>

            <p class="header-text"><span>{{ finishedTasks }}</span> / {{ tasksLength }} Tasks</p>

            <p class="header-text">state</p>

            <div></div>

            <p class="header-text">deadline</p>

            <p class="header-text">tools</p>

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

        <div class="tasks-footer">

            <div class="button" @click="openTask" >

                <p>New task</p>

                <i class="material-icons">add</i>

            </div>

        </div>

    </div>

</template>

<script>

    import task from './task'
    import loader from '../../macro/loader'

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

        methods: {

            openTask() {

                this.$store.commit( 'updateAddTaskCreated', new Date() )
                this.$store.commit( 'updateAddTaskId', this.$route.params.id )
                this.$store.commit( 'updateOpenTaskForm', true )

            }

        },

        created() {

            this.$store.commit( 'resetTasksState' )
            this.$store.dispatch( 'GET_TASKS', this.$route.params.id )

        }

    }

</script>

<style scoped>

    .tasks {

        height: calc( 100vh - 240px );
        min-height: 0;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto 60px;

        background-color: white;

        overflow: hidden;
    }

    .header {

        display: grid;
        grid-template-columns: 30px 200px 100px auto 120px 100px;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .header > * {

        border-right: 1px solid rgba(0,0,0,0.1);
    }

    .header-icons {

        font-size: 18px;
    }

    .header-text {

        font-size: 12px;
        text-align: center;

        padding: 6px 0px;
    }

    .header-text span {

        color: var(--green);
    }

    .header-text:nth-child(2) {

        text-align: left;
    }

    .task-list {

        width: calc( 100% + 17px );
        min-height: 0;

        position: relative;

        background-color: rgba(0,0,0,0.05);
        border-right: 1px solid rgba(0,0,0,0.05);

        overflow: hidden;
        overflow-y: scroll;
    }

    .material-icons {

        color: rgba(0,0,0,0.5);

        justify-self: center;

        cursor: pointer;
    }

    .tasks-footer {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: min-content;
        justify-content: flex-end;
        align-items: center;

        border-top: 1px solid rgba(0,0,0,0.1);
    }

</style>


