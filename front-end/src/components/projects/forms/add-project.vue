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

        <p class="form-button form-4" @click="addProject">Add Project</p>

    </form> <!-- end .add-project -->

</template>

<script>

    import _ from 'lodash'
    import axios from 'axios'

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

        methods: {

            addProject() {

                const regNumber = this.$store.state.regex.numbers

                // add project form validation

                if ( !this.name ) { this.message = 'Project name is required.' }

                else if ( this.name.match(this.$store.state.regex.login) ) { this.message = 'Invalid project name' }

                else if ( !this.deadlineDay && !this.deadlineMonth && !this.deadlineYear ) { this.message = 'Deadline date is required.' }

                else if ( !this.deadlineDay.match(regNumber) && !this.deadlineMonth.match(regNumber) && !this.deadlineYear.match(regNumber) ) { this.message = 'Invalid date.' }

                else if ( !this.priority ) { this.message = 'Please select priority.' }

                else if ( !this.client ) { this.message = 'Please select client.' }

                else if ( !this.admin ) { this.message = 'Please select admin.' }

                else {

                    // Create new project API request

                    let project = {

                        name: this.$store.state.addProject.name,
                        deadline: {
                            day: this.$store.state.addProject.deadline.day,
                            month: this.$store.state.addProject.deadline.month,
                            year: this.$store.state.addProject.deadline.year
                        },
                        priority: this.$store.state.addProject.priority.value,
                        client: this.$store.state.addProject.client.value,
                        admin_id: this.$store.state.addProject.admin.value[0].id,
                        user_ids: this.$store.state.addProject.users.value.map((item,id) => { return item.id })
                    }

                    axios({

                        url: this.$store.state.api + 'project',
                        method: 'POST',
                        headers: { 'x-access-token' : localStorage.getItem('token') },
                        data: project
                    })

                    .then(response => {

                        this.message = response.data.message
                    })

                    .catch(error => {

                        this.message = 'Ups, something went wrong, please try again.'
                    })
                }
            }
        },

        created() {

            this.$store.dispatch( 'GET_USERS' )

            this.$store.commit( 'updateAddProjectAdminOptions', this.$store.state.users.users.filter((item, is_admin) => { return item.user.is_admin === 'true' }) )
            this.$store.commit( 'updateAddProjectUsersOptions', this.$store.state.users.users )
        },

        watch: {

            message() {

                setTimeout(() => { this.message = "" },2000)
            }
        }

    }

</script>

