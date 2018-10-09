<template>
    
    <div class="user">

        <div class="header">

            <i class="fas fa-user-plus" />

            <p>Create New User</p>

        </div>

        <form class="user-form">

            <div class="form-input">

                <input type="text" placeholder="Name" />

                <i class="fas fa-pen" />

            </div>

            <div class="form-input">

                <input type="text" placeholder="Surname" />

                <i class="fas fa-pen" />

            </div>

            <div class="form-input">

                <input type="text" placeholder="Gender" />

                <i class="fas fa-pen" />

            </div>

            <div class="form-input">

                <input type="text" placeholder="Birthday" />

                <i class="fas fa-pen" />

            </div>

        </form>

        <div class="footer"></div>

    </div>

</template>

<script>

    export default {

        name: 'user'

    }

</script>

<style scoped>

    .user {

        width: 350px;
        height: 100vh;

        position: absolute;
        top: 0px;
        right: -350px;
        z-index: 5;

        display: grid;
        grid-template-rows: 60px auto 60px;

        transition: 0.3s ease;

        background-color: white;
        box-shadow: 0px 0px 10px var(--midgray);
    }

    .header {

        font-size: 14px;
        font-weight: 500;
        color: var(--darkgray);
        user-select: none;

        width: 100%;
        height: 60px;

        padding: 20px;

        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
    }

    .user-form {

        padding: 20px;

        align-self: center;

        display: grid;
        grid-template-columns: 150px 150px;
        grid-auto-rows: 40px;
        grid-gap: 10px; 
    }

    .form-input {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        background-color: var(--lightgray);
        border-radius: 3px;
    }

    .form-input input {

        font-family: var(--main);
        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);

        width: 100%;
        height: 40px;

        padding: 0px 10px;

        background-color: transparent;
        border: none;
    }

    .form-input i {

        font-size: 12px;
        color: var(--darkgray);
    }

</style>
