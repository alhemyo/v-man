<template>
    
    <div class="add-task">

        <div class="header">
            
            <h1>Add Task</h1>

            <i class="material-icons">close</i>

        </div>

        <form class="form">

            <input class="form-input form-full" type="text" placeholder="Task name" v-model="name" />

            <textarea class="form-text-area form-full" placeholder="Task Description" v-model="description" />

            <date-picker
                lang="en"
                class="date-picker form-half-1" 
                input-class="form-input"
                placeholder="deadline"
                format="DD MMM YYYY"
                v-model="deadline"
                :not-before="new Date()" 
            />

            <priority class="form-half-2" :priority="priority" @setPriority="priority = $event" />
            
        </form>

        <div class="footer">

            <p class="form-message">{{ message }}</p>

            <div class="form-button">Add</div>

        </div>
        
    </div>

</template>

<script>

    import DatePicker from 'vue2-datepicker'
    import priority from '../../macro/form/priority'

    export default {
    
        name: 'add-task',

        components: { DatePicker, priority },

        data() {
            return {

                message: 'Add task errors or warnings'

            }
        },

        computed: {

            name: {
                
                get() { return this.$store.state.addTask.name },
                set( value ) { this.$store.commit( 'updateAddTaskName', value ) }

            },

            description: {

                get() { return this.$store.state.addTask.description },
                set( value ) { this.$store.commit( 'updateAddTaskDescription', value ) }

            },

            deadline: {

                get() { return this.$store.state.addTask.deadline },
                set(value) { this.$store.commit( 'updateAddTaskDeadline', value ) }
            },

            priority: {

                get() { return this.$store.state.addTask.priority },
                set(priority) { this.$store.commit( 'updateAddTaskPriority', priority ) }
            }

        }

    }

</script>

<style scoped>

    .add-task {

        width: 560px;
        height: auto;

        position: absolute;
        bottom: 0px;
        right: 40px;

        display: grid;
        grid-template-rows: 40px auto 60px;

        background-color: white;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
        border-radius: 15px 15px 0px 0px;

    }

    .header {

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        background-color: rgba(0,0,0,0.01);
    }

    h1 {

        user-select: none;

        padding: 0px 20px;
    }

    .form {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: auto;
        grid-gap: 20px;
        align-content: flex-start;

        padding: 20px;
    }

    .footer {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: auto 60px;
        grid-template-rows: 60px;
        align-items: center;

        border-top: 1px solid rgba(0,0,0,0.01);
    }

    .material-icons {

        font-size: 20px;

        justify-self: center;

        cursor: pointer;
    }

    .date-picker {

        width: 100%;

        font-family: var(--default);
    }

</style>


