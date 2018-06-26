<template>

    <form class="add-user">

        <p class="form-sub-title">Personal info</p>

        <div class="form-select form-4">

            <ul class="form-select-drawer">

                <p class="form-select-placeholder">Select Gender ▼</p>

                <li class="form-select-value">Female</li>

                <li class="form-select-value">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <input class="form-input form-1" type="text" placeholder="Name" />
        <input class="form-input form-2" type="text" placeholder="Surname" />
        <input class="form-input form-3" type="text" placeholder="City" />
        <input class="form-input form-4" type="text" placeholder="Phone" />

        <input class="form-input form-half-1" type="text" placeholder="Address" />
        <input class="form-input form-half-2" type="text" placeholder="E-mail" />

        <input class="form-input form-1" type="text" placeholder="ID number" />
        <input class="form-input form-2" type="text" placeholder="ID expire date" />
        <input class="form-input form-half-2" type="text" placeholder="UMCN" />

        <input class="form-input form-half-1" type="text" placeholder="bank name" />
        <input class="form-input form-half-2" type="text" placeholder="account number" />

        <hr />

        <p class="form-sub-title">Work info</p>

        <div class="form-select form-4">

            <ul class="form-select-drawer">

                <p class="form-select-placeholder">Admin ▼</p>

                <li class="form-select-value">Female</li>

                <li class="form-select-value">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <input class="form-input form-1" type="text" placeholder="Employment date" />
        <input class="form-input form-2" type="text" placeholder="Payment" />

        <div class="form-select form-3">

            <ul class="form-select-drawer">

                <p class="form-select-placeholder">Select position ▼</p>

                <li class="form-select-value">Female</li>

                <li class="form-select-value">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <div class="form-select form-4">

            <ul class="form-select-drawer">

                <p class="form-select-placeholder">Select admin type ▼</p>

                <li class="form-select-value">Female</li>

                <li class="form-select-value">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <hr />

        <p class="form-message form-full-1">Displayed message about errors or success</p>
        <div class="form-button">Add User</div>



    </form>
    
</template>

<script>

    export default {

        name: 'add-user'
        
    }

</script>

<style scoped>

    hr {

        grid-column: 1/5;
    }

    .add-user {

        font-size: 12px;

        width: 100%;
        max-width: 800px;
        height: auto;

        position: relative;
        margin: auto;
        margin-top: 40px;

        padding: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(60px);
        grid-gap: 20px;
        align-items: center;
    }

    .form-sub-title, .form-message {

        font-size: 12px;
        color: rgba(0,0,0,0.5);

        padding: 20px;
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

    .form-full-1 {

        grid-column: 1/4;
    }

    /* ------------- FORM SELECT CSS ------------- */

    .form-select {

        text-align: center;

        width: 100%;
        height: 40px;

        position: relative;

        cursor: pointer;
    }

    .form-select-drawer {

        width: 100%;
        height: auto;
        max-height: 40px;

        position: absolute;

        padding: 13px;

        background-color: var(--gray);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;

        overflow: hidden;
    }

    .form-select-placeholder {

        color: var(--dark);

        padding-bottom: 10px;
    }

    .form-select-value {

        padding: 10px;
    }

    /* ------------ FORM INPUT CSS -------------- */

    .form-input {

        font-size: 12px;
        color: var(--dark);

        width: 100%;
        height: auto;
        max-height: 40px;

        padding: 13px 20px;

        background-color: var(--gray);
        border: none;
        border-radius: 30px;
    }

    .form-input::placeholder {

        color: rgba(0,0,0,0.5);
    }

    /* ------------ FORM BUTTON CSS -------------- */

    .form-button {

        color: white;
        text-align: center;

        width: 100%;
        height: 40px;

        padding: 13px;

        background-color: var(--dark);

        border-radius: 30px;

        cursor: pointer;
    }

</style>