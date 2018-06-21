<template>
    
    <div class="nav-bar">

        <h1><span>V</span>-MAN</h1>

    </div>

</template>

<script>

    export default {
        
        name: "nav-bar"

    }

</script>

<style scoped>

    .nav-bar {

        width: 100%;
        height: 80px;

        background-color: var(--black);

        grid-column: 1/3;
    }

    h1 {

        font-weight: 300;
        color: var(--white);

        font-size: 24px;

        padding: 28px 40px;
    }

    h1 span {

        font-weight: 400;
        color: var(--red);
    }

</style>


