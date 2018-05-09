<template>

  <div class="settings" :class="{ 'open-settings': this.activeSettings }">

    <div class="nav-split">

      <p class="settings-title" :class="{ 'open-settings-title': this.activeSettings }" >| Settings</p>

    </div>

    <ul class="settings-list settings-list-user">
      
      <li class="settings-item">edit profile</li>

    </ul>

    <ul class="settings-list settings-list-admin">
      
      <li class="settings-item">user configuration</li>
      <li class="settings-item">time configuration</li>

    </ul>

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

  .settings-list {

    font-size: 12px;
    color: rgba(255,255,255,0.5);
    list-style: none;

    padding: 20px 40px;

    border-top: 1px solid rgba(0,0,0,0.05);
  }

  .settings-list:nth-last-child(1) {

    border-bottom: 1px solid rgba(0,0,0,0.05);
  }

  .settings-item {

    padding: 10px 0px;

    transition: color .2s ease;
  }

  .settings-item:hover {

    color: white;

    cursor: pointer;
  }

</style>
