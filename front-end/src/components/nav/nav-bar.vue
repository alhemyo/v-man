
<template>

  <div class="nav-bar">

    <p class="nav-bar-title">V<span>-MAN</span></p>

    <div class="nav-main-wrap">

      <div class="nav-icon-wrap" title="dashboard" @click="openDashboard" :class="{ 'open-nav-icon-wrap': activeDashboard }" >

        <img v-if="activeDashboard" :src="activeDashboardSrc" />
        <img class="nav-icon" v-else :src="defaultDashboardSrc" />
        <p class="nav-icon-desc" :class="{ 'open-nav-icon-desc': activeDashboard }" >| dashboard</p>

      </div>

      <div class="nav-icon-wrap" title="projects" @click="openProjects" :class="{ 'open-nav-icon-wrap': activeProjects }">

        <img v-if="activeProjects" :src="activeProjectsSrc" />
        <img class="nav-icon" v-else :src="defaultProjectsSrc" />
        <p class="nav-icon-desc" :class="{ 'open-nav-icon-desc': activeProjects }" >| projects</p>

      </div>

      <div class="nav-icon-wrap" title="chat" @click="openChat" :class="{ 'open-nav-icon-wrap': activeChat }" >

        <img v-if="activeChat" :src="activeChatSrc" />
        <img class="nav-icon" v-else :src="defaultChatSrc" />
        <p class="nav-icon-desc" :class="{ 'open-nav-icon-desc': activeChat }" >| chat</p>

      </div>

    </div>

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

        // Computed settings
        activeSettings: {
          get() { return this.$store.state.nav.settings.active },
          set(value) { this.$store.commit( 'updateActiveSettings', value ) }
        },
        defaultSettingSrc: { get() { return this.$store.state.nav.settings.defaultSrc } },
        activeSettingsSrc: { get() { return this.$store.state.nav.settings.activeSrc } },

        // Computed dashboard
        activeDashboard: {
          get() { return this.$store.state.nav.dashboard.active },
          set(value) { this.$store.commit( 'updateActiveDashboard', value ) }
        },
        defaultDashboardSrc: { get() { return this.$store.state.nav.dashboard.defaultSrc } },
        activeDashboardSrc: { get() { return this.$store.state.nav.dashboard.activeSrc } },

        // Computed projects
        activeProjects: {
          get() { return this.$store.state.nav.projects.active },
          set(value) { this.$store.commit( 'updateActiveProjects', value ) }
        },
        defaultProjectsSrc: { get() { return this.$store.state.nav.projects.defaultSrc } },
        activeProjectsSrc: { get() { return this.$store.state.nav.projects.activeSrc } },

        // Computed Chat
        activeChat: {
          get() { return this.$store.state.nav.chat.active },
          set(value) { this.$store.commit( 'updateActiveChat', value ) }
        },
        defaultChatSrc: { get() { return this.$store.state.nav.chat.defaultSrc } },
        activeChatSrc: { get() { return this.$store.state.nav.chat.activeSrc } }
    },

    methods: {
      openSettings: function() { this.activeSettings = !this.activeSettings },
      openDashboard: function() {
        this.activeDashboard = true
        this.activeProjects = false
        this.activeChat = false
      },
      openProjects: function() {
        this.activeProjects = true
        this.activeDashboard = false
        this.activeChat = false
      },
      openChat: function() {
        this.activeChat = true
        this.activeDashboard = false
        this.activeProjects = false
      }
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

  .nav-main-wrap {

    position: relative;
    float: left;
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
