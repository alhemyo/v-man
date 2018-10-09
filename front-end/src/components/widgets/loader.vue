<template>

    <div v-if="condition" class="loader">

        <div class="tiles">

            <div class="tile" :key="index" v-for="(tile, index) in 5"></div>

        </div>

        <p class="loader-message">{{ message }}</p>

    </div>
    
</template>

<script>

    export default {

        name: 'loader',

        props: { condition: Boolean, message: String }

    }

</script>

<style scoped>

    .loader {

        width: 50px;
        height: 50px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );
    }

    .tiles {

        width: 100%;
        height: 100%;

        position: relative;
    }

    @keyframes pulse {

        0% {

            height: 30%;

            background-color: var(--darkgray);

            opacity: 0.3;
        }

        25% {

            height: 60%;

            background-color: var(--red);

            opacity: 1;
        }

        50% {

            height: 30%;

            background-color: var(--darkgray);

            opacity: 0.3;
        }

        100% {

            height: 30%;

            opacity: 0.3;
        }
        
    }

    .tile {

        width: 10%;
        height: 30%;

        position: absolute;
        top: 50%;

        left: 5%;

        transform: translateY( -50% );

        animation: pulse 1s ease-out infinite;

        background-color: var(--darkgray);

        opacity: 0;
    }

    .tile:nth-child(2) {

        left: 25%;

        animation-delay: 0.2s;
    }

    .tile:nth-child(3) {

        left: 45%;

        animation-delay: 0.4s;
    }

    .tile:nth-child(4) {

        left: 65%;

        animation-delay: 0.6s;
    }

    .tile:nth-child(5) {

        left: 85%;

        animation-delay: 0.8s;
    }

    .loader-message {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);
        text-align: center;
        white-space: nowrap;

        position: absolute;
        top: 50px;
        left: 50%;

        transform: translateX( -50% );
    }



</style>
