<template>

  <div class="nav-bar">

    <h1 class="app-title">V<span>-MAN</span></h1>

    <div class="nav-bar-main">

      <img :src="mainNav.dashboard.active" />

      <img :src="mainNav.projects.default" />

      <img :src="mainNav.chat.default" />

    </div>

  </div>

</template>

<script>

  export default {

    name: 'nav-bar',

    data() {
      return {
        mainNav: {
          dashboard: {
            default: "/static/images/icons/navbar/default/dashboard.png",
            active: "/static/images/icons/navbar/active/dashboard_active.png"
          },
          projects: {
            default: "/static/images/icons/navbar/default/projects.png",
            active: "/static/images/icons/navbar/default/projects_active.png"
          },
          chat: {
            default: "/static/images/icons/navbar/default/chat.png",
            active: "/static/images/icons/navbar/active/chat_active.png"
          }
        }
      }
    }

  }

</script>

<style scoped>

  .nav-bar {

    width: 100%;
    height: 80px;

    position: absolute;
    top: 0px;
    left: 0px;
  }

  .app-title {

    font-size: 24px;
    color: #FF312E;

    position: relative;
    float: left;

    padding: 28px 40px;
  }

  .app-title span {

    font-weight: normal;
    color: #58565C;
  }

  .nav-bar-main {

    width: auto;
    height: 80px;

    position: relative;
    float: left;

    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 40px;
  }

</style>
