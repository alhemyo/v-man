<template>
    
    <div v-click-outside="close" class="form-date" >

        <div class="form-input" @click="pop  = !pop" >

            <p>{{ value ? formatValue : name }}</p>

            <i class="fas fa-calendar" />

        </div>

        <transition name="popup">

            <div v-show="pop" class="pop" >

                <div class="pop-header">

                    <i class="fas fa-calendar" />

                    <p>Select {{ name }}</p>

                    <p></p>

                </div>

                <div class="pop-body">

                    <calendar @date="setDate" />

                </div>

                <div class="pop-footer"></div>

            </div>

        </transition>

    </div>

</template>

<script>

    import moment from 'moment'
    import ClickOutside from 'vue-click-outside'

    export default {

        name: 'form-date',

        props: {
            name: String,
            value: ''
        },

        data() {
            return {
                pop: false
            }
        },

        components: {
            calendar: () => import('./calendar')
        },

        computed: {

            formatValue() { return moment(this.value).format('DD MMM YYYY') }

        },

        methods: {

            close() { this.pop = false },

            setDate(event) {

                this.$emit( 'setDate', event )

                this.pop = false

            }

        },

        directives: {
            ClickOutside
        }

    }

</script>

<style>

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

    .form-date {

        cursor: pointer;
    }

    .form-date p {

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

</style>
