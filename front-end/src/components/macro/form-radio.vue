<template>
    
    <div @click="radio" class="form-radio">

        <p class="form-radio-name">{{ name }}</p>

        <div class="form-radio-button" :class="{ on : value }"></div>    
        
    </div> <!-- end .form-radio -->

</template>

<script>

    export default {
    
        name: 'form-radio',

        props: {
            name: ""
        },

        data() {
            return {
                value: false
            }
        },

        methods: {

            radio() {

                this.value = !this.value

                let route = this.$route.name
                let module 

                if ( route === 'addUser' || route === 'editUser' || route === 'deleteUser' )

                {
                    module = 'AddUser'
                }

                else if ( route === 'createProject' || route === 'editProject' || route === 'deleteProject' )

                {
                    module = 'CreateProject'
                }

                this.$store.commit( 'update' + module + this.name, this.value )

            }
        }

    }

</script>

<style scoped>

    .form-radio {

        width: 150px;
        height: 40px;

        position: relative;
        z-index: 1;

        display: grid;
        grid-template-columns: auto 30px;
        align-items: center;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;

        transition: 0.3s ease;
    }

    .form-radio-name {

        user-select: none;

        font-size: 12px;
        color: var(--dark);

        padding: 0px 20px;
    }

    .form-radio-button {

        width: 20px;
        height: 20px;

        background-color: var(--white);

        border-radius: 30px;
        border: 1px solid rgba(0,0,0,0.2);
        cursor: pointer;

        transition: 0.1s ease;
    }

    .form-radio-button:hover {

        background-color: var(--gray);
    }

    .on {

        background-color: var(--green);
    }

    .on:hover {

        background-color: var(--green);
    }

</style>


