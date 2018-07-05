<template>

    <div @click="badge" class="badge">

        <div v-if="avatar" class="badge-avatar">

            <img :src="avatar" />

        </div>

        <p class="badge-name">{{ name }}</p>   
        
    </div> <!-- end .user-badge -->
    
</template>

<script>

    export default {

        props: {
            id: null,
            name: "",
            avatar: null
        },
    
        name: 'badge',

        computed: {
            
            popValue: { get() { return this.$store.state.popValue } },
            popData: { get() { return this.$store.state.popData } },
            multi: { get() { return this.$store.state.multi } }
        },

        methods: {

            mBadge() {

                if ( this.multi === false )

                {
                    this.$store.commit( 'updatePopData', {} )
                }

            },

            badge() {

                let routeName = this.$route.name
                let value = this.name
                let route

                if ( routeName === 'addUser' || routeName === 'editUser' || routeName === 'deleteUser' )
                {
                    route = 'AddUser'
                }

                else if ( routeName === 'createProject' || routeName === 'editProject' || routeName === 'deleteProject' )
                {
                    route = 'CreateProject'
                }

                this.$store.commit( 'update' + route + this.popValue, value )
                this.mBadge()
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
    }

    .badge:hover {

        background-color: rgba(0,0,0,0.01);
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
        color: var(--dark);
        white-space: nowrap;
        text-align: center;

        position: relative;

        padding: 13px 10px;
    }

</style>


