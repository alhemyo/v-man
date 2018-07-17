<template>
    
    <form class="form add-project">

        <!---------------------- FIRST ROW ---------------------->

        <input class="form-input form-third-1" type="text" name="projectName" placeholder="Project name" />

        <div class="form-date form-4">

            <p class="form-date-name">Deadline</p>
            
            <input type="text" name="day" placeholder="D" />

            <input type="text" name="month" placeholder="M" />

            <input type="text" name="year" placeholder="Y" />    
            
        </div> <!-- end .form-date -->

        <!---------------------- SECOND ROW ---------------------->

        <form-select :name="'Priority'" />

        <form-select :name="'Client'" />

        <form-select :name="'Admin'" />

        <form-select :name="'Users'" />

        <!---------------------- THIRD ROW ---------------------->

        <p class="form-sub-title form-third-1">Message for succes or error</p>

        <p class="form-button form-4">Add Project</p>

    </form> <!-- end .add-project -->

</template>

<script>

    import formSelect from '../../macro/form/form-select'

    export default {
    
        name: 'add-project',

        components: {

            formSelect
        }

    }

</script>

