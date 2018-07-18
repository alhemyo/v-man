<template>
    
    <div class="badge-wrap">

        <div class="badge">
            
            <div class="badge-avatar">

                <img :src="avatar" /> 
                
            </div> <!-- end .avatar -->

            <p class="badge-name">{{ name }}</p>

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
            avatar: null,
            selected: false,
            id: null,
            display: Boolean,
            edit: Boolean,
            selected: Boolean
        }

    }

</script>

<style scoped>

    .badge-wrap {

        width: 180px;
        height: 40px;
    }

    .badge {

        width: 160px;
        height: 40px;

        position: relative;
        margin: auto;

        display: grid;
        grid-template-columns: 40px 80px 40px;
        grid-template-rows: 40px;
        align-items: center;
        justify-content: center;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;
    }

    .badge-avatar {

        padding: 5px;
    }

    .badge-name {

        font-size: 12px;
        text-align: center;
        color: var(--dark);
    }

    .badge-settings {

        width: 100%;
        height: 100%;

        padding: 12px;

        cursor: pointer;
    }

</style>


