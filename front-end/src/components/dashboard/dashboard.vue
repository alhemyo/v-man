<template>

  <div class="dashboard">

    <div class="nav-split"></div>

    <div class="user-info">

      <div class="avatar">

        <img :src="avatar" />

      </div>

      <div class="info">

        <p class="info-slot info-name"><span class="info-admin" v-if="admin">ADMIN |</span> {{ name + ' ' + surname }} </p>
        <p class="info-slot info-position"> {{ position }} </p>
        <p class="info-slot info-status"> {{ status }} </p>
        <p class="info-slot info-time"> 00:00:00 </p>

      </div>

    </div>

    <div class="user-projects"></div>

    <div class="dash-footer"></div>

  </div>

</template>

<script>

  export default {
    name: "dashboard",

    computed: {
      avatar: { get() { return this.$store.state.user.avatar } },
      name: { get() { return this.$store.state.user.name } },
      surname: { get() { return this.$store.state.user.surname } },
      position: { get() { return this.$store.state.user.position } },
      status: { get() { return this.$store.state.user.status } },
      admin: { get() { return this.$store.state.user.admin } }
    }
  }

</script>

<style scoped>

  /* Google Fonts
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  .dashboard {

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px 150px auto 80px;

    background-color: #E74040;
  }

  .user-info {

    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: 100%;

    padding: 0px 20px;

    border-bottom: 1px solid rgba(0,0,0,0.05);
  }

  .avatar {

    padding: 20px;
  }

  .info {

    padding: 24px 20px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  .info-slot {

    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: white;
  }

  .info-position, .info-admin {

    font-weight: bold;
    color: #B50000;
  }

  .dash-footer {

    border-top: 1px solid rgba(0,0,0,0.05);
  }

</style>
