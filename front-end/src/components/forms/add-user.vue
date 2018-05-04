<template>

  <div class="add-user-wrap">

    <div class="nav-split"></div>

    <div class="user-config-wrap">

      <div class="user-config-nav">

        <p class="user-config-nav-link">Add User</p>
        <p class="user-config-nav-link">Edit User</p>
        <p class="user-config-nav-link">Delete User</p>

      </div>

      <div class="user-config-loader">

        <form class="add-user" name="add-user">

          <!-- admin -->

          <div class="add-user-input-wrap checkbox-input double condensed">

            <p class="add-user-input-desc">Admin</p>
            <div class="checkbox-wrap">

              <div class="checkbox-box"></div>

            </div>

            <div class="add-user-input select" @click="toggleSelect($event)">

              <p class="select-desc">Admin type ▼</p>

              <ul class="select-list">

                <li class="select-item">admin</li>
                <li class="select-item">uber admin</li>

              </ul>

            </div>

          </div>

          <!-- position -->

          <div class="add-user-input-wrap">

            <p class="add-user-input-desc">Positon</p>

            <div class="add-user-input select" @click="toggleSelect($event)">

              <p class="select-desc">select Positon ▼</p>

              <ul class="select-list">

                <li class="select-item">Account</li>
                <li class="select-item">Sys admin</li>
                <li class="select-item">3D</li>
                <li class="select-item">MGFX</li>
                <li class="select-item">Design</li>

              </ul>

            </div>

          </div>

          <!-- gender -->

          <div class="add-user-input-wrap">

            <p class="add-user-input-desc">Gender</p>

            <div class="add-user-input select" @click="toggleSelect($event)">

              <p class="select-desc">select Gender ▼</p>

              <ul class="select-list">

                <li class="select-item">Male</li>
                <li class="select-item">Female</li>

              </ul>

            </div>

          </div>

          <!-- name -->

          <div class="add-user-input-wrap">

            <p class="add-user-input-desc">Name</p>
            <input class="add-user-input" type="text" name="name" />

          </div>

          <!-- surname -->

          <div class="add-user-input-wrap">

            <p class="add-user-input-desc">Surname</p>
            <input class="add-user-input" type="text" name="surname" />

          </div>

          <!-- birthday -->

          <div class="add-user-input-wrap tripple">

            <p class="add-user-input-desc">Birthday</p>
            <input class="add-user-input" type="text" name="day" maxlength="2" placeholder="day" />
            <input class="add-user-input" type="text" name="month" maxlength="2" placeholder="month" />
            <input class="add-user-input" type="text" name="year" maxlength="4" placeholder="year" />

          </div>

          <!-- UMCN -->

          <div class="add-user-input-wrap">

            <p class="add-user-input-desc">UMCN</p>
            <input class="add-user-input" type="text" name="umcn" maxlength="13" />

          </div>

          <!-- address -->

          <div class="add-user-input-wrap double">

            <p class="add-user-input-desc">Address</p>
            <input class="add-user-input" type="text" name="city" placeholder="city" />
            <input class="add-user-input" type="text" name="address" placeholder="address" />

          </div>

          <!-- phone -->

          <div class="add-user-input-wrap">

            <p class="add-user-input-desc">Phone</p>
            <input class="add-user-input" type="text" name="phone" />

          </div>

          <!-- email -->

          <div class="add-user-input-wrap">

            <p class="add-user-input-desc">Email</p>
            <input class="add-user-input" type="email" name="email" />

          </div>

        </form>

      </div> <!-- end user-config-loader -->

    </div>

  </div>

</template>

<script>

  export default {
    name: 'add-user',
    methods: {
      toggleSelect($event) {
        $($event.currentTarget).find('.select-list').toggleClass('select-list-down').find('.select-item').toggleClass('select-item-in')
      }
    }
  }

</script>

<style scoped>

  /* Google Fonts
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  .add-user-wrap {

    width: 100%;
    height: 100%;

    position: relative;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px auto;
  }

  .user-config-wrap {

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

  .add-user {

    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }

  .add-user-input-wrap {

    display: grid;
    grid-template-columns: 110px auto;
    grid-template-rows: 40px;
    grid-column-gap: 20px;

    padding: 14px 0px;
  }

  .add-user-input-desc {

    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #BDBDBD;

    padding: 12px;
  }

  .add-user-input {

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #9E9E9E;

    background-color: transparent;
    border: 1px solid #E0E0E0;
    border-radius: 20px;

    padding: 0px 20px;
  }

  .tripple {

    grid-template-columns: 110px auto auto auto;
  }

  .double {

    grid-template-columns: 110px auto auto;
  }

  .condensed {

    grid-template-columns: 110px max-content max-content max-content;
  }

  .checkbox-wrap {

    width: 40px;
    height: 40px;

    padding: 10px;

    border: 1px solid #E0E0E0;
    border-radius: 40px;

    cursor: pointer;
  }

  .checkbox-box {

    width: 100%;
    height: 100%;

    background-color: whitesmoke;
    border: 1px solid #E0E0E0;
    border-radius: 30px;
  }

  .checkbox-wrap:hover .checkbox-box {

    background-color: #E0E0E0;
  }

  .select {

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #BDBDBD;
    text-align: center;

    width: auto;
    height: 40px;

    padding: 12px 0px;

    cursor: pointer;
  }

  .select-list {

    list-style: none;

    height: auto;
    max-height: 0px;

    padding: 0px 12px;
    padding-bottom: 12px;

    position: relative;
    z-index: 0;

    background-color: white;
    border: 1px solid #E0E0E0;
    border-top: none;
    border-radius: 0px 0px 20px 20px;

    overflow: hidden;
    transition: all 0.2s ease;
  }

  .select-list-down {

    max-height: 800px;
    z-index: 2;

    padding: 12px;
  }

  .select-item {

    padding: 12px;

    border-top: 1px solid #F5F5F5;

    opacity: 0;

    transition: 0.2s ease;
  }

  .select-item-in {

    opacity: 1;
  }

  .select-item:nth-last-child(1) {

    padding-bottom: 0px;
  }

  .select-item:hover {

    color: dimgray;
  }


</style>
