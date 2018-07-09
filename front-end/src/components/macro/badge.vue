<template>

    <div @click="badgeSetValue" class="badge" :class="{ selected : clicked }">

        <div v-if="avatar" class="badge-avatar">

            <img :src="avatar" />

        </div>

        <p class="badge-name">{{ name }}</p>   
        
    </div> <!-- end .user-badge -->
    
</template>

<script>

    export default {

        props: {

            // Object props
            id: null,
            name: "",
            avatar: null,
            selected: false
            
        },

        data() {
            return {
                clicked: false
            }
        },

        name: 'badge',

        computed: {
            
            popValue: { get() { return this.$store.state.popValue } },
            popData: { get() { return this.$store.state.popData } },
            multi: { get() { return this.$store.state.multi } },
            valueList: { get() { return this.$store.state.valueList } },
        },

        methods: {

            badgeSetValue() {

                console.log(this.selected)

                let routeName = this.$route.name
                let moduleName // module to update mutations
                let mutationObjectName // Upper case Object name
                let objectName // object inside module

                // Get current store module
                if ( routeName === 'addUser' || routeName === 'editUser' || routeName === 'deleteUser' )
                {
                    moduleName = 'users'
                    mutationObjectName = 'AddUser'
                    objectName = 'addUser'
                }

                else if ( routeName === 'createProject' || routeName === 'editProject' || routeName === 'deleteProject' )
                {
                    moduleName = 'projects'
                    mutationObjectName = 'CreateProject'
                    objectName = 'createProject'
                }

                let value = {} // Object to hold clicked badge data

                if ( this.multi === true && this.clicked === false ) // Add to value list

                {
                    this.clicked = true

                    value.name = this.name
                    value.avatar = this.avatar
                    value.id = this.id

                    this.$store.commit( 'pushValueList', value )
                }

                else if ( this.multi === true && this.clicked === true ) // Remove from value list

                {
                    this.clicked = false

                    let filter = this.valueList.filter( (item, name) => {
                        return item.name === this.name
                    })

                    this.$store.commit( 'popValueList', filter )
                }

                else if ( this.multi === false ) // If single select add value and close

                {
                    this.clicked = false

                    this.$store.commit( 'update' + mutationObjectName + this.popValue, this.name )
                    this.$store.commit( 'updatePopData', {} )
                }
            }
        }
    }

</script>

<style scoped>

    .badge {

        width: 150px;
        height: 40px;

        position: relative;

        padding: 0px 5px;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;

        cursor: pointer;

        overflow: hidden;
    }

    .badge:hover {

        background-color: rgba(0,0,0,0.01);
    }

    .selected {

        border: 2px solid var(--red);
    }

    .badge-avatar {

        width: 30px;
        height: 30px;

        position: relative;
        float: left;
        margin-top: 4px;
        margin-right: 4px;

        background-color: rgba(0,0,0,0.1);
        border-radius: 30px;

        overflow: hidden;
    }

    .badge-name {

        width: auto;

        font-size: 12px;
        font-weight: 500;
        color: var(--dark);
        white-space: nowrap;
        text-align: center;
        user-select: none;
        text-overflow: ellipsis;

        position: relative;

        padding: 13px 10px;
    }

</style>


