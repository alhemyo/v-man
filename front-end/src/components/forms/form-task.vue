<template>

    <div class="form" :class="{ open : taskForm }" >

        <div class="form-header">

            <i class="fas fa-file" />

            <p>Add New Task</p>

        </div>

        <loader :condition="loading" />

        <transition name="list" >

            <form v-show="taskForm" v-if="!loading" class="form-body">

                <!-- NAME -->

                <div class="form-input form-full">

                    <input type="text" placeholder="Task name" v-model="task.name" />

                    <i class="fas fa-pen" />

                </div>

                <!-- DESCRIPTION -->

                <div class="form-input form-full">

                    <textarea type="text" placeholder="Task description" v-model="task.description" />

                </div>

                <!-- DEADLINE -->

                <form-date

                    name="Deadline"
                    :value="task.deadline"
                    @setDate="task.deadline = $event"
                
                />

                <!-- PRIORITY -->

                <form-select
                
                    name="Priority"
                    :options="priorityOptions"
                    :single="true"
                    :value="task.priority"
                    @option="task.priority = $event"
                
                />

            </form>

        </transition>

        <div class="form-footer">

            <div class="form-button" @click="valid ? addTask() : close()" :class="{ valid : valid }">

                <i class="fas" :class="{ 'fa-times not-valid-icon' : !valid, 'fa-check valid-icon' : valid }" />

            </div>

            <p class="form-message">{{ message }}</p>

        </div>

    </div>

</template>

<script>

    const defaultTask = () => {
        return {
            name: '',
            deadline: '',
            description: '',
            priority: '',
        }
    }

    const task = defaultTask()

    export default {

        name: 'form-task',

        components: {
            formSelect: () => import('../widgets/form-select'),
            formDate: () => import('../widgets/form-date'),
            loader: () => import('../widgets/loader')
        },

        data() {
            return {
                loading: false,
                // Options
                priorityOptions: [ 'low', 'mid', 'high' ],
                // project data
                task,
                message: 'All fields are required.',
                // Validation
                valid: false

            }
        },

        computed: {
            taskForm: {
                get() { return this.$store.state.forms.task },
                set(taskForm) { this.$store.commit( 'updateTaskForm', taskForm ) }
            }
        },

        methods: {
            close() {
                this.taskForm = false
                this.task = defaultTask()
            },
            addTask() {
                this.loading = true
                let task = {
                    name: this.task.name,
                    created: new Date(),
                    deadline: this.task.deadline,
                    description: this.task.description,
                    priority: this.task.priority,
                    state: 'pending'
                }
                this.$store.dispatch( 'addTask', { task: task, id: this.$route.params.id } )
                .then(() => {
                    this.task = defaultTask()
                    this.taskForm = false
                    this.loading = false
                })
            },
            validate(obj) {
                for ( let item in obj ) {
                    if ( obj[item] === "" ) {
                        return false
                    }
                }
                return true
            }
        },

        watch: {
            task: {
                handler: function() {
                    let valid = this.validate(this.task)
                    this.valid = valid
                },
                deep: true
            },
            valid() {
                this.valid ? this.message = 'Create new task!' : this.message = 'All fields are required.'
            }
        }

    }

</script>

<style>

</style>
