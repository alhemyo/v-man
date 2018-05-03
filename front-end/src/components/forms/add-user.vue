<template>

  <div class="add-user-wrap">

    <div class="nav-split"></div>

    <form class="add-user" name="add-user">

      <p class="add-user-title">Add new user</p>

      <div class="add-user-input-wrap combined">

        <p class="add-user-input-desc">Admin</p>
        <div class="add-user-checkbox no-radius">

          <div class="add-user-checkbox-box"></div>

        </div>

        <select class="add-user-input select">

          <option hidden >Admin type</option>
          <option value="uber">uber admin</option>
          <option value="regular">regular admin</option>

        </select>

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">Name</p>
        <input class="add-user-input" type="text" name="name" placeholder="Jane" />

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">Surname</p>
        <input class="add-user-input" type="text" name="surname" placeholder="Doe" />

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">Gender</p>
        <select class="add-user-input select">

          <option hidden >Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>

        </select>

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">Education</p>
        <select class="add-user-input select">

          <option hidden >Select category</option>
          <option value="low">low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>

        </select>

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">Address</p>
        <input class="add-user-input" type="text" name="address" placeholder="Current living address" />

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">Phone</p>
        <input class="add-user-input" type="text" name="phone" value="00389" />

      </div>

      <div class="add-user-input-wrap mult">

        <p class="add-user-input-desc">Birthday</p>
        <input class="add-user-input no-radius" type="text" name="day" placeholder="day" maxlength="2" />
        <input class="add-user-input no-radius" type="text" name="month" placeholder="month" maxlength="2" />
        <input class="add-user-input" type="text" name="year" placeholder="year" maxlength="4" />

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">EMBG</p>
        <input class="add-user-input" type="text" name="phone" placeholder="0000000000000" maxlength="13" />

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">Email</p>
        <input class="add-user-input" type="email" name="email" placeholder="user@vertigo.com.mk" />

      </div>

      <div class="add-user-input-wrap">

        <p class="add-user-input-desc">Position</p>
        <select class="add-user-input select">

          <option hidden >Select Position</option>
          <option value="account">ACCOUNT</option>
          <option value="system admin">SYS ADMIN</option>
          <option value="3d">3D</option>
          <option value="MGFX">MGFX</option>
          <option value="DESIGN">DESIGN</option>

        </select>

      </div>

      <div>

        <img class="add-user-submit" src="/static/images/icons/add.png" alt="add" title="add user" />

      </div>

    </form>

  </div>

</template>

<script>

  export default {
    name: 'add-user'
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

    position: absolute;
    left: 0px;
    top: 0px;
  }

  .add-user {

    width: 100%;
    max-width: 800px;
    height: auto;

    position: absolute;
    left: 50%;

    transform: translateX( -50% );

    padding: 0px 20px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-gap: 2px;
  }

  .add-user-title {

    font-family: 'Roboto', sans-serif;
    color: dimgray;

    padding: 20px 0px;

    border-bottom: 1px solid whitesmoke;
  }

  .add-user-input-wrap {

    display: grid;
    grid-template-columns: minmax(min-content, 110px) auto;
    grid-template-rows: 40px;
  }

  .add-user-input-wrap select {

    color: #8e8e8e;

    height: 40px;
  }

  .add-user-input-wrap:nth-child(2) {

    padding-top: 20px;
  }

  .mult {

    grid-template-columns: minmax(min-content, 110px) auto auto auto;
    grid-column-gap: 2px;
  }

  .combined {

    grid-template-columns: minmax(min-content, 110px) auto 1fr;
    grid-column-gap: 2px;
  }

  .add-user-input-desc {

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: rgba(0,0,0,0.3);

    padding: 12px 20px;

    background-color: whitesmoke;
    border-radius: 5px 0px 0px 5px;
  }

  .add-user-checkbox {

    width: 48px;

    padding: 12px;
    padding-left: 20px;

    border: 1px solid whitesmoke;
    border-radius: 0px 5px 5px 0px;

    cursor: pointer;
  }

  .add-user-checkbox-box {

    width: 100%;
    height: 100%;

    border: 2px solid gray;
    border-radius: 10px;
  }

  .add-user-checkbox:hover .add-user-checkbox-box {

    background-color: lightgray;
  }

  .add-user-input {

    width: 100%;

    font-family: 'Roboto', sans-serif;
    color: dimgray;
    appearance: none;

    position: relative;

    border: 1px solid whitesmoke;
    border-radius: 0px 5px 5px 0px;

    padding: 12px 20px;
  }

  .select {

    padding: 0px 20px;
  }

  .no-radius {

    border-radius: 0px;
  }

  .add-user-submit {

    width: 40px;
    height: 40px;

    padding: 10px;

    position: relative;
    float: right;
    margin-top: 20px;

    background-color: tomato;
    border-radius: 5px;

    cursor: pointer;

    transition: 0.2s ease;
  }

  .add-user-submit:hover {

    background-color: #8BC34A;
  }

</style>
