
<template>

  <div class="nav-bar">

    <p class="nav-bar-title">V<span>-MAN</span></p>

    <div class="nav-settings" title="settings" @click="openSettings" :class="{ 'nav-settings-open': this.activeSettings }">

      <img v-if="activeSettings" :src="activeSettingsSrc" />
      <img class="nav-settings-icon" v-else :src="defaultSettingSrc" />

    </div>

  </div>

</template>

<script>

  export default {

    name: 'nav-bar',

    computed: {
        activeSettings: {
          get() { return this.$store.state.nav.settings.active },
          set(value) { this.$store.commit('updateActiveSettings', value) }
        },
        defaultSettingSrc: { get() { return this.$store.state.nav.settings.defaultSrc } },
        activeSettingsSrc: { get() { return this.$store.state.nav.settings.activeSrc } }
    },

    methods: {
      openSettings: function() { this.activeSettings = !this.activeSettings }
    }

  }

</script>

<style>

  .nav-bar {

    width: 100%;
    height: 80px;

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 9;
  }

  .nav-bar-title {

    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: white;
    user-select: none;
    -moz-user-select: none;

    position: relative;
    float: left;

    padding: 28px 40px;
  }

  .nav-bar-title span {

    font-weight: normal;
    color: #B50000;
  }

  .nav-settings {

    width: 20px;
    height: 20px;

    position: relative;
    float: right;

    padding: 30px;
    box-sizing: content-box;

    cursor: pointer;

    transition: all .3s ease;
  }

  .nav-settings-open {

    transform: translateX(-120px);
  }

  .nav-settings-icon {

    user-select: none;
    -moz-user-select: none;

    filter: grayscale(1);
    opacity: 0.5;

    transition: all .3s ease;
  }

  .nav-settings:hover .nav-settings-icon{

    filter: grayscale(0);
    opacity: 1;
  }


</style>
