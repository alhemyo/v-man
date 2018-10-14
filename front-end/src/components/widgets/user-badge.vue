<template>
    
    <div class="user-badge" @click="selectUser" :class="{ selected : selected }" >

        <div class="header">

            <div class="avatar">

                <img :src="avatar" />

            </div>

            <p class="name" >{{ name }}</p>

            <div v-show="settings" class="settings">

                <i class="fas fa-bars" />

            </div>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'user-badge',

        props: {
            id: Number,
            name: String,
            gender: String, // Remove when avatar is added
            display: Boolean,
            settings: Boolean
        },

        data() {
            return {
                selected: false,
                avatar: this.gender === 'Male' || this.gender === 'male' ? '/images/johnDoe.png' : '/images/janeDoe.png' // Remove when avatar is added
            }
        },

        methods: {
            selectUser() {
                if ( !this.display ) {
                    this.selected = !this.selected
                    this.$emit( 'selectUser', this.id )
                }
            }
        }

    }

</script>

<style scoped>

    .user-badge {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 4px;

        background-color: white;
        border-radius: 3px;
    }

    .header {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: 40px auto min-content;
        align-items: center;
    }

    .avatar {

        width: 40px;
        height: 40px;

        padding: 5px;
    }

    .name {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);
        white-space: nowrap;
        text-overflow: ellipsis;

        padding: 0px 10px;

        overflow: hidden;
    }

    .settings {

        width: 40px;
        height: 40px;

        display: grid;
        align-items: center;
    }

    .selected {

        background-color: var(--midgray);
    }

    .selected .name {

        color: var(--black);
    }


</style>
