<template>
    
    <form class="settings-form">

        <!-------------------- FIRST COLUMN -------------------->

        <input class="form-input form-third-1" type="text" placeholder="Project name" v-model="projectName" />

        <div class="form-date form-4">

            <span class="form-date-title">DEADLINE</span>

            <input class="form-date-day" type="text" maxlength="2" placeholder="D" v-model="deadlineDay" />

            <input class="form-date-month" type="text" maxlength="2" placeholder="M" v-model="deadlineMonth" /> 

            <input class="form-date-year" type="text" maxlength="4" placeholder="Y" v-model="deadlineYear" />  
        
        </div> <!-- end .form-date -->

        <!-------------------- SECOND COLUMN -------------------->

        <form-select :name="'Priority'" :value="priority" :multiSelect="false" />

        <form-select :name="'Admin'" :value="admin" :multiSelect="true" />

        <form-select :name="'Client'" :value="client" :multiSelect="false" />

        <form-select :name="'Users'" :value="users" :multiSelect="true" />

        <hr />

        <!-------------------- THIRD COLUMN -------------------->

        <p v-if="admin" class="form-subtitle form form-full">Selected admins</p>

        <div v-if="admin" class="settings-form-loader">

            <display-badge :key="adminIndex" v-for="(admin, adminIndex) in adminList" :name="admin.name" :avatar="admin.avatar" :id="admin.id" />

        </div>

        <hr v-if="admin" />

        <!-------------------- FORTH COLUMN -------------------->

        <p v-if="users" class="form-subtitle form form-full">Selected users</p>

        <div v-if="users" class="settings-form-loader">

            <display-badge :key="userIndex" v-for="(user, userIndex) in userList" :name="user.name" :avatar="user.avatar" :id="user.id" />

        </div>

        <hr v-if="users" />

        <!-------------------- FIFTH COLUMN -------------------->

        <transition name="fade">
            <p v-show="message" class="form-message form-third-1">{{ message }}</p>
        </transition>

        <p class="form-button form-4" @click="createProject" >Create project</p>
        
    </form> <!-- end .settings-form -->

</template>

<script>

    // Import modules
    import axios from 'axios'

    // Import components
    import formSelect from '../../../macro/form-select'
    import formRadio from '../../../macro/form-radio'
    import displayBadge from '../../../macro/display-badge'

    export default {
    
        name: 'create-project',

        components: {
            formSelect,
            displayBadge
        },

        data() {
            return {
                message: ""
            }
        },

        computed: {

            projectName: {
                get() { return this.$store.state.projects.createProject.name },
                set(value) { this.$store.commit( 'updateCreateProjectName', value ) } 
            },
            deadlineDay: {
                get() { return this.$store.state.projects.createProject.deadline.day },
                set(value) { this.$store.commit( 'updateCreateProjectDeadlineDay', value ) }
            },
            deadlineMonth: {
                get() { return this.$store.state.projects.createProject.deadline.month },
                set(value) { this.$store.commit( 'updateCreateProjectDeadlineMonth', value ) }
            },
            deadlineYear: {
                get() { return this.$store.state.projects.createProject.deadline.year },
                set(value) { this.$store.commit( 'updateCreateProjectDeadlineYear', value ) }
            },
            priority: { get() { return this.$store.state.projects.createProject.priority.value } },
            admin: { get() { 

                    let adminsNumber = this.$store.state.projects.createProject.admin.value.length

                    if ( adminsNumber === 1 )

                    {
                        return this.$store.state.projects.createProject.admin.value[0].name
                    }

                    else if ( adminsNumber > 1 )

                    {
                        return this.$store.state.projects.createProject.admin.value.length + ' admins'
                    }

                }
            },
            adminList: { get() { return this.$store.state.projects.createProject.admin.value } },
            client: { get() { return this.$store.state.projects.createProject.client.value } },
            users: { 
                get() {

                    let usersNumber = this.$store.state.projects.createProject.users.value.length

                    if ( usersNumber === 1 )

                    {
                        return this.$store.state.projects.createProject.users.value[0].name
                    }

                    else if ( usersNumber > 1 )

                    {
                        return this.$store.state.projects.createProject.users.value.length + ' users'
                    }

                }
             },
            userList: { get() { return this.$store.state.projects.createProject.users.value } }
        },

        methods: {

            createProject() {

                let postBody = {

                    name: this.projectName,
                    deadline: {
                        day: this.deadlineDay,
                        month: this.deadlineMonth,
                        year: this.deadlineYear
                    },
                    priority: this.priority,
                    admin: this.adminList.map((item, id) => { return item.id }),
                    client: this.client,
                    users: this.userList.map((item, id) => { return item.id })
                }

                console.log(JSON.stringify(postBody))

            }
        }

    }

</script>

