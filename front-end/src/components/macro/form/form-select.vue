<template>
    
    <div class="form-select form-input" @click="pop = !pop">

        <p class="name" :class="{ value : value }" >{{ value ? value : name }}</p>

        <i class="material-icons">more_vert</i>

        <div v-if="pop" class="pop-up">

            <div class="pop-up-list">

                <p class="option" @click="$emit('setValue', option)" :key="index" v-for="(option, index) in options" >{{ option }}</p>

            </div>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'form-select',

        props: {

            name: String,
            value: String,
            options: Array

        },

        data() {
            return {

                pop: false

            }
        }

    }

</script>

<style scoped>

    .form-select {

        color: rgba(0,0,0,0.5);
        user-select: none;
        text-align: center;

        position: relative;

        padding: 0;
        padding-left: 20px;

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        cursor: pointer;
    }

    .form-select .material-icons {

        font-size: 18px;
    }

    .name {

        justify-self: flex-start;
    }

    .value {

        color: var(--dark);
    }

    .pop-up {

        width: 340px;
        height: auto;
        max-height: 200px;

        position: absolute;
        bottom: 50px;
        right: 0px;

        padding: 20px 0px;
        box-sizing: content-box;

        background-color: white;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 10px;

        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);

        overflow: hidden;
    }

    .pop-up-list {

        width: 357px;
        height: auto;
        max-height: 192px;

        position: relative;

        padding: 0px 20px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 40px;
        grid-gap: 10px;
        align-items: center;

        overflow: hidden;
        overflow-y: scroll;

    }

    .option {

        font-size: 12px;
        font-weight: 500;

        padding: 14px;
        margin-top: 1px;

        transition: 0.2s ease;

        background-color: var(--white);
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 3px;
    }

    .option:hover {

        background-color: rgba(0,0,0,0.1);
    }

</style>


