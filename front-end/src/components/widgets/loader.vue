<template>

    <div class="loader">

        <div class="dot" :key="index" v-for="(dot, index) in 6"></div>

    </div>
    
</template>

<script>

    export default {

        name: 'loader',

        props: { condition: Boolean }

    }

</script>

<style scoped>

    .loader {

        width: 40px;
        height: 40px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% ) scale(0.8);
    }

    @keyframes loader {

        0% {

            background-color: var(--midgray);
            transform: rotate(0deg);
            opacity: 0.3;
        }

        50% {

            background-color: var(--black);
            opacity: 1;
        }

        100% {

            background-color: var(--midgray);
            transform: rotate(360deg);
            opacity: 0.3;
        }
        
    }

    .dot {

        width: 10px;
        height: 10px;

        position: absolute;

        border-radius: 20px;

        background-color: var(--lightgray);

        transform-origin: 20px 20px;

        transform: rotate(0deg);

        animation: loader 3s linear infinite;

        opacity: 0;
    }

    .dot:nth-child(2) {

        animation-delay: 0.5s;
    }

    .dot:nth-child(3) {

        animation-delay: 1s;
    }

    .dot:nth-child(4) {

        animation-delay: 1.5s;
    }

    .dot:nth-child(5) {

        animation-delay: 2s;
    }

    .dot:nth-child(6) {

        animation-delay: 2.5s;
    }

</style>
