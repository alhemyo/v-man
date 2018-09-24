<template>
    
    <router-link :to="{ name: 'myproject' , params: { id: id } }" class="user-project">
        
        <div class="priority" :class="{ high : ( priority === 'high' ), mid : ( priority === 'mid' ) }"></div> 
        
        {{ name }} 
        
        <i class="material-icons">keyboard_arrow_right</i>
        
    </router-link>

</template>

<script>

    export default {
    
        name: 'user-project',

        props: {

            name: '',
            id: '',
            priority: ''

        }

    }

</script>

<style scoped>

    .user-project {

        font-size: 12px;
        font-weight: 400;
        color: rgba(255,255,255,0.4);

        width: 100%;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 20px auto 30px;
        grid-template-rows: 40px;
        align-items: center;

        border-radius: 3px;
    }

    .user-project:hover {

        color: rgba(255,255,255,0.6);

        background-color: rgba(255,255,255,0.05);
    }

    .user-project > i {

        text-align: center;
        color: rgba(255,255,255,0.3);

        transition: 0.2s ease;

        transform: translateX( -20px );

        opacity: 0;
    }

    .user-project:hover > i {

        transform: translateX( 0px );

        opacity: 1;
    }

    .priority {

        width: 2px;
        height: 10px;

        justify-self: center;

        background-color: gray;
        border-radius: 5px;
    }

    .high {

        background-color: var(--red);
    }

    .mid {

        background-color: var(--yellow);
    }

    .router-link-active {

        color: white;
        font-weight: 500;

        background-color: rgba(0,0,0,0.1);
    }

    .router-link-active:hover {

        color: white;
        font-weight: 500;

        background-color: rgba(0,0,0,0.1);
    }

    .router-link-active > i {

        transform: translateX( 0px );

        opacity: 1;
    }

</style>


