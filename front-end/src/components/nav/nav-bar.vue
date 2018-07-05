<template>
    
    <div class="nav-bar">

        <div class="nav-bar-main">

            <h1><span>V</span>-MAN</h1>

        </div> <!-- end .nav-bar-main -->

        <div class="nav-bar-route"></div> <!-- end. nav-bar-route -->

        <div class="nav-bar-settings" @click="openSettings" :class="{ 'nav-bar-settings-open' : settings }" >

            <img src="/images/assets/icons/settings.png" />    
                
        </div> <!-- end. nav-bar-settings -->

    </div>

</template>

<script>

    export default {
        
        name: "nav-bar",

        computed: {

            settings: {
                get() { return this.$store.state.settings },
                set(settings) { this.$store.commit( 'updateSettings', settings ) }
            }
        },

        methods: {
            openSettings() {
                this.settings = !this.settings
            }
        }

    }

</script>

<style scoped>

    .nav-bar {

        width: 100%;
        height: 80px;

        display: grid;
        grid-template-columns: 300px auto 80px;

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

    .nav-bar-settings {

        position: relative;
        z-index: 20;

        display: grid;
        grid-template-columns: 80px;
        grid-template-rows: 80px;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        transition: all 0.3s ease;
    }

    .nav-bar-settings-open {

        transform: translateX(-110px) rotate(90deg);
    }

</style>


