<template>
    
    <div class="project">

        <div class="project-card">

            <div class="priority" :class="{ mid : project.priority === 'mid', high : project.priority === 'high' }" ></div>

            <p class="name">{{ project.name }} </p>

            <p class="info">{{ project.client + ' / ' + formatDeadline }}</p>

            <div class="project-menu">

                <div class="button-v">

                    <i class="fas fa-file-alt" />

                    <p>New Task</p>

                </div>

                <div class="button-v">

                    <i class="fas fa-user-plus" />

                    <p>Add User</p>

                </div>

            </div>

        </div>

        <div class="project-nav">

            <i class="fas fa-signal" />

            <p class="nav-info task-name"><span>{{ 0 }}</span> / {{ tasks.length }} {{ tasks.length === 1 ? 'task' : 'tasks' }}</p>

            <p class="nav-info">state</p>

            <div></div>

            <p class="nav-info">deadline</p>

            <p class="nav-info">users</p>

            <i class="fas fa-star-of-life open" />

            <p class="nav-info">{{ usersLength === 1 ? usersLength + ' assigned user' : usersLength + ' assigned users' }}</p>

        </div>

        <div class="project-tasks">

            <div class="task-list">

                <div v-if="taskEmpty" class="task-empty">

                    <p>No tasks in this project.</p>

                </div>

                <scaling-squares-spinner

                    v-if="taskLoading"
                    :animation-duration="1250"
                    :size="30"
                    color="#9A9A9A"

                />

                <transition-group mode="out-in" name="list">

                    <task 
                    
                        v-if="!taskLoading" 
                        :key="task.id"
                        :id="task.id"
                        v-for="task in tasks"
                        :priority="task.priority"
                        :name="task.name"
                        :state="task.state"
                        :deadline="task.deadline"
                        :users="task.users.length"
                        :description="task.description"

                        @active="id = $event"
                        :active="task.id === id ? true : false"
                    
                    />

                </transition-group>

            </div>

        </div>

        <div class="project-users">

            <div class="user-list">

                <div v-if="usersEmpty" class="users-empty">

                    <p>No users assigned.</p>

                </div>

                <scaling-squares-spinner

                    v-if="usersLoading"
                    :animation-duration="1250"
                    :size="30"
                    color="#9A9A9A"

                />

                <transition-group name="list">

                    <user-badge
                
                        v-if="!usersLoading"
                        :key="user.umcn"
                        v-for="user in assignedUsers"
                        :id="user.umcn"
                        :name="user.name + ' ' + user.surname"
                    
                    />

                </transition-group>

            </div>

        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    import task from './task'
    import userBadge from '../../components/widgets/user-badge'
    import loader from '../../components/widgets/loader'
    import { ScalingSquaresSpinner  } from 'epic-spinners' 

    export default {

        name: 'project',

        components: { task, userBadge, loader, ScalingSquaresSpinner },

        data() {
            return {

                // Tasks data
                taskLoading: true,
                taskEmpty: false,
                id: '',

                // Users data
                usersLoading: true,
                usersEmpty: false
            }
        },

        computed: {

            // PROJECT
            project() { return this.$store.state.myProjects.myProjects.find((project) => { return project.id === Number( this.$route.params.id ) }) || {} },
            formatDeadline() { return moment(this.project.deadline).format("DD MMM YYYY") },

            // TASKS
            tasks: { get() { return this.$store.state.tasks.tasks } },

            // USERS
            users: { get() { return this.$store.state.users.users } },
            assignedUsers() { return this.users.filter(user => { return this.project.users.includes(user.umcn) }) },
            usersLength() { return this.assignedUsers.length }

        },

        created() {
        
            this.$store.dispatch('getTasks', this.$route.params.id ).then(() => {

                this.taskLoading = false

                this.tasks.length > 0 ? this.taskEmpty = false : this.taskEmpty = true

            })

            this.$store.dispatch('getUsers').then(() => {

                this.usersLoading = false

            })

        },

        destroyed() {

            this.$store.commit('resetTasks')

        },

        watch: {

            assignedUsers() {

                this.assignedUsers.length > 0 ? this.usersEmpty = false : this.usersEmpty = true

            }

        }

    }

</script>

<style scoped>

    .project {

        width: 100%;
        height: calc( 100vh - 86px );

        position: relative;

        display: grid;
        grid-template-columns: auto 200px;
        grid-template-rows: 158px 90px auto;
        grid-column-gap: 4px;

        overflow: hidden;
    }

    /* PROJECT CARD CSS */

    .project-card {

        grid-column: 1/3;

        display: grid;
        grid-template-columns: 40px auto 200px;
        grid-template-rows: 30px 30px;
        grid-row-gap: 10px;
        align-content: center;
        align-items: center;

        background-color: white;
    }

    .priority {

        width: 4px;
        height: 60px;

        grid-row: 1/3;
        justify-self: center;

        background-color: var(--midgray);

        border-radius: 5px;
    }

    .mid {

        background-color: var(--yellow);
    }

    .high {

        background-color: var(--red);
    }

    .name {

        font-size: 24px;
        font-weight: 500;
        color: var(--black);

        grid-row: 1/2;
        align-self: flex-end;
    }

    .info {

        font-size: 12px;
        color: var(--darkgray);

        grid-row: 2/3;
    }

    .project-menu {

        width: 200px;
        height:70px;

        grid-column: 3/4;
        grid-row: 1/3;

        display: grid;
        grid-template-columns: 60px 60px;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    /* PROJECT NAV CSS */

    .project-nav {

        grid-column: 1/3;

        display: grid;
        grid-template-columns: 40px 250px 100px auto 120px 100px 58px 202px;
        grid-template-rows: 40px;
        align-items: center;
        align-content: center;

        padding-top: 30px;

        z-index: 2;

        background-color: white;
    }

    .project-nav > * {

        border-right: 1px solid rgba( 0, 0, 0, 0.1 );
    }

    .nav-info:nth-last-child(1) {

        border: none;
    }

    .nav-info {

        font-size: 12px;
        text-align: center;
        color: var(--darkgray);

        padding: 0px 10px;
    }

    .nav-info:nth-child(5) {

        border-left: 1px solid var(--midgray);
    }

    .task-name {

        text-align: left;
    }

    .task-name span {

        color: var(--green);
    }

    .open {

        font-size: 12px;

        padding: 0;
    }

    /* PROJECT TASKS CSS */

    .project-tasks {

        position: relative;
        margin-top: 4px;

        overflow: hidden;
    }

    .task-empty {

        font-size: 14px;
        color: var(--darkgray);

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );
    }

    .task-list {

        width: calc( 100% + 17px );
        height: calc( 100vh - 334px );
        min-height: 0px;

        position: relative;

        overflow: hidden;
        overflow-y: scroll;
    }

    .task:nth-child(1) {

        margin-top: 0;
    }

    /* PROJECT USERS CSS */

    .user-list {

        width: calc( 100% + 17px );
        height: calc( 100vh - 334px );
        min-height: 0px;

        position: relative;

        overflow: hidden;
        overflow-y: scroll;
    }

</style>
