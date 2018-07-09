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
            
        },

        data() {
            return {

                clicked: false,
                value: {},

                routeName: this.$route.name
            }
        },

        name: 'badge',

        computed: {
            
            popValue: { get() { return this.$store.state.popValue } },
            popData: { get() { return this.$store.state.popData } },
            multi: { get() { return this.$store.state.multi } },
            valueList: { get() { return this.$store.state.valueList } },

            moduleName() {

                if ( this.routeName === 'addUser' || this.routeName === 'editUser' || this.routeName === 'deleteUser' )
                
                {
                    return 'users'
                }

                else if ( this.routeName === 'createProject' || this.routeName === 'editProject' || this.routeName === 'deleteProject' )

                {
                    return 'projects'
                }

            },

            objectName() {

                if ( this.routeName === 'addUser' || this.routeName === 'editUser' || this.routeName === 'deleteUser' )
                
                {
                    return 'addUser'
                }

                else if ( this.routeName === 'createProject' || this.routeName === 'editProject' || this.routeName === 'deleteProject' )

                {
                    return 'createProject'
                }

            },

            mutationName() {

                if ( this.routeName === 'addUser' || this.routeName === 'editUser' || this.routeName === 'deleteUser' )
                
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

            badgeSetValue() {

                if ( this.multi === true && this.clicked === false ) // Add to value list

                {
                    this.clicked = true

                    this.value.name = this.name
                    this.value.avatar = this.avatar
                    this.value.id = this.id

                    this.$store.commit( 'pushValueList', this.value )
                }

                else if ( this.multi === true && this.clicked === true ) // Remove from value list

                {
                    this.clicked = false

                    let filter = this.valueList.filter( (item, id) => {
                        return item.id != this.id
                    })

                    this.$store.commit( 'updateValueList', filter )
                }

                else if ( this.multi === false ) // If single select add value and close

                {
                    this.clicked = false

                    this.$store.commit( 'update' + this.mutationName + this.popValue, this.name )
                    this.$store.commit( 'updatePopData', {} )
                }
            }
        },

        mounted() {

            if ( this.multi === true )

            {
                let selectedBadge = this.$store.state[this.moduleName][this.objectName][this.popValue.toLowerCase()].value.filter((item, id) => {

                    return item.id === this.id

                })

                Object.keys(selectedBadge).forEach((key) => {

                    if ( selectedBadge[key].id === this.id )

                    {
                        this.$store.commit( 'pushValueList', selectedBadge[key] )
                        this.clicked = true
                    }

                })

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


