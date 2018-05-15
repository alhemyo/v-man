<template>

  <div class="dash-project" :class="{ 'dash-project-current' : current }">

    <div class="dash-project-main">

      <p class="dash-project-name">{{ projectName }}</p>
      <img src="/static/images/icons/dashboard/dashProjectArrow.png" title="Open project folder" />

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
    font-weight: lighter;
    white-space: nowrap;
    color: #757575;

    width: 100%;
    height: 74px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 74px;

    border-bottom: 1px solid #E1E1E1;

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
    grid-template-columns: min-content max-content 40px;
    grid-template-rows: 74px;

    justify-content: space-between;
  }

  .dash-project-name {

    padding: 30px 0px;
  }

  .dash-project img {

    padding: 32px 20px;

    cursor: pointer;
  }

  .dash-project-status-wrap {

    padding: 32px;
    padding-left: 30px;
    padding-right: 0px;

    cursor: pointer;
  }

  .dash-project-status {

    width: 10px;
    height: 10px;

    background-color: #C5C5C5;
    border-radius: 10px;
  }

  .dash-project-status-current {

    background-color: #E74040;
  }

  .dash-project-nav {

    color: lightgray;

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

    color: gray;
  }

</style>
