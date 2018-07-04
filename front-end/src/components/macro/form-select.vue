<template>

    <div @click="pop" class="form-select">

        <p v-if="!value" class="form-select-name">{{ name }}</p>
        
        <p v-if="value" class="form-select-value">{{ value }}</p>

    </div>

</template>

<script>

    export default {

        props: {
            name: "",
            value: ""
        },
        
        name: 'form-select',

        computed: {

            popValue: { get() { return this.$store.state.popValue } },
            popData: { get() { return this.$store.state.popData } }
        },

        methods: {

            pop() {

                let clicked = this.name.toLowerCase()
                let name = this.$route.name
                let parent 
                

                if ( name === 'addUser' || name === 'editUser' || name === 'deleteUser' )
                {
                    parent = 'users'
                }

                else if ( name === 'createProject' || name === 'editProject' || name === 'deleteProject' )
                {
                    parent = 'projects'
                }
                
                let data = this.$store.state[parent].addUser[clicked]

                this.$store.commit( 'updatePopValue', clicked )
                this.$store.commit( 'updatePopData', data )

            }
        }

    }

</script>

<style scoped>

    .form-select {

        font-size: 12px;
        text-align: center;

        width: 150px;
        height: 40px;

        position: relative;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;

        cursor: pointer;

        overflow: hidden;
    }

    .form-select:hover {

        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }

    .form-select-name {

        padding: 12px;
        color: var(--dark);
    }

    .form-select-value {

        padding: 12px;
        color: var(--dark);
    }

</style>


