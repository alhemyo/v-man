<template>
    
    <div class="user-badge" :class="{ 'user-badge-open' : isOpen }" @click="closeBadge">

        <img class="user-avatar" :src="avatar" alt="profile picture" />

        <p class="user-name">{{ name + ' ' + surname }}</p>

        <div class="user-settings-button" @click="isOpen = !isOpen">

            <div class="user-settings-button-item"></div>
            <div class="user-settings-button-item"></div>
            <div class="user-settings-button-item"></div>

        </div>

        <div class="user-settings">

            <p class="settings-link">Unassign {{ name }}</p>

            <p class="settings-link">Edit user</p>

            <p class="settings-link">PM {{ name }}</p>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'user-badge',

        props: {
            name: null,
            surname: null,
            avatar: null
        },

        data() {
            return {
                isOpen: false
            }
        },

        methods: {

            closeBadge(event) {
                
                if ( $(event.target).hasClass('user-settings-button') || $(event.target).hasClass('user-settings-button-item') ) {

                    // Do nothing
                }

                else if ( $(event.target).hasClass('settings-link') ) {

                    // Do nothing
                }

                else {

                    this.isOpen = false
                }
            }
        }

    }

</script>

<style scoped>

    .user-badge {

        width: auto;
        height: auto;
        max-height: 40px;

        position: relative;
        
        background-color: var(--black);

        display: grid;
        grid-template-columns: 40px auto 40px;
        grid-row: 40px minmax(0,auto);
        align-items: center;

        transition: max-height 0.2s ease;

        border-radius: 5px;

        overflow: hidden;
    }

    .user-badge-open {

        max-height: 140px;
    }

    .user-avatar {

        padding: 8px;

        opacity: 0.6;
    }

    .user-name {

        font-size: 12px;
        color: rgba(255,255,255,0.3);
        white-space: nowrap;
        text-overflow: ellipsis;
        user-select: none;

        padding: 5px;

        overflow: hidden;
    }

    .user-settings-button {

        width: 40px;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 14px;
        grid-auto-rows: 2px;
        grid-row-gap: 2px;
        justify-content: center;
        align-content: center;
        
        cursor: pointer;
    }

    .user-settings-button-item {

        background-color: rgba(255,255,255,0.1);
        border-radius: 2px;

        transition: 0.2s ease;
    }

    .user-settings-button:hover .user-settings-button-item {

        background-color: rgba(255,255,255,0.3);
    }

    .user-settings {

        width: 100%;
        height: auto;

        position: relative;

        grid-column: 1/4;

        padding: 10px 0px;

        background-color: rgba(0,0,0,0.05);
        border-top: 1px solid rgba(0,0,0,0.1);
    }

    .user-settings p {

        font-size: 11px;
        color: rgba(255,255,255,0.3);

        padding: 4px 10px;
    }

</style>


