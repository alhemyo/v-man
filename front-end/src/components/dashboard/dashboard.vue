<template>

  <div class="dashboard">

    <div class="nav-space"></div>

    <div class="user-card">

      <div class="avatar">

        <img :src="avatar" />

      </div>

      <div class="user-card-info">

        <p class="user-card-info-name">{{ name }}</p>
        <p class="user-card-info-position">{{ position }}</p>
        <p class="user-card-info-status">{{ status }}</p>
        <p class="user-card-info-timelog">{{ timeLog }}</p>

      </div>

    </div>

    <div data-simplebar class="scroll-wrap">

        <div class="user-projects">

          <p class="user-projects-title">MY PROJECTS</p>

          <ul>

            <li
              v-for="project in projects">
              <dash-project
                :projectName="project.name"
                :current = "project.current" />
            </li>

          </ul>

        </div>

    </div>

    <div class="dash-footer">

      <img src="/static/images/icons/dashboard/add.png" />
      <p>New project</p>

    </div>

  </div>

</template>

<script>

  import dashProject from '../dashboard/dash-project'

  export default {

    name: 'dashboard',

    components: {
      dashProject
    },

    data() {
      return {
        avatar: '/static/images/janeDoe.png',
        name: 'Jane Doe',
        position: 'DESIGN',
        status: 'online',
        timeLog: '06 : 34 : 23',
      }
    },

    computed: {
      projects: {
        get() { return this.$store.state.projects.projects }
      }
    },

    beforeCreate() {
      this.$store.dispatch('GET_PROJECTS')
    }

  }

</script>

<style scoped>

  .dashboard {

    width: 338px;
    height: 100vh;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px 180px auto 80px;

    background-color: #FBFBFB;
  }

  .user-card {

    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: auto;

    padding: 40px 40px;
  }

  .user-card-info {

    font-size: 14px;
    color: #757575;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-row-gap: 10px;

    padding: 4px 20px;
    padding-right: 0px;
  }

  .user-card-info-position {

    font-weight: bold;
  }

  .user-projects-title {

    font-weight: bold;
    color: #757575;
    font-size: 14px;

    width: 100%;
    height: 74px;

    padding: 30px 0px;

    border-bottom: 1px solid #E1E1E1;
  }

  .dash-footer {

    padding: 0px 40px;

    overflow: hidden;
  }

  .user-projects {

    padding: 40px;
    overflow: hidden;
  }

  .dash-footer img {

    position: relative;
    float: right;
    filter: grayscale(1);

    padding: 30px;
    padding-right: 0px;

    cursor: pointer;
    transition: all .1s ease;
  }

  .dash-footer p {

    font-size: 14px;
    font-weight: lighter;
    color: #757575;

    position: relative;
    float: right;

    padding: 33px 0px;
  }

  .dash-footer img:hover {

    filter: grayscale(0);
  }

</style>
