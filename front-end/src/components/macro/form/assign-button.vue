<template>
    
    <div class="assign-button" >

        <div @click="pop = !pop" :class="{ button : button }">

            <p>{{ name }}</p>

            <i class="material-icons">add</i>

        </div>

        <div class="pop" v-if="pop" >

            <div class="pop-header">

                <p>{{ name }}</p>

                <i class="material-icons">close</i>

            </div>

            <div class="pop-body">

                <select-option 
 
                :key="index" 
                v-for="( option, index ) in options" 
                :userSelect="true"
                :multy="true"
                :name="option.name" 
                :surname="option.surname"
                :umcn="option.umcn"
                :checkSelected="Boolean(selectedList.find( (item) => { return item.umcn === option.umcn } ))"
                @select="$event ? selectedList.push(option) : selectedList = selectedList.filter( item => item.umcn != option.umcn )"
                
                />

            </div>

            <div class="pop-footer">

                <p>Assign</p>

            </div>

        </div>

    </div>

</template>

<script>

    import selectOption from './option'

    export default {

        name: 'assign-button',

        props: { name: String, options: Array, button: Boolean },

        components: { selectOption },

        data() { 
            return {
                pop: false,
                selectedList: [] 
            } 
        }

    }

</script>

<style>

    .assign-button {

        position: relative;
    }

    .pop {

        width: 340px;
        height: 280px;

        position: absolute;
        top: -300px;
        right: 0px;
        z-index: 2;

        display: grid;
        grid-template-rows: 40px 200px 40px;

        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 0px 20px rgba( 0, 0, 0, 0.3 );

        overflow: hidden;
    }

    .pop p {

        font-size: 12px;

        padding: 0px 20px;
    }

    .pop-header {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        background-color: var(--white);
    }

    .pop-body {

        width: calc( 100% + 17px );
        height: 200px;

        padding: 10px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 40px;
        grid-gap: 10px;
        align-items: center;

        overflow: hidden;
        overflow-y: scroll;
    }

    .pop-footer {

        text-align: center;

        width: 100%;
        height: 40px;

        display: grid;
        align-items: center;

        border-top: 1px solid rgba( 0, 0, 0, 0.1 );
    }

</style>
