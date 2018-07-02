<template>

    <transition name="pop">

        <div @click="hidePop" v-if="popShow" class="pop-wrap">

            <div class="pop">

                <h1 class="pop-title">{{popValue}}</h1>

                <ul>

                    <li @click="setValue" :key="value" v-for="value in popData" >{{ value }}</li>

                </ul>

            </div>

        </div>

    </transition>
    
</template>

<script>

    export default {
        
        name: 'pop',

        computed: {
            popData: { get() { return this.$store.state.popData } },
            popValue: { get() { return this.$store.state.popValue } },
            popShow() {

                if ( $.isEmptyObject(this.popData) ) 

                { 
                    return false 
                }

                else 

                { 
                    return true 
                }
            }
        },

        methods: {
            hidePop() {
                this.$store.commit( 'updatePopData', "" )
            },
            setValue(event) {
                let value = $( event.currentTarget ).html()
                this.$store.commit('updateUser' + this.$store.state.popValue, value  )
            }
        }

    } // export default

</script>

<style scoped>

    .pop-enter-active, .pop-leave-active {

        transition: all 0.1s ease;
    }

    .pop-enter, .pop-leave-to {
        
        opacity: 0;
    }

    .pop-wrap {

        width: 100%;
        height: 100%;

        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 100;

        display: grid;
        align-items: center;
        justify-content: center;

        transform: translate( -50%,-50% );

        background-color: rgba(0,0,0,0.5);
    }

    .pop {

        width: 600px;

        padding: 30px;

        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);
    }

    .pop-title {

        text-align: center;

        padding: 20px;
        padding-top: 0px;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .pop ul {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 40px;
        grid-gap: 10px;
        align-items: center;

        padding-top: 10px;
    }

    .pop li {

        font-size: 12px;
        color: var(--dark);
        text-align: center;

        padding: 10px;

        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;

        cursor: pointer;
    }

    .pop li:hover {

        background-color: rgba(0,0,0,0.05);
    }

    .pop li:first-child {

        display: none;
    }

</style>


