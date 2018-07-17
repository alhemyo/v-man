<template>

    <div class="pop-wrap" @click="closePop" :class="{ 'pop-wrap-in' : popData }" >

        <div class="pop" :class="{ 'pop-in' : popData }" >

            <p class="pop-name">{{ popName }}</p>

            <div class="pop-footer">

                <div class="pop-button">

                    <img src="/images/assets/icons/done.png" />

                </div>
                
            </div> <!-- end .pop-footer -->
            
        </div> <!-- end .pop -->    
    
    </div> <!-- end .pop -->

</template>

<script>

    export default {
    
        name: 'pop',

        computed: {

            popName: { get() { return this.$store.state.popName } },
            popData: { get() { return this.$store.state.popData } }
        },

        methods: {

            closePop(event) {

                if ( $(event.target).hasClass('pop-wrap') ) {

                    this.$store.commit( 'updatePopData', "" )
                }
            }
        }

    }

</script>

<style scoped>

    .pop-wrap {

        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;

        transition: 0.2s ease;

        background-color: rgba(255,255,255,0.8);

        opacity: 0;

        pointer-events: none;
    }

    .pop-wrap-in {

        opacity: 1;

        pointer-events: all;
    }

    .pop {

        width: 620px;
        height: auto;
        min-height: 120px;
        max-height: 360px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, 40% );

        transition: 0.3s ease;

        background-color: white;
        border-radius: 15px;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);
    }

    .pop-in {

        transform: translate( -50%, -50% );
    }

    .pop-name {

        height: 60px;

        font-size: 16px;
        text-align: center;
        color: var(--dark);
        user-select: none;

        padding: 20px 0px;

        background-color: var(--white);
        border-radius: 15px 15px 0px 0px;
    }

    .pop-footer {

        width: 100%;
        height: 60px;

        display: grid;
        align-items: center;
        justify-content: center;
    }

    .pop-button {
        
        width: 40px;
        height: 40px;

        display: grid;
        align-items: center;

        background-color: var(--dark);
        border-radius: 30px;
    }

</style>


