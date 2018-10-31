<template>
    
    <div v-dragscroll="true" class="timeline-wrap">

        <div class="timeline">

            <div v-bind:style="monthStyle" :key="index" v-for="( month, index ) in timeline" >

                <p>{{ month.name }}</p>

                <div 
                
                    :style="dayStyle" 
                    :title="new Date( year, month.id - 1, day )" 
                    :key="index" 
                    v-for="( day, index ) in month.days">
                    
                    <p>{{ day }}</p>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

    //import moment from 'moment'

    export default {

        name: 'timeline',

        data() {
            return {

                today: new Date(),
                day: new Date().getDate(),
                month: 0,
                currentMonth: new Date().getMonth(),
                year: new Date().getFullYear(),

                // Timeline
                timeline: {

                    january: {
                        id: 1,
                        name: 'January',
                        days: []
                    },

                    february: {
                        id: 2,
                        name: 'February',
                        days: []
                    },

                    march: {
                        id: 3,
                        name: 'March',
                        days: []
                    },

                    april: {
                        id: 4,
                        name: 'April',
                        days: []
                    },

                    may: {
                        id: 5,
                        name: 'May',
                        days: []
                    },

                    june: {
                        id: 6,
                        name: 'June',
                        days: []
                    },

                    july: {
                        id: 7,
                        name: 'July',
                        days: []
                    },

                    august: {
                        id: 8,
                        name: 'August',
                        days: []
                    },

                    september: {
                        id: 9,
                        name: 'September',
                        days: []
                    },

                    october: {
                        id: 10,
                        name: 'October',
                        days: []
                    },

                    november: {
                        id: 11,
                        name: 'November',
                        days: []
                    },

                    december: {
                        id: 12,
                        name: 'December',
                        days: []
                    }

                },

                // Day Style Config
                dayWidth: 4,
                dayGap: 4,
            }
        },

        computed: {

            daysInMonth() { return 32 - new Date( this.year, this.month, 32 ).getDate() },

            dayStyle() {
                return {
                    width: this.dayWidth + 'px',
                    height: '30px',
                    backgroundColor: 'var(--menu)',
                    alignSelf: 'flex-end',
                    justifySelf: 'center',
                    display: 'grid',
                    alignItems: 'center'
                }
            },

            monthStyle() {
                return {
                    width: 'auto',
                    height: '40px',
                    backgroundColor: 'var(--background)',
                    display: 'grid',
                    gridAutoColumns: this.dayWidth + 16 + 'px',
                    gridAutoFlow: 'column',
                    gridTemplateRows: '40px',
                    gridColumnGap: this.dayGap + 'px'
                }
            },

            myProjects: { get() { return this.$store.state.myProjects.myProjects } }

        },

        created() {

            let month = 0
            let days

            for ( let item in this.timeline ) {

                days = 32 - new Date( this.year, month, 32 ).getDate()

                for ( let day = 0; day < days; day ++ ) {

                    this.timeline[item].days.push( day + 1 )
                }

                month ++
            }

        }

    }

</script>

<style>

    .timeline-wrap {

        width: 600px;

        overflow: hidden;
    }

    .timeline {

        display: grid;
        grid-template-columns: repeat( 12, min-content );
        grid-column-gap: 4px;
    }

    .timeline > div {

        position: relative;
    }

    .timeline > div > div {

        position: relative;
    }

    .timeline p {

        font-size: 12px;
        color: var(--defaultText);

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50% );
    }

</style>
