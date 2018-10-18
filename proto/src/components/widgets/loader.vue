<template>
    
    <div v-show="condition" class="loader">

        <div class="circle" :key="index" v-for="(circle, index) in 3" ></div>

        <p class="loader-message" >{{ message }}</p>

    </div>

</template>

<script>

    export default {

        name: 'loader',

        props: {
            condition: Boolean,
            message: String
        }

    }

</script>

<style>

    .loader {

        width: 60px;
        height: 40px;

        position: absolute;
        top: 50%;
        left: 50%;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;

        transform: translate( -50%, -50% );
    }

    @keyframes pulse {

        0% {
            width: 4px;
            height: 4px;

            background-color: var(--icon);
            box-shadow: 0px 0px 0px var(--blue);
            opacity: 0.5;
        }

        20% {
            width: 4px;
            height: 10px;

            background-color: var(--icon);
            box-shadow: 0px 0px 0px var(--blue);
            opacity: 1;
        }

        50% {
            width: 4px;
            height: 15px;

            background-color: var(--blue);
            box-shadow: 0px 0px 30px var(--blue);
            opacity: 1;
        }

        80% {
            width: 4px;
            height: 10px;

            background-color: var(--icon);
            box-shadow: 0px 0px 0px var(--blue);
            opacity: 1;
        }

        100% {
            width: 4px;
            height: 4px;

            background-color: var(--icon);
            box-shadow: 0px 0px 0px var(--blue);
            opacity: 0.5;
        }
        
    }

    .circle {

        width: 4px;
        height: 8px;

        animation: pulse 0.6s ease infinite;

        background-color: var(--icon);
        border-radius: 20px;

        opacity: 0.3;
    }

    .circle:nth-child(2) {

        animation-delay: 0.2s;
    }

    .circle:nth-child(3) {

        animation-delay: 0.4s;
    }

    .loader-message {

        font-family: var(--main);
        font-size: 12px;
        font-weight: 500;
        color: var(--defaultText);
        white-space: nowrap;

        position: absolute;
        top: 40px;
        left: 50%;

        transform: translateX( -50% );
    }

</style>
