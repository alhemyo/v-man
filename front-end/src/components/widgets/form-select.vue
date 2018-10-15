<template>
    
    <div v-click-outside="close" class="form-select">

        <div class="form-input" @click="pop  = !pop">

            <p>{{ single ? value ? value : name : value ? value.length + ' ' + name : name }}</p>

            <i class="fas fa-ellipsis-h" />

        </div>

        <transition name="popup">

            <div v-show="pop" class="pop">

                <div class="pop-header">

                    <i class="fas fa-ellipsis-h" />

                    <p>Select {{ name }}</p>

                    <p></p>

                </div>

                <div @click="closeSelect" class="pop-body">

                    <div class="pop-list">

                        <p 

                            v-if="!isObject"
                            v-for="(option, index) in options"
                            class="option" 
                            :key="index"
                            @click="$emit( 'option', option )"  >
                            
                            {{ option }}
                        
                        </p>

                        <user-badge 
                        
                            v-if="isObject"
                            v-for="option in options"
                            :key="option.id"
                            :id="option.id"
                            :name="option.name + ' ' + option.surname"
                            :gender="option.gender"
                            @selectUser="!selectedList.includes($event) ? selectedList.push($event) : selectedList = selectedList.filter(item => item != $event)"
                        
                        />

                    </div>

                </div>

                <div v-if="!single" class="pop-footer">

                    <div class="form-button" :class="{ valid : checkList }" @click="formList" >

                        <i class="fas" :class="{ 'fa-times not-valid-icon' : !checkList, 'fa-check valid-icon' : checkList }" />

                    </div>

                </div>

            </div>

        </transition>

    </div>

</template>

<script>

    import { isObject } from 'lodash' // eslint-disable-line
    import ClickOutside from 'vue-click-outside'

    export default {

        name: 'form-select',

        props: {

            name: String,
            options: Array,
            single: Boolean,
            value: ''

        },

        components: {

            userBadge: () => import('./user-badge')

        },

        data() {
            return {
                pop: false,
                selectedList: []
            }
        },

        computed: {
          
            isObject() { return _.isObject(this.options[0]) }, // Check if options are objects or strings
            checkList() { return this.selectedList.length > 0 ? true : false }

        },

        methods: {

            close() { 
                this.pop = false
            },

            closeSelect() { this.single ? this.pop = false : false },

            formList() {
                this.pop = false
                this.single ? false : this.$emit( 'formList', this.selectedList )
            }

        },

        directives: {
            ClickOutside
        }

    }

</script>

<style scoped>

    .popup-enter-active {

        transition: 0.1s ease;
    }

    .popup-leave-active {

        transition: 0.1s ease-in;
    }

    .popup-enter {

        opacity: 0;
    }

    .popup-leave-to {

        opacity: 0;
    }

    .form-select {

        width: 100%;
        height: 40px;

        position: relative;

        cursor: pointer;
    }

    .form-select p {

        font-family: var(--main);
        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);
        user-select: none;

        padding: 0px 10px;
    }

    .pop {

        width: 350px;
        height: 100vh;

        position: fixed;
        top: 0px;
        right: 0px;
        z-index: 10;

        padding: 0px 20px;

        display: grid;
        grid-template-rows: 60px auto 60px;

        background-color: white;
    }

    .pop-header {

        display: grid;
        grid-template-columns: 20px 140px 130px;
        grid-column-gap: 10px;
        align-items: center;
    }

    .pop-body {

        width: 100%;
        height: calc( 100vh - 120px );

        padding: 20px 0px;

        display: grid;
        align-items: center;

        overflow: hidden;
    }

    .pop-list {

        width: calc( 100% + 17px );
        height: auto;
        max-height: calc( 100vh - 160px );

        display: grid;
        grid-template-columns: 150px 150px;
        grid-auto-rows: 40px;
        grid-gap: 10px;
        
        overflow-y: scroll;
    }

    .option {

        text-align: center;

        display: grid;
        grid-template-rows: 40px;
        align-items: center;

        background-color: rgba(0,0,0,0.03);
        border-radius: 3px;
    }

    .option:hover {

        background-color: rgba(0,0,0,0.05);
    }

    .pop-footer {

        position: relative;
    }

    .form-select-button {

      width: 40px;
      height: 40px;

      position: absolute;
      right: 290px;
      top: 10px;

      transition: 0.3s ease;

      display: grid;
      align-items: center;

      border-radius: 60px;

      cursor: pointer;
    }

    .form-select-button i {

        font-size: 20px;
    }


</style>
