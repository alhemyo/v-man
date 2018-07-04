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
            id: null,
            name: "",
            avatar: null
        },
    
        name: 'badge'
    }

</script>

<style scoped>

    .badge {

        width: 150px;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: minmax(0px, 40px) auto;
        align-items: center;

        padding: 0px 5px;

        background-color: white;
        border: 1px solid var(--gray);
        border-radius: 30px;
    }

    .badge-avatar {

        width: 30px;
        height: 30px;

        position: relative;

        background-color: rgba(0,0,0,0.1);
        border-radius: 30px;

        overflow: hidden;
    }

    .badge-name {

        font-size: 12px;
        color: var(--dark);
        white-space: nowrap;

        padding: 0px 10px;
    }

</style>


