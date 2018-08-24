<template>
    
    <div class="side-bar">

        <div class="header">

            <h1>V <span>MAN</span></h1>

        </div> <!-- end .header -->

        <div class="user-card">

            <div class="avatar">

                <div class="avatar-wrap">

                    <img src="/images/johnDoe.png" />

                </div> <!-- end .avatar-wrap -->

            </div> <!-- end .avatar -->

            <div class="info">

                <p class="user-info name">{{ name }}</p>

                <p class="user-info position">{{ position }}</p>    
                
            </div> <!-- end .info -->

            <div class="status" title="online"></div>
            
        </div> <!-- end .user-card -->

        <div class="user-nav"></div>

        <div class="projects">

            <p class="projects-header">My projects</p>

            <div class="projects-list">

                <transition-group name="list" tag="div">
                
                    <div class="project" v-if="project.name" :key="index" v-for="(project,index) in projects">

                        <div class="priority" 
                            :class="{
                                high: ( project.priority === 'high' ),
                                mid: ( project.priority === 'mid' ),
                                low: ( project.priority === 'low' )
                            }"></div>

                        <router-link :to="{ name: 'project', params: { name: project.name } }" class="project-name" >{{ project.name }}</router-link>

                        <img class="project-arrow" src="/images/assets/icons/r_arrow_dark.png" />

                    </div>

                </transition-group>
                
            </div> <!-- end .projects-list -->

            <div v-if="loading" class="projects-loader">

                <div class="loader"></div>

            </div>
            
        </div> <!-- end .projects -->

        <div class="footer"></div>

    </div> <!-- end .side-bar -->

</template>

<script>

    export default {
    
        name: 'side-bar',

        computed: {

            name: { get() { return this.$store.state.authUser.name + ' ' + this.$store.state.authUser.surname } },
            position: { get() { return this.$store.state.authUser.position } },
            projects: { get() { return this.$store.state.userProjects.userProjects } },
            loading() {

                if ( this.projects.length === 0 ) {
                    return true
                }
                else {
                    return false
                }
                
            }

        },

        created() {
            this.$store.dispatch('GET_USER_PROJECTS')
        }

    }

</script>


<style scoped>

    .list-enter-active, .list-leave-active {

        transition: all 1s ease;
    }

    .list-enter, .list-leave-to {

        opacity: 0;
        transform: translateY(30px);
    }

    .side-bar {

        width: 280px;

        position: relative;
        grid-row: 1/3;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 100px 60px auto 80px;
        grid-gap: 4px;

        overflow: hidden;
    }

    h1 {

        font-family: var(--decorative);
        font-size: 24px;
        font-weight: 700;
        color: var(--red);
        user-select: none;

        padding: 28px 20px;
    }

    h1 span {

        color: var(--white);
        font-weight: 500;
    }

    .user-card {

        position: relative;

        display: grid;
        grid-template-columns: 100px auto;
        grid-template-rows: 100px;
    }

    .avatar {

        padding: 20px;
    }

    .status {

        width: 10px;
        height: 10px;

        position: absolute;
        bottom: 15px;
        left: 45px;

        background-color: var(--green);
        border-radius: 20px;
    }

    .info {

        font-family: var(--decorative);
        font-size: 14px;
        font-weight: 500;
        color: var(--white);

        padding: 20px 0px;

        display: grid;
        align-items: center;
    }

    .position {

        font-family: var(--default);
        font-weight: 300;
        color: gray;
    }

    .projects {

        min-height: 0;

        display: grid;
        grid-template-rows: 60px auto;
    }

    .projects-header {

        font-family: var(--decorative);
        font-size: 14px;
        font-weight: 500;
        color: gray;

        padding: 24px 20px;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .projects-list {

        width: calc(100% + 20px);

        padding: 10px;

        overflow-y: scroll;
    }

    @keyframes load {
        
        0% {
            left: 0px;
            opacity: 1;
        }

        50% {

            opacity: 0.5;
            transform: scale(0.8);
        }

        100% {
            left: 50px;
            opacity: 1;
        }

    }

    .projects-loader {

        width: 60px;
        height: 10px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%,-50% );
    }

    .loader {

        width: 10px;
        height: 10px;

        position: absolute;
        left: 0px;

        background-color: var(--white);

        border-radius: 10px;

        animation: load 0.5s ease-in-out alternate infinite;
    }

    .project {

        width: 100%;
        height: 40px;

        padding: 0px 10px;

        display: grid;
        grid-template-columns: 4px auto 20px;
        grid-template-rows: 40px;
        grid-column-gap: 4px;
        align-items: center;

        border-radius: 5px;

        cursor: pointer;
    }

    .priority {

        width: 2px;
        height: 8px;

        background-color: gray;
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

    .project-name {

        font-size: 12px;
        color: rgba(255,255,255,0.2);

        padding: 14px 0px;
    }

    .project-arrow {

        padding: 7px;

        opacity: 0.3;
    }

    .router-link-active {

        color: var(--white);
    }

    .project:hover {
        
        background-color: rgba(0,0,0,0.1);
    }

    .project:hover .project-name {

        color: rgba(255,255,255,0.5);
    }

    .project:hover .project-arrow {

        opacity: 1;
    }

    .footer {

        border-top: 1px solid rgba(0,0,0,0.1);
    }

</style>

