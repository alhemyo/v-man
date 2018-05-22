<template>

  <div class="nav-bar">

    <h1><span>V</span>-MAN<span v-show="login" > | project assistant</span></h1>

    <transition name="main">

      <div v-show="dashboard" class="main-nav">

        <img v-show="dashboard" :src="mainNav.dashboard.active" title="dashboard" />
        <img v-show="!dashboard" :src="mainNav.dashboard.default" title="dashboard" />

        <img v-show="projects" :src="mainNav.projects.active" title="projects" />
        <img v-show="!projects" :src="mainNav.projects.default" title="projects" />

        <img v-show="chat" :src="mainNav.chat.active" title="chat" />
        <img v-show="!chat" :src="mainNav.chat.default" title="chat" />

      </div>

    </transition>

  </div>

</template>

<script>

  export default {

    name: 'nav-bar',

    data() {
      return {
        mainNav: {
          dashboard: {
            active: '/static/images/icons/navbar/active/dashboard_active.png',
            default: '/static/images/icons/navbar/default/dashboard.png'
          },
          projects: {
            active: '/static/images/icons/navbar/active/projects_active.png',
            default: '/static/images/icons/navbar/default/projects.png'
          },
          chat: {
            active: '/static/images/icons/navbar/active/chat_active.png',
            default: '/static/images/icons/navbar/default/chat.png'
          }
        }
      }
    },

    computed: {
      validation: { get() { return this.$store.state.login.validation } },
      login: { get() { return this.$store.state.components.login } },
      dashboard: { get() { return this.$store.state.components.dashboard } },
      projects: { get() { return this.$store.state.components.projects } },
      chat: { get() { return this.$store.state.components.chat } }
    }

  }

</script>

<style scoped>

  .main-enter-active, .main-leave-active {

    transition: all 0.5s ease 0.8s;
  }

  .main-enter, .main-leave-to {

    opacity: 0;
    transform: translateY( 10px );
  }

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
    color: var(--black);

    position: relative;
    float: left;

    padding: 28px 40px;
    padding-right: 20px;
  }

  h1 span:nth-child(1) {

    font-weight: bold;
    color: var(--red);
  }

  h1 span:nth-child(2) {

    font-size: 16px;
    color: var(--dashText);

    transition: all 0.3s ease;
  }

  .main-nav {

    display: grid;
    grid-template-columns: repeat(3, 60px);
  }

  .main-nav > img {

    padding: 30px 20px;

    cursor: pointer;
  }

</style>
