<template>

  <div class="dash-project" :class="{ 'dash-project-current' : current }">

    <div class="dash-project-main">

      <p class="dash-project-name">{{ projectName }}</p>
      <img class="dash-project-img" :class="{ 'dash-project-img-current' : current }" src="/static/images/icons/dashboard/dashProjectArrow.png" title="Open project folder" />

      <div class="dash-project-status-wrap" v-if="current" :title="currentTitle">

        <div class="dash-project-status" :class="{ 'dash-project-status-current' : current }"></div>

      </div>

      <div class="dash-project-status-wrap" v-else :title="pendingTitle">

        <div class="dash-project-status" :class="{ 'dash-project-status-current' : current }"></div>

      </div>

    </div>

    <div class="dash-project-nav">

      <p>3D</p>
      <p>MGFX</p>
      <p>DESIGN</p>
      <p>COMP</p>
      <p>AUDIO</p>

    </div>

  </div>

</template>

<script>

  export default {

    name: 'dash-project',

    props: [ 'projectName', 'current' ],

    data() {
      return {
        currentTitle: "This is your current project",
        pendingTitle: "Set this to current project"
      }
    }

  }

</script>

<style scoped>

  .dash-project {

    font-size: 14px;
    font-weight: normal;
    white-space: nowrap;
    color: #131215;

    width: 100%;
    height: 74px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 74px;

    border-bottom: 1px solid rgba(0,0,0,0.1);

    overflow: hidden;
    transition: height .2s ease;
  }

  .dash-project-current {

    font-weight: bold;
    height: 148px;
  }

  .dash-project-main {

    height: 74px;

    display: grid;
    grid-template-columns: 200px 30px 30px;
    grid-template-rows: 74px;

    justify-content: space-between;
    align-items: center;
  }

  .dash-project-name {

    padding: 30px 0px;
  }

  .dash-project-img {

    padding: 32px 10px;

    cursor: pointer;

    opacity: 0;

    transition: opacity 0.2s ease;
  }

  .dash-project-img-current {

    opacity: 1;
  }

  .dash-project-status-wrap {

    padding: 32px 10px;

    cursor: pointer;
  }

  .dash-project-status {

    width: 10px;
    height: 10px;

    position: relative;
    margin: auto;

    background-color: #58565C;
    border-radius: 10px;
  }

  .dash-project-status-current {

    background-color: #FF312E;
  }

  .dash-project-nav {

    color: #58565C;

    display: grid;
    grid-template-columns: min-content min-content min-content min-content min-content;
    grid-template-rows: 74px;

    justify-content: space-between;
    align-items: center;
  }

  .dash-project-nav p {

    padding: 30px 0px;

    cursor: pointer;

    transition: color 0.2s ease;
  }

  .dash-project-nav p:hover {

    color: #7D7B80;
  }

</style>
