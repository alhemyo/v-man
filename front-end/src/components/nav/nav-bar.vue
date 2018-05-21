<template>

  <div class="nav-bar">

    <h1><span>V</span>-MAN<span v-show="!validation" > | project assistant</span></h1>

  </div>

</template>

<script>

  export default {

    name: 'nav-bar',

    computed: {
      validation: { get() { return this.$store.state.login.validation } }
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
    z-index: 100;
  }

  h1 {

    font-size: 24px;
    color: #171A1E;

    padding: 28px 40px;
  }

  h1 span:nth-child(1) {

    font-weight: bold;
    color: #FF312E;
  }

  h1 span:nth-child(2) {

    font-size: 16px;

    transition: all 0.3s ease;
  }

</style>
