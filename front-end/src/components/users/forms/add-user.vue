<template>
    
    <form class="form add-user">

        <!---------------------- FIRST ROW ---------------------->

        <p class="form-sub-title form-1">Personal info</p>

        <input class="form-input form-2" type="text" name="name" placeholder="Name" />

        <input class="form-input form-3" type="text" name="surname" placeholder="Surname" />

        <form-select :name="'Gender'" />

        <!---------------------- SECOND ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">Birthday</p>
            
            <input type="text" name="day" placeholder="D" />

            <input type="text" name="month" placeholder="M" />

            <input type="text" name="year" placeholder="Y" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="city" placeholder="City" />

        <input class="form-input form-3" type="text" name="phone" placeholder="Phone" />

        <form-select :name="'Education'" />

        <!---------------------- THIRD ROW ---------------------->

        <input class="form-input form-half-1" type="text" name="address" placeholder="Address" />

        <input class="form-input form-half-2" type="text" name="email" placeholder="E - mail" />

        <!---------------------- FORTH ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">ID expire date</p>
            
            <input type="text" name="day" placeholder="D" />

            <input type="text" name="month" placeholder="M" />

            <input type="text" name="year" placeholder="Y" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="idNumber" placeholder="ID number" />

        <input class="form-input form-half-2" type="text" name="umcn" placeholder="UMCN" />

        <!---------------------- FIFTH ROW ---------------------->

        <input class="form-input form-half-1" type="text" name="bank" placeholder="Bank" />

        <input class="form-input form-half-2" type="text" name="accNumber" placeholder="Account number" />

        <!---------------------- SIXTH ROW ---------------------->

        <p class="form-sub-title form-1">Work info</p>

        <form-radio class="form-4" :name="'Admin'" />

        <!---------------------- SEVENTH ROW ---------------------->

        <div class="form-date form-1">

            <p class="form-date-name">Employment date</p>
            
            <input type="text" name="day" placeholder="D" />

            <input type="text" name="month" placeholder="M" />

            <input type="text" name="year" placeholder="Y" />    
            
        </div> <!-- end .form-date -->

        <input class="form-input form-2" type="text" name="payment" placeholder="Payment" />

        <form-select :name="'Position'" />

        <form-select :name="'Admin type'" />

        <!---------------------- EIGHT ROW ---------------------->

        <p class="form-sub-title form-third-1">Message for succes or error</p>

        <p class="form-button form-4">Add User</p>

    </form>

</template>

<script>

    import formSelect from '../../macro/form/form-select'
    import formRadio from '../../macro/form/form-radio'

    export default {
    
        name: 'add-user',

        components: {

            formSelect,
            formRadio
        }

    }

</script>


<style scoped></style>

