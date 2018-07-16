<template>
    
    <div class="menu-bar" :class="{ 'menu-bar-expand' : menubar }" >
        
        <h1 class="menu-bar-header">Settings</h1>

        <div class="menu">
 
            <ul class="sub-menu">

                <p class="sub-menu-title" @click="expandSubMenu" >Users</p>

                <li class="sub-menu-item"><router-link class="sub-menu-link" to="add-user">user list</router-link></li>

                <li class="sub-menu-item"><router-link class="sub-menu-link" to="add-user">add user</router-link></li>

                <li class="sub-menu-item"><router-link class="sub-menu-link" to="edit-user">edit user</router-link></li>

                <li class="sub-menu-item"><router-link class="sub-menu-link" to="delete-user">delete user</router-link></li>

            </ul> <!-- end .sub-menu -->

            <ul class="sub-menu">

                <p class="sub-menu-title" @click="expandSubMenu" >Projects</p>

                <li class="sub-menu-item"><router-link class="sub-menu-link" to="add-user">project list</router-link></li>

                <li class="sub-menu-item"><router-link class="sub-menu-link" to="add-user">add project</router-link></li>

                <li class="sub-menu-item"><router-link class="sub-menu-link" to="edit-user">edit project</router-link></li>

                <li class="sub-menu-item"><router-link class="sub-menu-link" to="delete-user">delete project</router-link></li>

            </ul> <!-- end .sub-menu -->
            
        </div> <!-- end .menu -->

        <div class="menu-bar-footer">

            <img @click="logout" src="/images/assets/icons/off.png" />    
            
        </div> <!-- end .menu-bar-footer --> 
    
    </div> <!-- end .menu-bar -->

</template>

<script>

    export default {

        name: 'menu-bar',

        computed: {

            menubar: {
                get() { return this.$store.state.menubar },
                set(menubar) { this.$store.commit( 'updateMenubar', menubar ) }
            }
        },

        methods: {

            expandSubMenu(event) {

                let subMenu = $(event.currentTarget).parent()

                $('.sub-menu').not(subMenu).removeClass('sub-menu-expand')

                $(subMenu).toggleClass('sub-menu-expand')
            },

            logout() {

                this.$store.dispatch('LOG_OUT')
            }
        },

        watch: {

            menubar() {

                if ( !this.menubar ) {

                    $('.sub-menu').removeClass('sub-menu-expand')
                }
            }
        }

    }

</script>

<style scoped>

    .menu-bar {

        width: 0px;
        height: 100%;

        position: absolute;
        right: 0px;

        transition: 0.3s ease;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px auto 80px;

        background-color: var(--red);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
    }

    .menu-bar-expand {

        width: 200px;
    }

    h1 {

        font-size: 14px;
        font-weight: 400;
        color: var(--white);
        text-align: right;

        padding: 32px 40px;
    }

    .menu {

        padding: 0px 40px;
    }

    .sub-menu {

        text-align: right;
        white-space: nowrap;

        width: 100%;
        height: auto;
        max-height: 45px;
        
        padding: 0px 0px;

        position: relative;

        transition: 0.3s ease;

        border-bottom: 1px solid rgba(0,0,0,0.1);

        overflow: hidden;
    }

    .sub-menu-expand {

        max-height: 800px;
    }

    .sub-menu-title {

        font-size: 14px;
        color: rgba(0,0,0,0.5);

        padding: 15px 0px;

        cursor: pointer;
    }

    .sub-menu-link {

        font-size: 12px;
        color: rgba(255,255,255,0.6);

        padding: 5px 0px;
        margin-bottom: 10px;
    }

    .sub-menu-link:hover {

        color: rgba(255,255,255,1);

        background-color: rgba(0,0,0,0.05);
    }

    .menu-bar-footer img {

        padding: 28px 30px;

        cursor: pointer;
    }

</style>


