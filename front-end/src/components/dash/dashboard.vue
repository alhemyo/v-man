<template>

  <transition name="slide">

    <div v-if="dashboard" class="dashboard">

      <div class="nav-space"></div>

      <div class="user-card">

        <div class="avatar">

          <img src="/static/images/janeDoe.png" />

        </div>

        <div class="user-info">

          <p class="user-name"><span>AD | </span>Jane</p>
          <p class="user-position">design</p>
          <p class="user-status">online</p>
          <p class="user-time-log">06:42:00</p>

        </div>

      </div>

      <div class="user-projects">

        <p class="projects-title">MY PROJECTS</p>

        <ul>

          <li v-for="project in projects" >
            <user-project
            :project-name="project.name"
            :current="project.current" />
          </li>

        </ul>

      </div>

      <div class="dash-footer">

        <img src="static/images/icons/dashboard/add.png" />
        <p>new project</p>

      </div>

    </div>

  </transition>

</template>

<script>

  import userProject from '../projects/user-project'

  export default {

    name: 'dashboard',

    components: {
      userProject
    },

    computed: {
      validation: { get() { return this.$store.state.login.validation } },
      login: { get() { return this.$store.state.components.login } },
      dashboard: { get() { return this.$store.state.components.dashboard } },
      projects: { get() { return this.$store.state.projects.projects } }
    },

    watch: {
      dashboard: {
        handler() {
          this.$store.dispatch('FETCH_PROJECTS')
        },
        immediate: true
      }
    }

  }

</script>

<style scoped>

  .slide-enter-active {

    transition: all 0.5s ease 0.6s;
  }

  .slide-leave-active {

    transition: all 0.3s ease;
  }

  .slide-enter, .slide-leave-to {

    transform: translateX( -338px );
  }

  .dashboard {

    width: 338px;
    height: 100vh;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px 180px auto 80px;

    background-color: whitesmoke;

    overflow: hidden;
  }

  .user-card {

    display: grid;
    grid-template-columns: 170px 1fr;

    background-color: whitesmoke;
  }

  .avatar {

    padding: 40px;
    padding-right: 30px;

    overflow: hidden;
  }

  .user-info {

    font-size: 12px;
    color: dimgray;

    padding: 40px 0px;
    padding-right: 40px;

    display: grid;
    grid-template-rows: auto;
    align-content: space-around;
  }

  .user-name {

    font-size: 16px;
    font-weight: bold;
    color: var(--black);
  }

  .user-name span {

    color: var(--dashText);
  }

  .user-position {

    font-weight: bold;
  }

  .user-status {

    color: var(--green);
  }

  .user-projects {

    width: calc(100% + 17px);

    padding: 0px 40px;

    background-color: rgba(0,0,0,0.05);

    overflow-y: scroll;
  }

  .projects-title {

    font-size: 14px;
    font-weight: bold;

    height: 74px;

    padding: 30px 0px;

    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  .dash-footer {

    background-color: whitesmoke;
    z-index: 1;

    overflow: hidden;
  }

  .dash-footer img {

    position: relative;
    float: right;

    padding: 30px;
    padding-right: 40px;

    filter: grayscale(1);
    opacity: 0.6;

    cursor: pointer;
    transition: all .2s ease;
  }

  .dash-footer img:hover {

    filter: grayscale(0);
    opacity: 1;
  }

  .dash-footer p {

    font-size: 14px;
    font-weight: lighter;

    padding: 34px;
    padding-right: 0px;
    position: relative;
    float: right;
  }

</style>
