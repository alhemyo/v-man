<template>

  <div class="nav-bar">

    <p class="nav-title"><span>V</span>-MAN</p>

    <div class="icon-wrap">
      
      <img class="nav-icon" :src="icons.dashboard.dashOn" alt="nav-icon">

      <p class="nav-desc">| {{ icons.dashboard.desc }}</p>

    </div>

    <div class="icon-wrap">
      
      <img class="nav-icon" :src="icons.projects.projectsOff" alt="nav-icon">

      <p class="nav-desc">| {{ icons.projects.desc }}</p>

    </div>

    <div class="icon-wrap">
      
      <img class="nav-icon" :src="icons.chat.chatOff" alt="nav-icon">

      <p class="nav-desc">| {{ icons.chat.desc }}</p>

    </div>

  </div>

</template>

<script>

  export default {

    name: 'navBar',
    data() {
      return {
        icons: {
          dashboard: {
            dashOn: "static/images/icons/navbar/dash-on.png",
            dashOff: "static/images/icons/navbar/dash-off.png",
            desc: "dashboard"
          },
          projects: {
            projectsOn: "static/images/icons/navbar/projects-on.png",
            projectsOff: "static/images/icons/navbar/projects-off.png",
            desc: "projects"
          },
          chat: {
            chatOn: "static/images/icons/navbar/chat-on.png",
            chatOff: "static/images/icons/navbar/chat-off.png",
            desc: "chat"
          }
        }
      }
    }

  }

</script>

<style scoped>

  /*
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  .nav-bar {

    width: 100%;
    height: 80px;

    position: absolute;
    top: 0px;
    left: 0px;

    z-index: 15;
  }

  .nav-title {

    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    color: white;

    padding: 28px 40px;

    float: left;
  }

  .nav-title span {

    font-weight: bold;
    color: #B50000;
  }

  .icon-wrap {

    width: auto;
    height: auto;

    position: relative;
    float: left;

    padding: 30px 10px;

    cursor: pointer;
  }

  .nav-icon {

    float: left;
  }

  .nav-desc {

    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: 0px;

    float: left;

    padding: 3px 0px;
    opacity: 0;

    transition: all 0.3s ease;

    overflow: hidden;
  }

  .icon-wrap:hover .nav-desc {

    width: auto;
    padding: 3px 10px;

    opacity: 1;
  }

</style>
