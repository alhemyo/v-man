<template>
    
    <form class="settings-form">

        <!-------------------- FIRST COLUMN -------------------->

        <p class="form-subtitle">Personal info</p>

        <input class="form-input" type="text" placeholder="Name" />

        <input class="form-input" type="text" placeholder="Surname" />

        <form-select :name="'Gender'" />

        <!-------------------- SECOND COLUMN -------------------->

        <input class="form-input" type="text" placeholder="Birthday" />

        <input class="form-input" type="text" placeholder="City" />

        <input class="form-input" type="text" placeholder="Phone" />

        <form-select :name="'Education'" />

        <!-------------------- THIRD COLUMN -------------------->

        <input class="form-input form-half-1" type="text" placeholder="Address" />

        <input class="form-input form-half-2" type="text" placeholder="E-mail" />

        <!-------------------- FOURTH COLUMN -------------------->

        <input class="form-input" type="text" placeholder="ID number" />

        <input class="form-input" type="text" placeholder="ID expire date" />

        <input class="form-input form-half-2" type="text" placeholder="UMCN" />

        <!-------------------- FIFTH COLUMN -------------------->

        <input class="form-input form-half-1" type="text" placeholder="Bank name" />

        <input class="form-input form-half-2" type="text" placeholder="Account number" />

        <hr />

        <!-------------------- SIXTH COLUMN -------------------->

        <p class="form-subtitle form-1">Work info</p>

        <form-select class="form-4" :name="'Admin'" />

        <!-------------------- SEVENTH COLUMN -------------------->

        <input class="form-input form-1" type="text" placeholder="Employment date" />

        <input class="form-input form-2" type="text" placeholder="Payment" />

        <form-select class="form-3" :name="'Position'" />

        <form-select class="form-4" :name="'AdminType'" />

        <hr />

        <!-------------------- EIGHTH COLUMN -------------------->

        <p class="form-message form-third-1">Message</p>

        <p class="form-button form-4">Add user</p>
        
    </form> <!-- end .settings-form -->

</template>

<script>

    import formSelect from '../../../macro/form-select'

    export default {
    
        name: 'add-user',

        components: {

            formSelect
        }

    }

</script>

<style scoped>

    hr {

        grid-column: 1/5;

        opacity: 0.3;
    }

    .settings-form {

        width: 660px;
        height: auto;

        position: relative;
        margin: auto;

        display: grid;
        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: 60px;
        grid-gap: 20px;
        align-items: center;
    }

    .form-1 {

        grid-column: 1/2;
    }

    .form-2 {

        grid-column: 2/3;
    }

    .form-3 {

        grid-column: 3/4;
    }

    .form-4 {

        grid-column: 4/5;
    }

    .form-half-1 {

        grid-column: 1/3;
    }

    .form-half-2 {

        grid-column: 3/5;
    }

    .form-third-1 {

        grid-column: 1/4;
    }

    .form-subtitle, .form-message {

        font-size: 12px;
        color: var(--dark);

        padding: 0px 20px;
    }

    .form-input {

        font-size: 12px;

        width: 100%;
        min-width: 150px;
        height: 40px;

        padding: 12px 20px;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;
    }

    .form-input::placeholder {

        color: rgba(0,0,0,0.6);
    }

    .form-button {

        font-size: 12px;
        text-align: center;
        color: var(--white);

        width: 150px;
        height: 40px;

        padding: 12px 20px;

        background-color: var(--dark);
        border-radius: 30px;

        cursor: pointer;
    }

    .form-button:hover {

        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    }

</style>


