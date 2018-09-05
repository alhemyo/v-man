<template>
    
    <div class="add-task">

        <div class="header">
            
            <h1>Add Task</h1>

            <i class="material-icons">close</i>

        </div>

        <form class="form">

            <input class="form-input form-full" type="text" placeholder="Task name" v-model="name" />

            <textarea class="form-text-area form-full" placeholder="Task Description" v-model="description" />

            <date-input :name="'deadline'" />
            
        </form>

        <div class="footer"></div>
        
    </div>

</template>

<script>

    import moment from 'moment'

    import dateInput from '../../macro/form/date-input'

    export default {
    
        name: 'add-task',

        components: {

            dateInput
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

        }

    }

</script>

<style scoped>

    .add-task {

        width: 560px;
        height: 400px;

        position: absolute;
        bottom: 0px;
        right: 40px;

        display: grid;
        grid-template-rows: 40px auto 60px;

        background-color: white;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
        border-radius: 15px 15px 0px 0px;

        overflow: hidden;

    }

    .header {

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        background-color: rgba(0,0,0,0.01);
    }

    h1 {

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

        border-top: 1px solid rgba(0,0,0,0.01);
    }

    .material-icons {

        font-size: 20px;

        justify-self: center;

        cursor: pointer;
    }

</style>


