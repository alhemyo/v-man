<template>
    
    <div class="form-select form-input">

        <div class="form-select-button" @click="pop = !pop">

            <p v-if="!userSelect" class="name" :class="{ value : value }" >{{ value ? value : name }}</p>

            <p v-if="userSelect" class="name" :class="{ value : value }" >{{ value ? value.length + ' ' + name + (value.length > 1 ? 's' : '') : name }}</p>

            <i class="material-icons">more_vert</i>

        </div>

        <div v-if="pop" class="pop-up" @click="closePop">

            <div class="pop-up-list">

                <!-- SINGLE VALUE IN ARRAY -->

                <select-option

                v-if="!userSelect" 
                :key="index" 
                v-for="( option, index ) in options" 
                :userSelect="userSelect"
                :multy="multy"
                :name="option"
                @selectOption="$emit( 'setValue', option )"
                :checkSelected="false"
                @select="$event ? selectedList.push(option) : selectedList = selectedList.filter( item => item.umcn != option.umcn )"
                
                />

                <!-- OBJECT IN ARRAY -->
                
                <select-option 

                v-if="userSelect" 
                :key="index" 
                v-for="( option, index ) in options" 
                :userSelect="userSelect"
                :multy="multy"
                :name="option.name" 
                :surname="option.surname"
                :umcn="option.umcn"
                :checkSelected="Boolean(selectedList.find( (item) => { return item.umcn === option.umcn } ))"
                @select="$event ? selectedList.push(option) : selectedList = selectedList.filter( item => item.umcn != option.umcn )"
                
                />

            </div>

        </div>

        <div v-if="multy && pop" class="pop-footer" :class="{ empty : !listLength }" @click="addList" ><i class="material-icons">{{ listLength ? 'done' : 'close' }}</i></div>

    </div>

</template>

<script>

    import {isObject} from 'lodash'

    import selectOption from './option'

    export default {
    
        name: 'form-select',

        components: {

            selectOption
        },

        props: {

            name: String,
            value: '',
            options: Array,
            multy: false

        },

        data() {
            return {

                pop: false,

                selectedList: []

            }
        },

        computed: {

            userSelect() { return _.isObject(this.options[0]) },
            listLength() { return this.selectedList.length > 0 ? true : false }

        },

        methods: {

            closePop() {

                if ( !this.multy ) {

                    this.pop = false

                }

            },

            addList() {

                this.pop = false

                this.$emit( 'setValue', this.selectedList )

            }
        }

    }

</script>

<style scoped>

    .form-select {

        width: 100%;
        height: 40px;

        color: rgba(0,0,0,0.5);
        user-select: none;
        text-align: center;

        position: relative;

        padding: 0;
        padding-left: 20px;

        transition: 0.3s ease;

        cursor: pointer;
    }

    .form-select .material-icons {

        font-size: 18px;
    }

    .form-select-button {

        height: 40px;

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;
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

    .pop-footer {

        color: white;

        width: 40px;
        height: 40px;

        position: absolute;
        bottom: 30px;
        right: -20px;

        display: grid;
        align-items: center;

        transition: 0.3s ease;

        background-color: var(--green);
        border-radius: 40px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    }

    .empty {

        color: white;

        bottom: 260px;

        background-color: var(--red);
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


