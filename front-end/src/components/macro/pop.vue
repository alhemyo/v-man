<template>
    
    <div class="pop-wrap" @click="emptyPopData" :class="{ 'pop-up' : !pop }">

        <div class="pop" :class="{ 'pop-in' : !pop }">

            <h1>{{ popValue }}</h1>

            <div v-if="multi" class="pop-nav"></div>

            <div class="pop-container">

                <badge 
                    v-if="object" 
                    class="pop-item" 
                    :key="index" 
                    v-for="(option, index) in popData.options" 
                    :name="option.user.name" 
                    :avatar="option.user.avatar || '/images/johnDoe.png'" 
                    :id="option.user.umcn" />

                <badge 
                    v-if="!object" 
                    class="pop-item" 
                    :key="index" 
                    v-for="(option, index) in popData.options" 
                    :name="option" />

            </div> <!-- end .pop-container -->

            <div v-if="multi" @click="addValueList" class="pop-footer">

                <p class="pop-button">DONE</p>    
                
            </div> <!-- end. pop-footer -->

        </div> <!-- end .pop -->

    </div> <!-- end .pop-wrap -->

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

                object: false, // If pop data select options are objects togle object

                routeName: this.$route.name
            }
        },

        computed: {

            popValue: { get() { return this.$store.state.popValue } },
            popData: { get() { return this.$store.state.popData } },
            pop: function() { return $.isEmptyObject(this.popData) },
            multi: { get() { return this.$store.state.multi } },
            valueList: { get() { return this.$store.state.valueList } },

            // Get current store module name
            moduleName() {

                if ( this.routeName === 'addUser' || this.routeName === 'editUser' || this.routeName === 'deleteUser'  )

                {
                    return 'users'
                }

                else if ( this.routeName === 'createProject' || this.routeName === 'editProject' || this.routeName === 'deleteProject' )

                {
                    return 'projects'
                }

            },

            // Get object in current store module
            objectName() {

                if ( this.routeName === 'addUser' || this.routeName === 'editUser' || this.routeName === 'deleteUser'  )

                {
                    return 'addUser'
                }

                else if ( this.routeName === 'createProject' || this.routeName === 'editProject' || this.routeName === 'deleteProject' )

                {
                    return 'createProject'
                }

            },

            // Get object mutation name
            mutationName() {

                if ( this.routeName === 'addUser' || this.routeName === 'editUser' || this.routeName === 'deleteUser'  )

                {
                    return 'AddUser'
                }

                else if ( this.routeName === 'createProject' || this.routeName === 'editProject' || this.routeName === 'deleteProject' )

                {
                    return 'CreateProject'
                }

            }

        },

        methods: {

            addValueList() {

                this.$store.commit( 'update' + this.mutationName + this.popValue, this.valueList )

                this.$store.commit( 'updateValueList', [] )
                this.$store.commit( 'updatePopData', {} )

            },

            emptyPopData(event) {

                if ( $(event.target).hasClass('pop-wrap') )

                {
                    this.$store.commit( 'updatePopData', {} )
                    this.$store.commit( 'updateValueList', [] )
                }
                
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
        user-select: none;

        padding: 20px;

        background-color: rgba(0,0,0,0.03);
    }

    .pop-nav {

        width: 100%;
        height: 40px;

        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .pop-container {

        width: calc(100% + 17px);
        max-height: 220px;

        position: relative;
        padding: 20px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 40px;
        grid-gap: 30px;

        overflow-y: scroll;
    }

    .pop-footer {

        width: 100%;
        height: 60px;

        position: relative;

        border-top: 1px solid rgba(0,0,0,0.05);
    }

    .pop-button {

        font-size: 12px;
        color: var(--dark);
        text-align: center;

        position: relative;

        padding: 23px 40px;

        cursor: pointer;
    }

</style>


