<template>

  <div class="user-config-wrap">

    <div class="nav-split"></div>

    <div class="user-config">

      <div class="user-config-nav">

        <p class="user-config-nav-link">Add User</p>
        <p class="user-config-nav-link">Edit User</p>
        <p class="user-config-nav-link">Delete User</p>

      </div> <!-- end.user-config-nav -->

      <div class="user-config-loader">

        <add-user />
        <!-- <edit-user /> -->
        <!-- <delete-user /> -->

      </div> <!-- end.user-config-loader -->

    </div> <!-- end.user-config -->

  </div>

</template>

<script>

  import addUser from '../forms/add-user'

  export default {

    name: 'user-config',
    components: {
      addUser
    }
    
  }

</script>

<style scoped>

  /* Google Fonts
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  .user-config-wrap {

    width: 100%;
    height: 100%;

    position: relative;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px auto;
  }

  .user-config {

    width: 100%;
    max-width: 1200px;

    position: relative;
    margin: auto;
    margin-top: 0px;

    display: grid;
    grid-template-rows: 100%;
    grid-template-rows: 40px auto;

    padding: 0px 40px;
  }

  .user-config-nav {

    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 40px;
    grid-column-gap: 4px;

  }

  .user-config-nav-link {

    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 14px;
    color: #BDBDBD;

    padding: 12px;

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

</style>
