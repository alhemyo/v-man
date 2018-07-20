<template>
    
    <form class="form add-project">

        <!---------------------- FIRST ROW ---------------------->

        <input 
            class="form-input project-name form-third-1" 
            type="text" 
            name="projectName" 
            placeholder="Project name"
            v-model="name" />

        <div class="form-date deadline form-4">

            <p class="form-date-name">Deadline</p>
            
            <input type="text" name="day" placeholder="D" v-model="deadlineDay" maxlength="2" />

            <input type="text" name="month" placeholder="M" v-model="deadlineMonth" maxlength="2" />

            <input type="text" name="year" placeholder="Y" v-model="deadlineYear" maxlength="4" />    
            
        </div> <!-- end .form-date -->

        <!---------------------- SECOND ROW ---------------------->

        <form-select :name="'Priority'" :value="priority" />

        <form-select :name="'Client'" :value="client" />

        <form-select :name="'Admin'" :value="admin" />

        <form-select :name="'Users'" :value="users" />

        <!---------------------- THIRD ROW ---------------------->

        <p class="form-sub-title form-third-1">{{ message }}</p>

        <p class="form-button form-4">Add Project</p>

    </form> <!-- end .add-project -->

</template>

<script>

    import _ from 'lodash'

    import formSelect from '../../macro/form/form-select'

    export default {
    
        name: 'add-project',

        components: {

            formSelect
        },

        data() {

            return {

                message: ""
            }
        },

        computed: {

            name: { 
                get() { return this.$store.state.addProject.name },
                set(value) { this.$store.commit( 'updateAddProjectName', value ) } 
            },
            deadlineDay: {

                get() { return this.$store.state.addProject.deadline.day },
                set(value) { this.$store.commit( 'updateAddProjectDeadlineDay', value ) }
            },
            deadlineMonth: {

                get() { return this.$store.state.addProject.deadline.month },
                set(value) { this.$store.commit( 'updateAddProjectDeadlineMonth', value ) }
            },
            deadlineYear: {

                get() { return this.$store.state.addProject.deadline.year },
                set(value) { this.$store.commit( 'updateAddProjectDeadlineYear', value ) }
            },
            priority: { get() { return this.$store.state.addProject.priority.value } },
            client: { get() { return this.$store.state.addProject.client.value } },
            admin: { get() {

                if ( this.$store.state.addProject.admin.value.length === 0 ) {

                    return ""
                }

                else if ( this.$store.state.addProject.admin.value.length === 1 ) {

                    return this.$store.state.addProject.admin.value[0].name
                }

                else {

                    return this.$store.state.addProject.admin.value.length + ' Admins'
                }
            }},
            users: { get() {

                if ( this.$store.state.addProject.users.value.length === 0 ) {

                    return ""
                }

                else if ( this.$store.state.addProject.users.value.length === 1 ) {

                    return this.$store.state.addProject.users.value[0].name
                }

                else {

                    return this.$store.state.addProject.users.value.length + ' Users'
                }
            }}
        },

        created() {

            this.$store.commit( 'updateAddProjectAdminOptions', this.$store.state.users.users.filter((item, is_admin) => { return item.user.is_admin === 'true' }) )
            this.$store.commit( 'updateAddProjectUsersOptions', this.$store.state.users.users )
        }

    }

</script>

