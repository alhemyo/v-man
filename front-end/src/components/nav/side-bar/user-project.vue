<template>
    
    <router-link :to="{ name: 'project', params: { id: id } }" class="user-project">
        
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
        color: rgba(0,0,0,0.5);

        width: 100%;
        height: 40px;

        position: relative;

        margin-top: 4px;

        padding: 0px 20px;

        display: grid;
        grid-template-columns: 20px auto 20px;
        grid-template-rows: 40px;
        align-items: center;

        border-radius: 0px 30px 30px 0px;
    }

    .user-project:hover {

        color: var(--dark);

        background-color: var(--white);
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

        color: var(--dark);
        font-weight: 700;

        background-color: white;
    }

    .router-link-active:hover {

        color: var(--dark);
        font-weight: 700;

        background-color: white;
    }

</style>


