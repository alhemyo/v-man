<template>
    
    <form class="add-project">

        <input class="form-input form-full-1" type="text" placeholder="Project name" />

        <div class="form-input-date form-4" title="deadline">

            <span @click="hideEl" class="form-input-date-placeholder">deadline</span>

            <input class="form-input form-input-date-day" type="text" maxlength="2" placeholder="D" />
            <input class="form-input form-input-date-month" type="text" maxlength="2" placeholder="M" />
            <input class="form-input form-input-date-year" type="text" maxlength="4" placeholder="Y" />

        </div> <!-- end .form-input-date -->

        <div class="form-select form-1">

            <ul class="form-select-drawer" @click="openSelect">

                <p class="form-select-placeholder">Select Admin</p>

                <li class="form-select-value" @click="selectGender">Female</li>

                <li class="form-select-value" @click="selectGender">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <div class="form-select form-2">

            <ul class="form-select-drawer" @click="openSelect">

                <p class="form-select-placeholder">Select Client</p>

                <li class="form-select-value" @click="selectGender">Female</li>

                <li class="form-select-value" @click="selectGender">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <div class="form-select form-3">

            <ul class="form-select-drawer" @click="openSelect">

                <p class="form-select-placeholder">Select Priority</p>

                <li class="form-select-value" @click="selectGender">Female</li>

                <li class="form-select-value" @click="selectGender">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <div class="form-select form-4">

            <ul class="form-select-drawer" @click="openSelect">

                <p class="form-select-placeholder">Assign Users</p>

                <li class="form-select-value" @click="selectGender">Female</li>

                <li class="form-select-value" @click="selectGender">Male</li>

            </ul>

        </div> <!-- end .form-select -->

        <hr />

        <hr />

        <p class="form-message form-full-1">{{ message }}</p>
        <div class="form-button" @click="addUser">Create Project</div>

    </form>

</template>

<script>

    export default {
        
        name: 'add-project',

        data() {
            return {
                message: ""
            }
        },

        methods: {

            // form-select
            openSelect(event) {
                $('.form-select-drawer').not(event.currentTarget).removeClass('open-select')
                $(event.currentTarget).toggleClass('open-select')
            },
            selectGender(event) {
                this.userBody.gender = $(event.currentTarget).html()
            },

            // form-input-date
            hideEl(event) {
                $(event.currentTarget).fadeOut(150)
            },

        }

    }

</script>


<style>

    hr {

        grid-column: 1/5;

        opacity: 0.5;
    }

    .add-project {

        font-size: 12px;

        width: 100%;
        max-width: 800px;
        height: auto;

        position: relative;
        margin: auto;

        padding: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(60px);
        grid-gap: 20px;
        align-items: center;
    }

</style>

