<template>
    
    <div class="side-bar" @click="sidebar = !sidebar" :class="{ 'side-bar-expand' : sidebar }" >
        
        <div class="user-card">

            <div class="user-avatar" >

                <div class="user-avatar-frame">

                    <img class="avatar" src="/images/janeDoe.png" />    
                    
                </div> <!-- end .user-avatar-frame -->    
                
            </div> <!-- end .user-avatar -->

            <ul v-show="sidebar" class="user-info" :class="{ 'user-info-expand' : sidebar }" >

                <li class="user-info-item username">{{ username }}</li>

                <li class="user-info-item position">{{ position }}</li>

                <li class="user-info-item status">online</li>

                <li class="user-info-item duration">06:04:23</li>
                
            </ul> <!-- end .user-info -->
            
        </div> <!-- end .user-card -->

        <div class="user-projects"></div> <!-- end .user-projects -->

        <div class="side-bar-footer">

            <p>new project</p>

            <img src="/images/assets/icons/add_dark.png" title="new project" />  
            
        </div> <!-- end .side-bar-footer -->    
    
    </div> <!-- end .side-bar -->

</template>

<script>

    export default {

        name: 'side-bar',

        computed: {

            username: { get() { return this.$store.state.user.name + " " + this.$store.state.user.surname } },
            position: { get() { return this.$store.state.user.position } },

            sidebar: {
                get() { return this.$store.state.sidebar },
                set(sidebar) { this.$store.commit( 'updateSidebar', sidebar ) }
            }
        },

        mounted() {

            this.$store.dispatch('GET_USER')
        }

    }

</script>

<style scoped>

    .side-bar {

        width: 80px;
        height: 100%;

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 140px auto 80px;

        background-color: white;
        border-right: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);

        transition: 0.3s ease;
    }

    .side-bar-expand {

        width: 300px;
    }

    /* --------------- USER CARD CSS --------------- */

    .user-card {

        display: grid;
        grid-template-columns: minmax(80px, 1fr) minmax(0px, 1.8fr);
        grid-template-rows: 140px;

        justify-items: center;
        align-items: center;

        overflow: hidden;
    }

    .user-avatar {

        width: 100%;
        height: 100%;

        position: relative;

        transition: 0.3s ease;

        background-color: white;
    }

    .user-avatar-frame {

        max-width: 80px;
        max-height: 80px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );
    }

    .user-info {

        width: 0px;
        height: 70px;

        display: grid;
        grid-template-columns: min-content min-content min-content;
        grid-template-rows: 20px 18px;
        grid-gap: 10px;

        justify-content: space-between;
        justify-items: center;
        align-content: space-around;
        align-items: center;

        padding: 20px 0px;
        padding-right: 40px;

        transition: 0.3s ease;
        overflow: hidden;
    }

    .user-info-expand {

        width: auto;
    }

    .user-info-item {

        font-size: 12px;
        color: var(--dark);
        white-space: nowrap;
    }

    .username {

        font-size: 14px;
        font-weight: 500;
        color: var(--black);

        width: 100%;

        grid-column: 1/4;
    }

    .position {

        justify-self: flex-start;
    }

    .status {

        color: var(--green);
    }

    .duration {

        color: rgba(0,0,0,0.4);

        justify-self: flex-end;
    }

    .side-bar-footer {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: minmax(0px, 100%) 40px;
        grid-template-rows: 40px;

        align-items: center;
        align-content: center;

        cursor: pointer;
    }

    .side-bar-footer p {

        font-size: 12px;
        color: var(--dark);
        white-space: nowrap;

        padding-right: 20px;

        justify-self: flex-end;
    }

    .side-bar-footer img {

        padding: 5px;
    }

</style>


