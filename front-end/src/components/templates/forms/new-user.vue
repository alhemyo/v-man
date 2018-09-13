<template>
    
    <div class="new-user">

        <div class="header">

            <h1>Add User</h1>

            <i class="material-icons">close</i>

        </div>

        <form class="form">

            <input type="text" class="form-input form-1" placeholder="Name" />

            <input type="text" class="form-input form-2" placeholder="Surname" />

            <input type="text" class="form-input form-3" placeholder="Gender" />

            <date-picker
                lang="en"
                class="date-picker form-4" 
                input-class="form-input"
                placeholder="Birthday"
                format="DD MMM YYYY"
            />

            <input type="text" class="form-input form-1" placeholder="City" />

            <input type="text" class="form-input form-2" placeholder="Phone number" />

            <input type="text" class="form-input form-half-2" placeholder="Address" />

            <input type="text" class="form-input form-half-1" placeholder="E mail" />

            <input type="text" class="form-input form-3" placeholder="ID number" />

            <date-picker
                lang="en"
                class="date-picker form-4" 
                input-class="form-input"
                placeholder="ID expire date"
                format="DD MMM YYYY"
            />

            <input type="text" class="form-input form-1" placeholder="Education" />

            <input type="text" class="form-input form-2" placeholder="Account number" />

            <input type="text" class="form-input form-half-2" placeholder="Bank" />

            <input type="text" class="form-input form-half-1" placeholder="UMCN" />

            <hr class="form-full" />

            <date-picker
                lang="en"
                class="date-picker form-1" 
                input-class="form-input"
                placeholder="Employment date"
                format="DD MMM YYYY"
            />

            <input type="text" class="form-input form-2" placeholder="Payment" />

            <input type="text" class="form-input form-3" placeholder="Position" />

        </form>

        <div class="footer"></div>

    </div>

</template>

<script>

    import DatePicker from 'vue2-datepicker'

    export default {

        name: 'new-user',

        components: {

            DatePicker
        }

    }

</script>

<style scoped>

    .new-user {

        width: 700px;
        height: auto;

        position: absolute;
        bottom: 0px;
        right: 20px;

        display: grid;
        grid-template-rows: 40px auto 60px;

        background-color: white;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);
        border-radius: 15px 15px 0px 0px;
    }

    .header {

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        background-color: rgba(0,0,0,0.01);
    }

    h1 {

        user-select: none;

        padding: 0px 20px;
    }

    .form {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: auto;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        align-content: flex-start;

        padding: 20px;
    }

    .footer {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: auto 60px;
        grid-template-rows: 60px;
        align-items: center;

        border-top: 1px solid rgba(0,0,0,0.01);
    }

    .material-icons {

        font-size: 20px;

        justify-self: center;

        cursor: pointer;
    }

    .date-picker {

        width: 100%;

        font-family: var(--default);
    }

</style>


