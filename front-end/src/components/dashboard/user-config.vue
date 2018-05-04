<template>

  <div class="user-config-wrap">

    <div class="nav-split"></div>

    <div class="user-config">

      <h1>User configuration</h1>

      <div class="user-config-nav">

        <p class="user-config-nav-link" @click="addUserMenu" v-bind:class="{ 'link-active': this.addUser }" >Add User</p>
        <p class="user-config-nav-link" @click="editUserMenu" v-bind:class="{ 'link-active': this.editUser }" >Edit User</p>
        <p class="user-config-nav-link" @click="deleteUserMenu" v-bind:class="{ 'link-active': this.deleteUser }" >Delete User</p>

      </div> <!-- end.user-config-nav -->

      <div class="user-config-loader">

        <transition name="slide-fade">
          <add-user v-if="addUser" v-show="true" />
        </transition>

        <transition name="slide-fade">
          <edit-user v-if="editUser" v-show="true" />
        </transition>

        <transition name="slide-fade">
          <delete-user v-if="deleteUser" v-show="true" />
        </transition>

      </div> <!-- end.user-config-loader -->

    </div> <!-- end.user-config -->

  </div>

</template>

<script>

  import addUser from '../forms/add-user'
  import editUser from '../forms/edit-user'
  import deleteUser from '../forms/delete-user'

  export default {

    name: 'user-config',
    components: {
      addUser,
      editUser,
      deleteUser
    },

    data() {
      return {
        addUser: true,
        editUser: false,
        deleteUser: false
      }
    },

    methods: {
      addUserMenu() {
        this.addUser = true
        this.editUser = false
        this.deleteUser =false
      },
      editUserMenu() {
        this.addUser = false
        this.editUser = true
        this.deleteUser = false
      },
      deleteUserMenu() {
        this.addUser = false
        this.editUser = false
        this.deleteUser = true
      }
    }
  }

</script>

<style scoped>

  /* Google Fonts
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  h1 {
    font-size: 20px;
    font-weight: 500;
    color: dimgray;

    padding: 30px 0px;

    border-bottom: 1px solid whitesmoke;
  }

  .user-config-wrap {
    width: 100%;
    height: 100%;

    position: relative;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px auto;

    overflow: hidden;
  }

  .user-config {
    width: 100%;
    max-width: 1200px;

    position: relative;
    margin: auto;
    margin-top: 0px;

    display: grid;
    grid-template-rows: 100%;
    grid-template-rows: 80px 60px auto;

    padding: 0px 40px;
  }

  .user-config-nav {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 60px;
    grid-column-gap: 4px;

  }

  .user-config-nav-link {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 14px;
    color: #BDBDBD;
    user-select: none;

    padding: 22px;

    border-bottom: 4px solid whitesmoke;

    transition: 0.2s ease;

    cursor: pointer;
  }

  .user-config-nav-link:hover {
    color: #9E9E9E;

    border-bottom: 4px solid lightgray;
  }

  .user-config-loader {
    
    padding: 20px;
  }

  .link-active {

    font-weight: 500;
    color: dimgray;

    border-bottom: 4px solid #E74040;
  }

  .link-active:hover {

    font-weight: 500;
    color: dimgray;

    border-bottom: 4px solid #E74040;
  }

  .slide-fade-enter-active {

    transition: all .3s ease;
  }

  .slide-fade-leave-active {

    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translate(200px);
    opacity: 0;
  }

</style>
