<template>
    
    <div class="pop-wrap" @click="emptyPopData" :class="{ 'pop-up' : !pop }">

        <div class="pop" :class="{ 'pop-in' : !pop }">

            <h1>{{ popValue }}</h1>

            <div class="pop-container">

                <badge class="pop-item" :key="option" v-for="option in popData.options" :name="option" />

            </div>

        </div>

    </div>

</template>

<script>

    import badge from './badge'

    export default {
    
        name: 'pop',

        components: {
            badge
        },

        computed: {
            popValue: { get() { return this.$store.state.popValue } },
            popData: { get() { return this.$store.state.popData } },
            pop: function() { return $.isEmptyObject(this.popData) },
            multi: { get() { return this.$store.state.multi } }
        },

        methods: {

            emptyPopData(event) {

                if ( $(event.target).hasClass('pop-wrap') )

                {
                    this.$store.commit( 'updatePopData', {} )
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
        left: 0px;
        z-index: 4;

        background-color: rgba(255,255,255,0.6);

        opacity: 0;

        transition: 0.3s ease;

        pointer-events: none;
    }

    .pop {

        width: 560px;
        height: auto;

        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 5;
        
        transform: translate( -50%, 80% );

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 15px;

        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);

        transition: 0.3s ease;

        opacity: 0;
        overflow: hidden;
    }

    .pop-in {

        transform: translate( -50%, -50%);
        opacity: 1;
    }

    .pop-up {

        opacity: 1;

        pointer-events:all;
    }

    .pop h1 {

        text-align: center;
        color: var(--dark);

        padding: 20px;

        background-color: rgba(0,0,0,0.03);
    }

    .pop-container {

        padding: 20px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 40px;
        grid-gap: 30px;
    }

</style>


