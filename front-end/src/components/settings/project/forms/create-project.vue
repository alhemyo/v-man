<template>
    
    <form class="settings-form">

        <!-------------------- FIRST COLUMN -------------------->

        <input class="form-input form-third-1" type="text" placeholder="Project name" />

        <div class="form-date form-4">

            <span class="form-date-title">DEADLINE</span>

            <input class="form-date-day" type="text" maxlength="2" placeholder="D" />

            <input class="form-date-month" type="text" maxlength="2" placeholder="M" /> 

            <input class="form-date-year" type="text" maxlength="4" placeholder="Y" />  
        
        </div> <!-- end .form-date -->

        <!-------------------- SECOND COLUMN -------------------->

        <form-select :name="'Priority'" :multiSelect="false" />

        <form-select :name="'Admin'" :multiSelect="true" />

        <form-select :name="'Client'" :multiSelect="false" />

        <form-select :name="'Users'" :multiSelect="true" />

        <hr />

        <!-------------------- THIRD COLUMN -------------------->

        <transition name="fade">
            <p v-show="message" class="form-message form-third-1">{{ message }}</p>
        </transition>

        <p class="form-button form-4" >Create project</p>
        
    </form> <!-- end .settings-form -->

</template>

<script>

    // Import modules
    import axios from 'axios'

    // Import components
    import formSelect from '../../../macro/form-select'
    import formRadio from '../../../macro/form-radio'

    export default {
    
        name: 'create-project',

        components: {
            formSelect
        },

        data() {
            return {
                message: ""
            }
        }

    }

</script>

