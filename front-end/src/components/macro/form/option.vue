<template>
    
    <div class="select-option" @click="$emit('selectOption')">

        <!-- SINGLE VALUE OPTION -->

        <p v-if="!userSelect" class="single-option" :class="{ selected : selected }" @click="select" >{{ name }}</p>

        <!-- OBJECT IN VALUE OPTION -->

        <div v-if="userSelect" class="object-option" :class="{ selected : selected }" @click="select" >

            <i class="material-icons">person</i>

            <p>{{ name + ' ' + surname }}</p>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'select-option',

        props: {

            name: String,
            surname: String,
            umcn: String,
            userSelect: Boolean,
            multy: Boolean,
            checkSelected: Boolean

        },

        data() {
            return {
                selected: this.checkSelected ? true : false
            }
        },

        methods: {

            select() {

                this.selected = !this.selected

                this.$emit( 'select', this.selected )

            }

        }

    }

</script>

<style>

    .select-option {

        font-size: 12px;
        font-weight: 600;

        width: 100%;
        height: 40px;

        margin-top: 1px;
    }

    .single-option {

        height: 40px;

        display: grid;
        align-items: center;

        transition: 0.2s ease;

        border-radius: 3px;
    }

    .single-option:hover {

        background-color: rgba(0,0,0,0.05);
    }

    .object-option {

        font-size: 12px;
        font-weight: 600;

        position: relative;
        margin-top: 1px;

        display: grid;
        grid-template-columns: 40px auto;
        grid-template-rows: 40px;
        align-items: center;

        transition: 0.2s ease;

        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 3px;

        overflow: hidden;
    }

    .object-option img {

        padding: 6px;
    }

    .object-option p {

        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;

        padding: 0px 10px;

        overflow: hidden;
    }

    .selected {

        color: white;

        background-color: var(--yellow);
    }

</style>


