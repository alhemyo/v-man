<template>

    <div class="pop-wrap" @click="closePop" :class="{ 'pop-wrap-in' : popData }" >

        <div class="pop" :class="{ 'pop-in' : popData }" >

            <p class="pop-name">{{ popName }}</p>

            <div v-if="popData.multiselect" class="pop-header">

                <p>select all</p>

                <p>{{ valueLength + ' ' + popName + ' selected' }}</p>    
                
            </div> <!-- end .pop-header -->

            <div class="pop-loader">

                <badge 
                    v-if="object" 
                    :key="index" 
                    v-for="(option, index) in popData.options" 
                    :name="option.name"
                    :surname="option.surname"
                    :avatar="option.avatar || '/images/johnDoe.png'"
                    :id="option.umcn"
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

            <div v-if="popData.multiselect" class="pop-footer" @click="addValue" >

                <p>Add {{ popName }}</p>
                
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
            valueList: { get() { return this.$store.state.valueList } },
            valueLength: { get() { return this.$store.state.valueList.length } }
        },

        methods: {

            closePop(event) {

                if ( $(event.target).hasClass('pop-wrap') ) {

                    this.$store.commit( 'updatePopData', "" )
                    this.$store.commit( 'updateValueList', [] )
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
        color: var(--white);
        user-select: none;

        padding: 20px 0px;

        background-color: var(--dark);
        border-radius: 15px 15px 0px 0px;
    }

    .pop-header {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 40px;
        align-items: center;

        background-color: var(--white);
    }

    .pop-header > p {

        font-size: 12px;
        color: var(--darkGray);

        padding: 0px 40px;
    }

    .pop-header p:nth-child(2) {

        text-align: right;
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

        font-size: 12px;
        color: var(--dark);

        width: 100%;
        height: 60px;

        display: grid;
        align-items: center;
        justify-content: center;

        background-color: white;
        border-top: 1px solid rgba(0,0,0,0.05);

        cursor: pointer;
    }

    .pop-footer:hover {

        background-color: var(--white);
    }

</style>


