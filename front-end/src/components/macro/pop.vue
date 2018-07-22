<template>

    <div class="pop-wrap" @click="closePop" :class="{ 'pop-wrap-in' : popData }" >

        <div class="pop" :class="{ 'pop-in' : popData }" >

            <p class="pop-name">{{ popName }}</p>

            <div v-if="popData.multiselect" class="pop-header"></div> <!-- end .pop-header -->

            <div class="pop-loader">

                <badge 
                    v-if="object" 
                    :key="index" 
                    v-for="(option, index) in popData.options" 
                    :name="option.user.name"
                    :surname="option.user.surname"
                    :avatar="option.user.avatar || '/images/johnDoe.png'"
                    :id="option.user.umcn"
                    :edit="false"
                    :display="false"
                    :multiselect="multiselect" />

                <badge 
                    v-if="!object" 
                    :key="index" 
                    v-for="(option, index) in popData.options" 
                    :name="option"
                    :surname="''"
                    :avatar="null"
                    :id="null"
                    :edit="false"
                    :display="false"
                    :multiselect="multiselect"/>

                <div class="pop-loader-split"></div>
                
            </div> <!-- end .pop-loader -->

            <div v-if="popData.multiselect" class="pop-footer">

                <div class="pop-button" @click="addValue" >

                    <img src="/images/assets/icons/done.png" />

                </div> <!-- end .pop-button -->
                
            </div> <!-- end .pop-footer -->
            
        </div> <!-- end .pop -->    
    
    </div> <!-- end .pop -->

</template>

<script>

    import badge from './badge'

    export default {
    
        name: 'pop',

        components: {

            badge
        },

        data() {
            return {
                object: false
            }
        },

        computed: {

            popName: { get() { return this.$store.state.popName } },
            popData: { get() { return this.$store.state.popData } },
            multiselect: { get() { return this.$store.state.popData.multiselect } },
            valueList: { get() { return this.$store.state.valueList } }
        },

        methods: {

            closePop(event) {

                if ( $(event.target).hasClass('pop-wrap') ) {

                    this.$store.commit( 'updatePopData', "" )
                }
            },

            addValue() {

                this.$store.commit( 'update' + this.$route.name + this.popName, this.valueList  )

                this.$store.commit( 'updatePopData', "" )
                this.$store.commit( 'updateValueList', [] )
            }
        },

        watch: {

            popData() {

                // If select value is object togle object
                Object.keys(this.popData).forEach((key) => {

                    if ( key === 'userBadge' )

                    {
                        if ( this.popData[key] )

                        {
                            this.object = true
                        }

                        else 

                        {
                            this.object = false
                        }
                    }

                })
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
        z-index: 5;

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

        background-color: var(--white);
        border-radius: 15px;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);

        overflow: hidden;
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

    .pop-header {

        width: 100%;
        height: 40px;

        background-color: white;
        border-top: 1px solid rgba(0,0,0,0.05);
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .pop-loader {

        width: calc( 100% + 17px );
        height: auto;
        max-height: 200px;

        padding: 20px;
        padding-bottom: 0px;

        display: grid;
        grid-template-columns: 180px 180px 180px;
        grid-template-rows: auto;
        grid-gap: 20px;

        background-color: white;

        overflow: hidden;
        overflow-y: scroll;
    }

    .pop-loader-split {

        width: 100%;
        height: 1px;

        grid-column: 1/4;
    }

    .pop-footer {

        width: 100%;
        height: 60px;

        display: grid;
        align-items: center;
        justify-content: center;

        background-color: white;
        border-top: 1px solid rgba(0,0,0,0.05);
    }

    .pop-button {
        
        width: 40px;
        height: 40px;

        display: grid;
        align-items: center;

        transition: 0.1s ease;

        background-color: var(--darkGray);
        border-radius: 30px;

        cursor: pointer;
    }

    .pop-button:hover {

        background-color: var(--green);
    }

</style>


