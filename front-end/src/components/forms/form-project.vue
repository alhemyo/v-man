<template>
    
    <div class="form" :class="{ open : projectForm }" >

        <div class="form-header">

            <i class="fas fa-bars" />

            <p>Create New Project</p>

        </div>

        <loader :condition="loading" />

        <transition name="list" >

            <form v-show="projectForm" v-if="!loading" class="form-body">

                <!-- DEADLINE -->

                <form-date
                    
                    class="form-1-2"
                    name="Deadline"
                    :value="project.deadline"
                    @setDate="project.deadline = $event"
                
                />

                <!-- NAME -->

                <div class="form-input form-full">

                    <input type="text" placeholder="Project name" v-model="project.name" />

                    <i class="fas fa-pen" />

                </div>

                <!-- CLIENT -->

                <form-select
                
                    name="Client"
                    :options="clientOptions"
                    :single="true"
                    :value="project.client"
                    @option="project.client = $event"
                
                />

                <!-- PRIORITY -->

                <form-select
                
                    name="Priority"
                    :options="priorityOptions"
                    :single="true"
                    :value="project.priority"
                    @option="project.priority = $event"
                
                />

                <!-- ADMIN -->

                <form-select
            
                name="Admins"
                :single="false"
                :options="admins"
                :value="project.admins"
                @formList="project.admins = $event"
            
                />

                <!-- USERS -->

                <form-select
            
                name="Users"
                :single="false"
                :options="users"
                :value="project.users"
                @formList="project.users = $event"
            
                />

            </form>

        </transition>

        <div class="form-footer">

            <div class="form-button" @click="valid ? addProject() : close()" :class="{ valid : valid }">

                <i class="fas" :class="{ 'fa-times not-valid-icon' : !valid, 'fa-check valid-icon' : valid }" />

            </div>

            <p class="form-message">{{ message }}</p>

        </div>

    </div>

</template>

<script>

    const defaultProject = () => {
        return {
            name: '',
            client: '',
            deadline: '',
            priority: '',
            users: [],
            admins: []
        }
    }

    const project = defaultProject()

    export default {

        name: 'form-project',

        components: {
            formSelect: () => import('../widgets/form-select'),
            formDate: () => import('../widgets/form-date'),
            loader: () => import('../widgets/loader')
        },

        data() {
            return {

                loading: false,

                // Options
                clientOptions: [ 'VT', 'CT', 'CS', 'FT', 'GR', 'ZZ' ],
                priorityOptions: [ 'low', 'mid', 'high' ],

                // project data
                project,

                message: 'All fields are required.',

                // Validation
                valid: false

            }
        },

        computed: {
            projectForm: {
                get() { return this.$store.state.forms.project },
                set(projectForm) { this.$store.commit( 'updateProjectForm', projectForm ) }
            },
            users: {
                get() { return this.$store.state.users.users }
            },
            admins() { return this.users.filter(user => user.admin_type === 'project admin' || user.admin_type === 'uber admin' ) }
        },

        methods: {

            close() {

                this.projectForm = false

                this.project = defaultProject()

            },

            addProject() {

                this.loading = true

                let project = {
                    name: this.project.name,
                    client: this.project.client,
                    deadline: this.project.deadline,
                    priority: this.project.priority,
                    users: this.project.users,
                    admins: this.project.admins
                }

                this.$store.dispatch( 'newProject', project )
                
                .then(() => {

                    this.project = defaultProject()

                    this.projectForm = false
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

            project: {

                handler: function() {

                    let valid = this.validate(this.project)

                    this.valid = valid

                },

                deep: true

            },

            valid() {

                this.valid ? this.message = 'Create new project' : this.message = 'All fields are required.'

            }

        }

    }

</script>

<style scoped>


</style>
