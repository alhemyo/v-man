<template>
    
    <div v-show="condition" class="loader">

        <div :class="{ light : (shade === 'light') }" class="ball"></div>

        <div :class="{ light : (shade === 'light') }" class="ball"></div>

        <div :class="{ light : (shade === 'light') }" class="ball"></div>

    </div>

</template>

<script>

    export default {
    
        name: 'loader',

        props: {

            condition: '',
            shade: String
        }

    }

</script>

<style scoped>

    @keyframes bounce {

        0% {

            transform: translateY(0px);
        }

        50% {

            transform: translateY(10px);
        }

        100% {

            transform: translateY(0px);
        }
        
    }

    .loader {

        width: 40px;
        height: 40px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );

        display: grid;
        grid-template-columns: 6px 6px 6px;
        grid-template-rows: 6px;
        justify-content: space-around;
        align-content: center;
    }

    .ball {

        background-color: var(--dark);

        border-radius: 100%;

        animation: bounce 1s ease infinite;
    }

    .ball:nth-child(2) {

        animation-delay: 0.5s;
    }

    .light {

        background-color: var(--white);
    }

</style>


