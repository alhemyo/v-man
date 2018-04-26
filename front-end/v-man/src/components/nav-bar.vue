<template>

  <div class="nav-bar">

    <p class="nav-title"><span>V</span>-MAN</p>

    <div class="dash-nav">

      <div class="link-wrap">

        <img class="link-icon" :src="icons.dashboard.dashOn" >

        <p class="link-desc">| dashboard</p>

      </div>

      <div class="link-wrap">

        <img class="link-icon" :src="icons.projects.projectsOff" >

        <p class="link-desc">| projects</p>

      </div>

      <div class="link-wrap">

        <img class="link-icon" :src="icons.chat.chatOff" >

        <p class="link-desc">| chat</p>

      </div>

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
            dashOff: "static/images/icons/navbar/dash-off.png"
          },
          projects: {
            projectsOn: "static/images/icons/navbar/projects-on.png",
            projectsOff: "static/images/icons/navbar/projects-off.png"
          },
          chat: {
            chatOn: "static/images/icons/navbar/chat-on.png",
            chatOff: "static/images/icons/navbar/chat-off.png"
          }
        }
      }
    },
    mounted() {
      $('.link-wrap').hoverIntent(
        function () {
          $(this).addClass('link-wrap-open')
          $(this).find('.link-desc').addClass('link-desc-open')
        },
        function () {
          $(this).removeClass('link-wrap-open')
          $(this).find('.link-desc').removeClass('link-desc-open')
        }
      )
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

  .link-wrap {

    width: auto;
    max-width: 20px;
    height: 20px;

    position: relative;
    float: left;

    box-sizing: content-box;
    padding: 30px 10px;

    display: grid;
    grid-template-columns: 20px auto;
    grid-template-rows: 20px;

    transition: all 0.3s ease;

    cursor: pointer;
    overflow: hidden;
  }

  .link-wrap-open {

    max-width: 100%;
  }

  .link-desc {

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: white;
    white-space: nowrap;

    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 4px;

    transition: opacity 0.3s ease;

    opacity: 0;
  }

  .link-desc-open {

    opacity: 1;
  }

</style>
