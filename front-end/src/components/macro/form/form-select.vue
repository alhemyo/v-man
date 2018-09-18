<template>
    
    <div class="form-select form-input" @click="pop = !pop">

        <p v-if="!userSelect" class="name" :class="{ value : value }" >{{ value ? value : name }}</p>

        <p v-if="userSelect" class="name" :class="{ value : value }" :title="value.name + ' ' + value.surname" >{{ value ? value.name + ' ' + value.surname : name }}</p>

        <i class="material-icons">more_vert</i>

        <div v-if="pop" class="pop-up">

            <div class="pop-up-list">

                <!-- SINGLE VALUE IN ARRAY -->

                <p v-if="!userSelect" class="option" @click="$emit( 'setValue', option )" :key="index" v-for="(option, index) in options" >{{ option }}</p>

                <!-- OBJECT IN ARRAY -->

                <div v-if="userSelect" class="option-badge" @click="$emit( 'setValue', option )" :key="index" v-for="( option, index ) in options" >

                    <img :src="(option.gender === 'male') ? '/images/JohnDoe.png' : '/images/JaneDoe.png'" />

                    <p>{{ option.name + ' ' + option.surname }}</p>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

    import {isObject} from 'lodash'

    export default {
    
        name: 'form-select',

        props: {

            name: String,
            value: '',
            options: Array

        },

        data() {
            return {

                pop: false

            }
        },

        computed: {

            userSelect() { return _.isObject(this.options[0]) }
        }

    }

</script>

<style scoped>

    .form-select {

        width: 100%;

        color: rgba(0,0,0,0.5);
        user-select: none;
        text-align: center;

        position: relative;

        padding: 0;
        padding-left: 20px;

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        transition: 0.3s ease;

        cursor: pointer;
    }

    .form-select .material-icons {

        font-size: 18px;
    }

    .name {

        text-align: left;

        white-space: nowrap;
        text-overflow: ellipsis;

        overflow: hidden;
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
        font-weight: 600;

        padding: 14px;
        margin-top: 1px;

        transition: 0.2s ease;

        border-radius: 3px;
    }

    .option:hover {

        background-color: rgba(0,0,0,0.05);
    }

    .option-badge {

        font-size: 12px;
        font-weight: 600;

        position: relative;
        margin-top: 1px;

        display: grid;
        grid-template-columns: 40px auto;
        grid-template-rows: 40px;
        align-items: center;

        transition: 0.2s ease;

        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 3px;

        overflow: hidden;
    }

    .option-badge img {

        padding: 6px;
    }

    .option-badge p {

        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;

        padding: 0px 10px;

        overflow: hidden;
    }

</style>


