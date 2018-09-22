<template>

    <div class="calendar">

        <div class="nav">

            <i class="material-icons" @click="prevYear" >keyboard_arrow_left</i>

            <i class="material-icons" @click="prev" >keyboard_arrow_left</i>

            <p class="month" >{{ formatMonth }}</p>

            <p class="year">{{ year }}</p>

            <i class="material-icons" @click="next" >keyboard_arrow_right</i>

            <i class="material-icons" @click="nextYear" >keyboard_arrow_right</i>

        </div>

        <div class="days">

            <p class="day" :key="day" v-for="day in days" >{{ day }}</p>

        </div>

        <div class="table">

            <p class="date" :key="day" v-for="(day, index) in (daysInMonth + firstDay)" >{{ (index + 1) > firstDay ? day - firstDay : '' }}</p>

        </div>

    </div>
    
</template>

<script>

    import moment from 'moment'

    export default {

        name: 'calendar',

        data() {
            return {

                days: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
                months: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],

                today: new Date(),
                month: new Date().getMonth(),
                year: new Date().getFullYear()

            }
        },

        computed: {

            formatMonth() { return moment().month(this.month).format("MMMM") },
            daysInMonth() { return 32 - new Date(this.year, this.month, 32).getDate() },
            firstDay() { return new Date( this.year, this.month ).getDay() }
        },

        methods: {

            next() { 
                
                this.year = ( this.month === 11 ) ? this.year + 1 : this.year
                this.month = ( this.month + 1 ) % 12
                
            },

            prev() {

                this.year = ( this.month === 0 ) ? this.year - 1 : this.year
                this.month = ( this.month === 0 ) ? 11 : this.month - 1

            },

            nextYear() { 

                this. year = this.year + 1

            },

            prevYear() {

                this.year = this.year - 1

            }

        }

    }

</script>

<style scoped>

    .calendar {

        width: 100%;
        max-width: 600px;
        height: auto;
        min-height: 100%;

        position: relative;
        margin: auto;

        padding: 20px;

        display: grid;
        align-items: center;
        align-content: center;
    }

    .nav {

        font-size: 14px;
        text-align: center;

        width: 100%;
        height: auto;

        padding: 20px 0px;

        display: grid;
        grid-template-columns: 24px 24px auto auto 24px 24px;
        grid-column-gap: 4px;
        align-items: center;

        cursor: pointer;
    }

    .month {

        font-family: (--default);
        font-size: 14px;
        text-align: right;

        width: 100%;

        justify-self: flex-end;

        background-color: transparent;
        border: none;
    }

    .year {

        justify-self: flex-start;
    }

    .days {

        font-size: 12px;
        font-weight: 400;
        text-align: center;

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: 40px;
        align-items: center;
    }

    .table {

        font-size: 12px;
        text-align: center;

        display: grid;
        grid-template-columns: repeat( 7, minmax( 20px, 1fr ) );
        grid-template-rows: repeat( 6, minmax( 20px, 40px ) );
        grid-row-gap: 10px;
        align-items: center;
    }

    .date {

        font-weight: 400;

        width: 100%;
        height: 100%;

        display: grid;
        align-items: center;
    }

    .material-icons {

        text-align: center;
    }

</style>


