<template>

    <div class="calendar">

        <div class="nav">

            <i class="material-icons next-year" title="previous year" @click="prevYear" >keyboard_arrow_left</i>

            <i class="material-icons next" title="previous month" @click="prev" >keyboard_arrow_left</i>

            <p class="month" >{{ formatMonth }}</p>

            <p class="year">{{ year }}</p>

            <i class="material-icons next" title="next month" @click="next" >keyboard_arrow_right</i>

            <i class="material-icons next-year" title="next year" @click="nextYear" >keyboard_arrow_right</i>

        </div>

        <div class="days">

            <p class="day" :key="day" v-for="day in days" >{{ day }}</p>

        </div>

        <div class="table">

            <div class="date-wrap" 

            :key="day" 
            v-for="day in (daysInMonth + firstDay)"
            @click="test"

            >
            
                <p
                 class="date"
                 :class="{ 

                    today : month === new Date().getMonth() ? day - firstDay === today.getDate() ? true : false : false,
                    'date-hover' : day > firstDay ? true : false
                    
                    }"
                 >
                 
                    {{ day > firstDay ? day - firstDay : '' }}
                 
                 </p>
            
            </div>

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

            test(event) {

                let clickedDate = new Date( this.year, this.month, event.target.firstChild.data, ) 

                console.log(clickedDate)

            },

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
        height: auto;

        position: relative;

        display: grid;
        align-items: center;
        align-content: center;

        opacity: 0.8;
    }

    .nav {

        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: var(--white);

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
        color: rgba(255,255,255,0.5);

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: 40px;
        align-items: center;
    }

    .table {

        display: grid;
        grid-template-columns: repeat( 7, minmax( 20px, 1fr ) );
        grid-template-rows: repeat( 6, minmax( 20px, 30px ) );
        grid-row-gap: 10px;
        align-items: center;
    }

    .date-wrap {

        width: 100%;
        height: 100%;

        position: relative;

        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .date {

        font-size: 12px;
        font-weight: 400;
        color: rgba( 255,255,255,0.3 );
        text-align: center;

        width: 20px;
        height: 20px;

        display: grid;
        align-items: center;

        border-radius: 3px;

        cursor: default;
        pointer-events: none;
    }

    .date-wrap:hover .date-hover {

        width: 28px;
        height: 28px;

        background-color: rgba( 255,255,255,0.1 );

        cursor: pointer;
        pointer-events: all;
    }
    
    .today {

        color: white;

        width: 28px;
        height: 28px;
    }

    .material-icons {

        text-align: center;
    }

    .next-year {

        font-size: 18px;
        color: rgba(255,255,255,0.5);
    }

</style>


