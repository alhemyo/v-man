<template>
    
    <div class="project">

        <div class="project-card">

            <div class="priority-state">

                <div class="bouncer" 
                    :class="{ 
                        high : ( project.priority === 'high' ), 
                        mid : ( project.priority === 'mid' ), 
                        low : ( project.priority ==='low' ),
                        production: ( this.state === 'production' ),
                        finished: ( state === 'finished' ),
                        backup: ( state === 'backup' )

                    }"></div>

            </div>

            <p class="project-info name">{{ project.name }}</p>

            <p class="project-info">{{ project.client }} / {{ project.deadline }}</p>

        </div> <!-- end .project-card -->

        <div class="project-nav"></div>

        <div class="tasks">

            <div class="tasks-header">

                <div class="tasks-nav">

                    <p class="header-title"> {{ tasksLength }} Tasks</p>

                </div>

                <img @click="newTask" class="add" title="add Task" src="/images/assets/icons/add.png" />

                <div class="users-nav">

                    <p class="header-title">Asigned users</p>

                </div>

                <img class="add" src="/images/assets/icons/add.png" />

            </div> <!-- end .tasks-header-->

            <div class="tasks-wrap">

                <div class="tasks-list">

                    <transition-group name="slide-up" tag="div">

                        <div @click="openTask" class="task" :key="index" v-for="(task, index) in tasks">

                            <div class="task-priority" :class="{ 'high' : (task.priority === 'high'), mid : (task.priority === 'mid') }"></div>

                            <p class="task-text task-title" :title="task.name" >{{ task.name }}</p>

                            <p class="task-text task-state" >{{ task.state }}</p>

                            <div></div>

                            <p class="task-text task-deadline" >{{ task.created.split('T')[0] }}</p>

                            <div class="task-nav">

                                <img src="/images/assets/icons/add_task.png" />

                                <img src="/images/assets/icons/edit_task.png" />

                                <img src="/images/assets/icons/delete_task.png" />

                            </div>

                        </div>

                    </transition-group>

                </div>

            </div>

            <div class="users-wrap">

                <div class="users-list">

                    <user-badge
                        :key="index" 
                        v-for="(user, index) in assignedUsers" 
                        :name="user.name"
                        :surname="user.surname"
                        :avatar="'/images/janeDoe.png'" />

                </div> <!-- end .users-list -->

            </div> <!-- end .users-wrap -->

        </div> <!-- end .tasks -->

        <div class="project-footer"></div>

    </div>

</template>

<script>

    import userBadge from '../templates/macro/userBadge'

    export default {
    
        name: 'project',

        components: {
            userBadge
        },

        data() {
            return {
                state: 'production',
                random: ""
            }
        },

        computed: {

            project() {
                return this.$store.state.userProjects.userProjects.find((project) => {

                    return project.id === Number(this.$route.params.id)

                }) || {}
            },
            assignedUsers() {

                return this.$store.state.users.users.filter((user,index) => {

                    return user.id === this.project.users[index]

                }) || {}

            },
            tasks: { get() { return this.$store.state.tasks.tasks } },
            tasksLength() { return this.tasks.length || 0 }

        },

        methods: {

            openTask(event) {

                $('.task').not(event.currentTarget).removeClass('task-open')
                $(event.currentTarget).toggleClass('task-open')
    
            },

            newTask() {

                this.$store.dispatch( 'NEW_TASK', this.$route.params.id )
            }
        },

        created() {

            this.$store.dispatch('GET_USERS')
            this.$store.dispatch('GET_TASKS', this.$route.params.id )
            
        }

    }

</script>


<style scoped>

    .project {

        width: 100%;
        height: calc(100vh - 92px);
        min-height: 0;

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 100px 60px auto 80px;
        grid-gap: 4px;
    }

    .project-card {

        height: 100px;

        display: grid;
        grid-template-columns: 20px auto;
        grid-template-rows: 30px 20px;
        grid-column-gap: 10px;
        align-items: center;

        padding: 22px 20px;
    }

    .priority-state {

        width: 20px;
        height: 100%;

        grid-row: 1/4;
    }

    @keyframes bounce {

        0% {
            top: 32px;
            transform:scaleY(0.9) scaleX(1.1);
        }

        50% {

            transform:scaleY(1.1) scaleX(0.9);
        }

        100% {

            top: 60px;
            transform:scaleY(0.9) scaleX(1.1);
        }
    }

    .bouncer {

        width: 10px;
        height: 10px;

        position: absolute;
        top: 32px;
        left: 25px;

        background-color: var(--white);
        border-radius: 10px;
    }

    .project-info {

        font-size: 12px;
        color: rgba(255,255,255,0.3);
    }

    .name {

        font-family: var(--decorative);
        font-size: 14px;
        font-weight: 500;
        color: var(--white);
    }

    /* ---------- TASKS CSS ---------- */

    .slide-up-enter-active, .slide-up-leave-active {

        transition: 0.3s ease;
    }

    .slide-up-enter, .slide-up-leave-to {

        opacity: 0;
        transform: translateY(10px);
    }

    .tasks {

        min-height: 0;

        padding: 0px 20px;

        position: relative;

        display: grid;
        grid-template-columns: auto 200px;
        grid-template-rows: 60px auto;
        grid-gap: 4px;

        overflow: hidden;
    }

    .tasks-header {

        grid-column: 1/3;

        display: grid;
        grid-template-columns: auto 60px 140px 60px;
        grid-template-rows: 60px;
        grid-gap: 4px;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .header-title {

        font-family: var(--decorative);
        font-size: 14px;
        font-weight: 500;
        color: gray;

        padding: 22px 20px;
    }

    .add {

        padding: 16px;

        opacity: 0.3;

        cursor: pointer;

        transition: 0.2s ease;
    }

    .add:hover {

        opacity: 0.6;
    }

    .tasks-wrap {

        min-height: 0;

        position: relative;

        border-right: 1px solid rgba(0,0,0,0.1);

        overflow: hidden;
    }

    .tasks-list {

        width: calc( 100% + 17px );
        min-height: 0;
        height: 100%;

        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;

        padding: 10px;
        padding-top: 6px;

        overflow: hidden;
        overflow-y: scroll;
    }

    .task {

        font-size: 12px;
        color: rgba(255,255,255,0.3);

        height: 40px;

        position: relative;
        margin-top: 4px;

        display: grid;
        grid-template-columns: 20px 200px 100px auto 100px 90px;
        grid-template-rows: 40px;
        grid-column-gap: 10px;
        align-items: center;

        background-color: var(--black);
        border-radius: 5px;

        cursor: pointer;

        transition: 0.3s ease;
    }

    .task-open {

        height: 400px;

        background-color: rgba(0,0,0,0.3);
    }

    .task-priority {

        width: 4px;
        height: 14px;

        position: relative;
        justify-self: flex-end;

        background-color: gray;
        border-radius: 4px;
    }

    .task-mid {

        background-color: var(--yellow);
    }

    .task-high {

        background-color: var(--red);
    }

    .task-text {

        color: rgba(255,255,255,0.3);
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;

        padding: 14px;

        overflow: hidden;
    }

    .task-title {

        text-align: left;
        color: rgba(255,255,255,0.5);
    }

    .task-state, .task-deadline {

        background-color: rgba(0,0,0,0.05);
    }

    .task-state:hover, .task-deadline:hover {

        color: var(--white);
        background-color: rgba(0,0,0,0.2);
    }

    .task-nav {

        display: grid;
        grid-template-columns: 24px 24px 24px;
        grid-column-gap: 4px;
        grid-template-rows: 24px;

        justify-self: flex-end;

        padding-right: 10px;
    }

    .task-nav img {

        padding: 6px;

        opacity: 0.3;

        transition: 0.2s ease;
    }

    .task-nav img:hover {

        opacity: 0.8;
    }

    /* ---------- USERS CSS ---------- */

    .users-wrap {

        position: relative;
        min-height: 0;

        overflow: hidden;
    }

    .users-list {

        width: calc(100% + 17px);
        height: 100%;

        display: grid;
        grid-template-columns: 190px;
        grid-auto-rows: min-content;
        grid-row-gap: 4px;
        justify-content: center;

        padding: 10px 0px;

        overflow-y: scroll;
    }

    .project-footer {

        height: 80px;

        position: relative;

        border-top: 1px solid rgba(0,0,0,0.1);
    }

    .high {

        background-color: var(--red);
    }

    .mid {

        background-color: var(--yellow);
    }

    .low {

        background-color: gray;
    }

    .production {

        animation: bounce 0.6s ease-in-out alternate infinite;
    }

    .finished {

        background-color: var(--green);
        animation: none;
    }

    .backup {

        background-color: var(--black);
        animation: none;
    }

</style>

