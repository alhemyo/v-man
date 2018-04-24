<template>

  <div class="dash-bar">

    <div class="header-space"></div>

    <div class="user-card">

      <div class="profile-pic">

        <img class="p-p" :src="pp" alt="profile picture" />

      </div>

      <div class="user-info">

        <p class="info user-name"><span v-if="admin">admin | </span>{{ name }}</p>
        <p class="info user-position">{{ position }}</p>
        <p class="info user-status">{{ status }}</p>

      </div>

    </div>

    <div class="user-projects">
      
    </div>

    <div class="dash-footer">
      
      <div v-if="admin" class="add-project">

        <p class="link-description">new project |</p>
        <img src="static/images/icons/add.png" />

      </div>

    </div>

  </div>

</template>

<script>

  export default { 

    name: 'dashboard',

    computed: {
      pp() {
        return this.$store.state.dash.pp
      },
      admin() {
        return this.$store.state.dash.admin
      },
      name() {
        return this.$store.state.dash.name + ' ' + this.$store.state.dash.surname
      },
      position() {
        return this.$store.state.dash.position
      },
      status() {
        return this.$store.state.dash.status
      }
    },
    updated() {

      console.log( 'Dashboard ready!' )

      setTimeout(() => {
        let loginBoardW = $('.login-board').innerWidth()

        $('.login-bar').addClass('login-bar-out')
        $('.login-board').addClass('login-board-out')
        $('.login-board-out').css( 'transform', 'translateX(' + loginBoardW + 'px)' )

        setTimeout(() => {
          $('.login-wrap').hide()
        },1000)

      },4000)
    }

  }

</script>

<style scoped>

  /*
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  .dash-bar {

    background-color: #E74040;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px 230px auto 80px;
  }

  .user-card {

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
  }

  .p-p {

    padding: 40px;
  }

  .user-info {

    padding: 40px;
    padding-left: 0px;
  }

  .info {

    font-family: 'Roboto', sans-serif;
    padding: 10px;
    color: white;
  }

  .user-position, .user-name span {

    font-weight: bold;
    color: #B50000;
  }

  .add-project {

    float: right;

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;

    padding: 30px;

    cursor: pointer;
  }

  .link-description {

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.6);

    padding: 6px;

    opacity: 0;

    transform: translateX(40px);

    transition: all 0.3s ease;
  }

  .add-project:hover .link-description {

    transform: translateX(0px);
    opacity: 1;
  }

</style>
