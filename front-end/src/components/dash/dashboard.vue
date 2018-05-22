<template>

  <transition name="slide">

    <div v-if="dashboard" class="dashboard">

      <div class="nav-space"></div>

      <div class="user-card"></div>

      <div class="user-projects"></div>

      <div class="dash-footer"></div>

    </div>

  </transition>

</template>

<script>

  export default {

    name: 'dashboard',

    computed: {
      validation: { get() { return this.$store.state.login.validation } },
      login: { get() { return this.$store.state.components.login } },
      dashboard: { get() { return this.$store.state.components.dashboard } }
    },

    methods: {
      test() {
        this.$store.commit('updateLogin', true)
      }
    }

  }

</script>

<style scoped>

  .slide-enter-active {

    transition: all 0.5s ease 0.6s;
  }

  .slide-leave-active {

    transition: all 0.3s ease;
  }

  .slide-enter, .slide-leave-to {

    transform: translateX( -338px );
  }

  .dashboard {

    width: 338px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px 180px auto 80px;

    background-color: white;
  }

</style>
