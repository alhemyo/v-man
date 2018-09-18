<template>
    
    <div class="checkbox form-input" @click="switchHandle" >

        <p class="name">{{ name }}</p>

        <div class="switch">

            <div class="switch-path"></div>

            <div class="switch-button" :class="{ 'switch-on' : handle }" ></div>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'form-checkbox',

        props: {

            name: String,
            value: Boolean
        },

        data() {
            return {

                handle: false

            }
        },

        methods: {

            switchHandle() {

                this.handle = !this.handle

                this.$emit( 'checked', this.handle )

            }
        }

    }

</script>

<style scoped>

    .checkbox {

        width: 100%;
        height: 40px;

        padding: 0px;
        padding-right: 10px;

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        transition: 0.3s ease;

        background-color: white;
        border-radius: 30px;

        cursor: pointer;
    }

    .name {

        padding-left: 20px;
    }

    .switch {

        width: 40px;
        height: 40px;

        position: relative;
    }

    .switch-path {

        width: 20px;
        height: 6px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );

        background-color: gray;
        border-radius: 10px;
    }

    .switch-button {

        width: 20px;
        height: 20px;

        position: absolute;
        top: 50%;
        left: 0;

        transition: 0.3s ease;

        transform: translateY( -50% );

        background-color: var(--red);
        border-radius: 20px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }

    .switch-on {

        left: 20px;

        background-color: var(--green);
    }

</style>


