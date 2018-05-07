<template>

  <div class="settings" :class="{ 'open-settings': this.activeSettings }">

    <div class="nav-split">

      <p class="settings-title" :class="{ 'open-settings-title': this.activeSettings }" >| Settings</p>

    </div>

  </div>

</template>

<script>

  export default {
    name: 'settings',
    computed: {
      activeSettings: { get() { return this.$store.state.nav.settings.active } }
    }
  }

</script>

<style scoped>

  .settings {

    width: 200px;
    height: 100vh;

    position: absolute;
    top: 0px;
    right: -200px;
    z-index: 8;

    background-color: #E74040;

    transition: right .3s ease;
  }

  .open-settings {

    right: 0px;
  }

  .settings-title {

    font-size: 14px;
    color: white;
    text-align: center;

    padding: 32px;

    opacity: 0;

    transition: opacity .6s ease;
  }

  .open-settings-title {

    opacity: 1;
  }

</style>
