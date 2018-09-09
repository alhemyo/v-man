<template>
    
    <div class="priority">

        <p class="priority-title">priority</p>

        <div class="priority-items">

            <div class="item low" :class="{ 'low-checked': (priority === 'low') }" ></div>

            <div class="item mid" :class="{ 'mid-checked': (priority === 'mid') }" ></div>

            <div class="item high" :class="{ 'high-checked': (priority === 'high') }" ></div>

        </div>

        <div class="priority-radio">

            <input name="priority" value="low" type="radio" @click="$emit( 'setPriority', $event.target.value )" />

            <input name="priority" value="mid" type="radio" @click="$emit( 'setPriority', $event.target.value )" />

            <input name="priority" value="high" type="radio" @click="$emit( 'setPriority', $event.target.value )" />

        </div>

    </div>

</template>

<script>

    export default {

        props: [ 'priority' ]

    }

</script>

<style scoped>

    .priority {

        width: 100%;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: auto 100px;
        grid-column-gap: 10px;
        align-items: center;
    }

    .priority-title {

        font-size: 12px;
        font-weight: 500;
        color: var(--dark);

        text-align: right;
    }

    .priority-items {

        width: 100px;
        height: 40px;

        position: absolute;
        right: 0px;

        padding: 0px 20px;

        display: grid;
        grid-template-columns: 14px 14px 14px;
        grid-column-gap: 10px;
        justify-content: space-around;
        align-items: center;

        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;
    }

    .item {

        width: 14px;
        height: 14px;

        position: relative;

        background-color: white;
        
        border: 2px solid var(--dark);
        border-radius: 20px;

        cursor: pointer;
    }

    .low::before {

        content: "";
        
        width: 6px;
        height: 6px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );

        background-color: gray;
        border-radius: 10px;

        opacity: 0.5;
    }

    .low-checked {

        background-color: gray;
    }

    .mid::before {

        content: "";
        
        width: 6px;
        height: 6px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );

        background-color: var(--yellow);
        border-radius: 10px;

        opacity: 0.5;
    }

    .mid-checked {

        background-color: var(--yellow);
    }

    .high::before {

        content: "";
        
        width: 6px;
        height: 6px;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );

        background-color: var(--red);
        border-radius: 10px;

        opacity: 0.5;
    }

    .high-checked {

        background-color: var(--red);
    }

    .priority-radio {

        width: 100px;
        height: 40px;

        padding: 0px 20px;
        z-index: 1;

        display: grid;
        grid-template-columns: 14px 14px 14px;
        grid-column-gap: 10px;
        justify-content: space-around;
        align-items: center;

        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;

        opacity: 0;
    }

    input {

        cursor: pointer;
    }

</style>


