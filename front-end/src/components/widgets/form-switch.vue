<template>
    
    <div class="switch" >

        <p class="switch-name" >{{ name }}</p>

        <div class="craddle" @click="handleSwitch" >

            <div class="switch-button" :class="{ on : value }" ></div>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'form-switch',

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

            handleSwitch(event) {

                this.handle = !this.handle

                this.$emit( 'switch', this.handle )
            }

        }

    }

</script>

<style scoped >

    .switch {

        width: 100%;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: auto 60px;
        grid-template-rows: 40px;
        align-items: center;
    }

    .switch-name {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);

        padding-left: 10px;
    }

    .craddle {

        width: 40px;
        height: 20px;

        position: relative;

        justify-self: center;

        background-color: var(--midgray);
        border-radius: 30px;

        cursor: pointer;

        overflow: hidden;
    }

    .switch-button {

        width: 20px;
        height: 20px;

        position: absolute;
        left: 0px;

        transition: 0.2s ease;

        background-color: var(--red);
        border-radius: 30px;
    }

    .on {

        left: 20px;

        background-color: var(--green);
    }

</style>
