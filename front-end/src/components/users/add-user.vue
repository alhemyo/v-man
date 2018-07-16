<template>
    
    <form class="form add-user">
        
        <!---------------------- FIRST ROW ---------------------->

        <p class="form-sub-title form-1">Personal info</p>

        <input class="form-input form-2" type="text" name="name" placeholder="Name" />

        <input class="form-input form-3" type="text" name="surname" placeholder="Surname" />

        <form-select :name="'Gender'" />

        <!---------------------- SECOND ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">Birthday</p>
            
            <input type="text" name="day" placeholder="D" />

            <input type="text" name="month" placeholder="M" />

            <input type="text" name="year" placeholder="Y" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="city" placeholder="City" />

        <input class="form-input form-3" type="text" name="phone" placeholder="Phone" />

        <form-select :name="'Education'" />

        <!---------------------- THIRD ROW ---------------------->

        <input class="form-input form-half-1" type="text" name="address" placeholder="Address" />

        <input class="form-input form-half-2" type="text" name="email" placeholder="E - mail" />

        <!---------------------- FORTH ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">ID expire date</p>
            
            <input type="text" name="day" placeholder="D" />

            <input type="text" name="month" placeholder="M" />

            <input type="text" name="year" placeholder="Y" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="idNumber" placeholder="ID number" />

        <input class="form-input form-half-2" type="text" name="umcn" placeholder="UMCN" />

        <!---------------------- FIFTH ROW ---------------------->

        <input class="form-input form-half-1" type="text" name="bank" placeholder="Bank" />

        <input class="form-input form-half-2" type="text" name="accNumber" placeholder="Account number" />

        <!---------------------- SIXTH ROW ---------------------->

        <p class="form-sub-title form-1">Work info</p>

        <form-radio class="form-4" :name="'Admin'" />

        <!---------------------- SEVENTH ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">Employment date</p>
            
            <input type="text" name="day" placeholder="D" />

            <input type="text" name="month" placeholder="M" />

            <input type="text" name="year" placeholder="Y" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="payment" placeholder="Payment" />

        <form-select :name="'Position'" />

        <form-select :name="'Admin type'" />

        <!---------------------- EIGHT ROW ---------------------->

        <p class="form-sub-title form-third-1">Message for succes or error</p>

        <p class="form-button form-4">Add User</p>

    </form>

</template>

<script>

    import formSelect from '../macro/form/form-select'
    import formRadio from '../macro/form/form-radio'

    export default {
    
        name: 'add-user',

        components: {

            formSelect,
            formRadio
        }

    }

</script>


<style scoped>

    /* -------------------- Form CSS -------------------- */

    .form {

        width: 100%;
        max-width: 700px;
        height: auto;

        position: relative;
        margin: auto;
        margin-top: 40px;

        padding: 40px 20px;

        display: grid;
        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: auto;
        grid-column-gap: 20px;
        grid-row-gap: 40px;
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

    .form-sub-title {

        font-size: 12px;
        color: var(--dark);

        align-self: center;
    }

    /* -------------------- form-input CSS -------------------- */

    .form-input {

        font-size: 12px;
        color: var(--dark);

        width: 100%;
        height: 40px;

        padding: 0px 20px;

        border: none;
        border: 1px solid var(--darkGray);
        border-radius: 30px;
    }

    .form-input::placeholder {

        color: var(--darkGray);
    }

    .form-input::-moz-placeholder {

        color: var(--darkGray);
    }

    /* -------------------- form-date CSS -------------------- */

    .form-date {

        width: 150px;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 1fr 1fr 1.5fr;

        border: 1px solid var(--darkGray);
        border-radius: 5px;
    }

    .form-date > input {

        font-size: 12px;
        text-align: center;
        color: var(--dark);

        width: 100%;

        padding: 0px 12px;

        background-color: transparent;
        border: none;
    }

    .form-date > input:nth-child(3) {

        border-left: 1px solid var(--darkGray);
        border-right: 1px solid var(--darkGray);
    }

    .form-date-name {

        font-size: 12px;
        color: var(--darkGray);

        position: absolute;
        top: -20px;
        left: 20px;
    }

    /* -------------------- form-button CSS -------------------- */

    .form-button {

        font-size: 12px;
        text-align: center;
        color: var(--white);

        width: 150px;
        height: 40px;

        padding: 12px 0px;

        background-color: var(--dark);
        border-radius: 30px;
    }

</style>

