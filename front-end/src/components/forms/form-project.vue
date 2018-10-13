<template>
    
    <div class="form" :class="{ open : projectForm }" >

        <div class="form-header">

            <i class="fas fa-bars" />

            <p>Create New Project</p>

        </div>

        <loader :condition="loading" />

        <transition name="list" >

            <form v-show="projectForm" v-if="!loading" class="form-body">

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

                <!-- DEADLINE -->

                <form-date
                
                    name="Deadline"
                    :value="project.deadline"
                    @setDate="project.deadline = $event"
                
                 />

                <!-- ADMIN -->

                <form-select
            
                name="Admin"
                :single="true"
            
                />

                <!-- USERS -->

                <form-select
            
                name="Users"
                :single="true"
            
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
            deadline: ''
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
            }
        },

        methods: {

            close() {

                this.projectForm = false

                this.project = defaultProject()

            },

            addProject() {

                this.loading = true

                let project = {
                    name: this.project.name
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
