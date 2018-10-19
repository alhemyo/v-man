<template>
    
    <div class="template-view">

        <div class="head">

            <slot name="card" />

            <slot name="nav" />

        </div>

        <div class="body">

            <slot name="content" />

        </div>

    </div>

</template>

<script>

    export default {

        name: 'template-view'

    }

</script>

<style>

    .template-view {

        width: 100%;
        height: calc( 100vh - 92px );

        display: grid;
        grid-template-rows: 224px auto;
        grid-row-gap: 4px;
    }

    .head {

        display: grid;
        grid-template-rows: 160px 60px;
        grid-row-gap: 4px;

        background-color: var(--content);

        border-radius: 3px;

        overflow: hidden;
    }

    .body {

        width: 100%;
        height: calc( 100vh - 320px );

        position: relative;

        border-radius: 3px;

        overflow: hidden;
        overflow-y: auto;
    }

</style>
