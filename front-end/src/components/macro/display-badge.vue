<template>

    <div class="badge">

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

        name: 'display-badge'
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

        opacity: 0.8;

        overflow: hidden;
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


