<template>
    
    <div class="project" :key="project.name">

        <div class="project-card">

            <div class="priority-state">

                <div class="bouncer" 
                    :class="{ 
                        high : (project.priority === 'high'), 
                        mid : (project.priority === 'mid'), 
                        low : (project.priority ==='low'),
                        'in-production': ( this.state === 'in-production' ),
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

                    <p class="header-title">Tasks</p>

                </div>

                <div class="users-nav">

                    <p class="header-title">Asigned users</p>

                </div>

            </div> <!-- end .tasks-header-->

            <div class="tasks-wrap"></div>

            <div class="users-wrap"></div>

        </div> <!-- end .tasks -->

        <div class="project-footer"></div>

    </div>

</template>

<script>

    export default {
    
        name: 'project',

        data() {
            return {
                state: 'in-production'
            }
        },

        computed: {
            projects: { get() { return this.$store.state.userProjects.userProjects } },
            project() { return this.projects.find( (project) => { return project.name === this.$route.params.name }) || 'Project' }
        },

        methods: {

            test() {

                console.log(this.project)
            }
        }

    }

</script>


<style scoped>

    .project {

        width: 100%;
        height: 100%;

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
            top: 30px;
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
        top: 30px;
        left: 25px;

        background-color: var(--white);
        border-radius: 10px;
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

    .in-production {

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

    .tasks {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: auto 200px;
        grid-template-rows: 60px auto;
        grid-gap: 4px;
    }

    .tasks-header {

        grid-column: 1/3;

        display: grid;
        grid-template-columns: auto 200px;
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

    .tasks-wrap {

        border-right: 1px solid rgba(0,0,0,0.1);
    }

    .project-footer {

        border-top: 1px solid rgba(0,0,0,0.1);
    }

</style>

