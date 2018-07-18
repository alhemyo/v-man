<template>
    
    <div class="badge-wrap">

        <div v-if="multiselect" class="badge-deselected" :class="{ 'badge-selected' : selected }" ></div>

        <div @click="addBadgeValue" class="badge">
            
            <div class="badge-avatar">

                <img :src="avatar" /> 
                
            </div> <!-- end .avatar -->

            <p class="badge-name">{{ name + ' ' + surname.charAt(0) }}</p>

            <div v-if="edit" class="badge-settings">

                <img src="/images/assets/icons/badge-settings.png" />    
                
            </div> <!-- end .badge-settings -->
            
        </div> <!-- end .badge -->    
        
    </div> <!-- end .badge-wrap -->

</template>

<script>

    export default {
    
        name: 'badge',

        props: {

            name: null,
            surname: null,
            avatar: null,
            id: null,
            display: Boolean,
            edit: Boolean,
            multiselect: Boolean
        },

        data() {

            return {

                selected: false,
                value: {}
            }
        },

        computed: {

            popData: { get() { return this.$store.state.popData } },
            popName: { get() { return this.$store.state.popName } },
            valueList: { get() { return this.$store.state.valueList } }
        },

        methods: {

            addBadgeValue() {

                if ( this.popData.multiselect && !this.selected ) {

                    this.selected = true

                    this.value.name = this.name
                    this.value.surname = this.surname
                    this.value.avatar = this.avatar
                    this.value.id = this.id

                    this.$store.commit( 'pushValueList', this.value )
                }

                else if ( this.popData.multiselect && this.selected ) {

                    this.selected = false

                    let filteredList = this.valueList.filter((item, id) => { return item.id != this.id })

                    this.$store.commit( 'updateValueList', filteredList )
                }

                else if ( this.popData.multiselect === false ) {

                    this.selected = false

                    this.$store.commit( 'update' + this.$route.name + this.popName, this.name )
                    this.$store.commit( 'updatePopData', "" )
                }
            }
        }

    }

</script>

<style scoped>

    .badge-wrap {

        width: 180px;
        height: 40px;

        position: relative;
    }

    .badge {

        width: 160px;
        height: 40px;

        position: relative;
        margin: auto;

        display: grid;
        grid-template-columns: 40px 80px 40px;
        grid-template-rows: 40px;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;

        cursor: pointer;
    }

    .badge-deselected {

        width: 6px;
        height: 6px;

        position: absolute;
        top: 17px;

        transition: 0.2s ease;

        background-color: var(--darkGray);
        border-radius: 6px;
    }

    .badge-selected {

        background-color: var(--darkRed);
    }

    .badge-avatar {

        padding: 5px;
    }

    .badge-name {

        font-size: 12px;
        text-align: center;
        color: var(--dark);
        white-space: nowrap;

        height: 40px;

        padding: 12px 0px;
    }

    .badge-settings {

        width: 100%;
        height: 100%;

        padding: 12px;

        cursor: pointer;
    }

</style>


