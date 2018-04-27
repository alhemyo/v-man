<template>

  <div class="a-p-wrap">

    <div class="header-space"></div>

    <p class="a-p-title">Create project</p>

    <form class="a-p-form" name="addProject" >

      <div class="a-p-input-wrap p-name">

        <p class="a-p-input-desc">Project name</p>
        <input v-model="projectName" class="a-p-input" name="project-name" placeholder=". . ." />

      </div>

      <div class="a-p-input-wrap p-directory">

        <p class="a-p-input-desc">Project dir</p>
        <select v-model="projectDir" class="a-p-input">

          <option class="a-p-option" value="category" disabled >category</option>
          <option class="a-p-option" value="AD" >AD</option>
          <option class="a-p-option" value="BR" >BR</option>
          <option class="a-p-option" value="CS" >CS</option>
          <option class="a-p-option" value="CT" >CT</option>
          <option class="a-p-option" value="DB" >DB</option>
          <option class="a-p-option" value="FA" >FA</option>
          <option class="a-p-option" value="FT" >FT</option>
          <option class="a-p-option" value="HM" >HM</option>
          <option class="a-p-option" value="IN" >IN</option>
          <option class="a-p-option" value="KN" >KN</option>
          <option class="a-p-option" value="OV" >OV</option>
          <option class="a-p-option" value="PP" >PP</option>
          <option class="a-p-option" value="PS" >PS</option>
          <option class="a-p-option" value="RP" >RP</option>
          <option class="a-p-option" value="SF" >SF</option>
          <option class="a-p-option" value="TK" >TK</option>
          <option class="a-p-option" value="VD" >VD</option>
          <option class="a-p-option" value="VT" >VT</option>
          <option class="a-p-option" value="ZZ" >ZZ</option>

        </select>

      </div>

      <div class="a-p-input-wrap p-priority">

        <p class="a-p-input-desc">Priority</p>
        <input v-model="projectPriority" class="a-p-input" name="project-name" placeholder=". . ." />

      </div>

      <div class="a-p-textarea-wrap p-description">

        <p class="a-p-input-desc">Project description</p>
        <textarea v-model="projectDescription" class="a-p-textarea" name="project-description" placeholder=". . ." ></textarea>

      </div>

    </form>

  </div>

</template>

<script>

  export default {

    name: 'add-project',
    data() {
      return {
        projectName: "",
        projectDescription: "",
        projectDir: "category",
        projectPriority: ""
      }
    }

  }

</script>

<style scoped>

  /*
  font-family: 'Rubik', sans-serif;
  font-family: 'Roboto', sans-serif;
  */

  select { appearance: none; }

  .a-p-wrap {

    padding: 0px 40px;
  }

  .a-p-title {

    font-family: 'Roboto', sans-serif;
    font-size: 18px;

    padding: 40px 0px;
  }

  .a-p-form {

    display: grid;
    grid-template-areas:
      'name name'
      'directory priority'
      'description description';
  }

  .a-p-input-wrap {

    width: 100%;

    position: relative;

    padding: 20px 0px;

    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: 40px;
  }

  .a-p-textarea-wrap {

    width: 100%;

    position: relative;

    padding: 20px 0px;

    display: grid;
    grid-template-columns: fit-content;
    grid-template-rows: 40px 120px;
  }

  .a-p-textarea {

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    resize: none;

    border: none;
    border-bottom: 1px solid #E0E0E0;

    padding: 12px;
  }

  .a-p-input {

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: dimgray;

    padding: 12px;

    background-color: white;

    border: none;
    border-bottom: 1px solid #E0E0E0;
  }

  .a-p-input-desc {

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: dimgray;
    white-space: nowrap;

    padding: 12px;

    background-color: #E0E0E0;
    border-radius: 5px 0px 0px 5px;
    border-right: 1px solid white;
  }

  .a-p-option {

    padding: 12px;

    border: none;

    background-color: whitesmoke;
  }

  .a-p-option:nth-child(1) {

    display: none;
  }

  .p-name {

    grid-area: name;
  }

  .p-directory {

    grid-area: directory;
  }

  .p-priority {

    grid-area: priority;
  }

  .p-description {

    grid-area: description;
  }

</style>
