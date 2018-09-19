<template>

    <div class="new-project" :class="{ 'open-project' : openProjectForm }" >

        <div class="header">

            <h1>Add Project</h1>

            <i class="material-icons" @click="closeProjectForm" >close</i>

        </div>

        <form class="form">

            <input class="form-input form-half-1" type="text" placeholder="Project name" v-model="name" />

            <date-picker
                lang="en"
                class="date-picker form-half-2" 
                input-class="form-input"
                placeholder="deadline"
                format="DD MMM YYYY"
                v-model="deadline"
            />

            <form-select class="form-1" name="Client" :options="clientOptions" :value="client" @setValue="client = $event" />

            <form-select class="form-2" name="Admin" :multy="true" :options="adminOptions" :value="admin" @setValue="admin = $event.map(item => item.umcn)" />

            <form-select class="form-3" name="User" :multy="true" :options="userOptions" :value="users" @setValue="users = $event.map(item => item.umcn)" />

            <priority class="form-4" :priority="priority" @setPriority="priority = $event" />

        </form>

        <div class="footer">

            <p class="form-message">{{ message }}</p>

            <p class="form-button" @click="newProject" >Add</p>

        </div>

    </div>
    
</template>

<script>

    import DatePicker from 'vue2-datepicker'
    import priority from '../../macro/form/priority'
    import formSelect from '../../macro/form/form-select'

    export default {
    
        name: 'new-project',

        components: {

            priority,
            formSelect,
            DatePicker
        },

        data() {
            return {

                clientOptions: [ 'VT', 'FT', 'CT', 'CS', 'ZZ', 'MK' ],

                message: ''

            }
        },

        computed: {

            name: {
                get() { return this.$store.state.addProject.name },
                set(value) { this.$store.commit( 'updateAddProjectName', value ) }
            },

            deadline: {
                get() { return this.$store.state.addProject.deadline },
                set(value) { this.$store.commit( 'updateAddProjectDeadline', value ) }
            },

            client: {
                get() { return this.$store.state.addProject.client },
                set(client) { this.$store.commit( 'updateAddProjectClient', client ) }
            },

            admin: {
                get() { return this.$store.state.addProject.admin },
                set(admin) { this.$store.commit( 'updateAddProjectAdmin', admin ) }
            },

            users: {
                get() { return this.$store.state.addProject.users },
                set(users) { this.$store.commit( 'updateAddProjectUsers', users ) }
            },

            priority: {
                get() { return this.$store.state.addProject.priority },
                set(priority) { this.$store.commit( 'updateAddProjectPriority', priority ) }
            },

            adminOptions: { get() { return this.$store.state.users.users.filter(user => { return user.is_admin === "true" }) } },

            userOptions: { get() { return this.$store.state.users.users } },

            openProjectForm: { get() { return this.$store.state.openProjectForm } }
        },

        methods: {

            closeProjectForm() {

                this.$store.commit( 'updateOpenProjectForm', false )
                this.$store.commit( 'resetAddProjectState' )

            },

            newProject() {

                this.$store.dispatch('NEW_PROJECT')
            }

        },

        mounted() {

            this.$store.dispatch( 'GET_USERS' )
        }

    }

</script>

<style scoped>

    .new-project {

        width: 600px;
        height: auto;

        position: absolute;
        right: 40px;
        bottom: -400px;

        display: grid;
        grid-template-rows: 40px auto 60px;

        transition: 0.3s ease;

        background-color: white;
        border-radius: 15px 15px 0px 0px;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
    }

    .open-project {

        bottom: 0px;
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
        grid-column-gap: 10px;
        grid-row-gap: 10px;
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
    }

</style>


