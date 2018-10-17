<template>
    
    <div class="login">

        <form class="login-form">

            <input class="login-input" type="text" placeholder="username" />

            <input class="login-input" type="password" placeholder="password" />

        </form>

    </div>

</template>

<script>

    export default {

        name: 'login'

    }

</script>

<style>

    .login-form {

        width: 100%;
        height: auto;
        max-width: 400px;

        position: absolute;
        top: 50%;
        left: 50%;

        display: grid;
        grid-template-rows: 40px 40px;

        transform: translate( -50%, -50% );
    }

    .login-input {

        font-family: var(--main);
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        color: var(--defaultText);

        width: 100%;
        height: 40px;
        
        background-color: transparent;
        border: none;
    }

    .login-input::placeholder {

        color: var(--defaultText);

        opacity: 0.3;
    }

</style>
