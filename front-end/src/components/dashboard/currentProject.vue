<template>

  <div class="current-project">

    <div class="nav-space"></div>

    <div class="project"></div>

    <div class="project-users"></div>

    <div class="project-footer"></div>

  </div>

</template>

<script>

  export default {

    name: 'current-project'

  }

</script>

<style scoped>

  .current-project {

    width: 100%;

    display: grid;
    grid-template-columns: auto 200px;
    grid-template-rows: 80px auto 80px;

  }

  .current-project .nav-space {

    grid-column: 1/3;
  }

  .project {
  }

  .project-users {

    width: 200px;

    border-left: 1px solid rgba(0,0,0,0.1);
  }

  .project-footer {

    grid-column: 1/3;
  }

</style>
