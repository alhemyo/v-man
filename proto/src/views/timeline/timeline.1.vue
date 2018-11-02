<template>
    
    <div v-dragscroll="true" class="timeline-wrap" id="timeline" :style="timelineStyle">

        <div class="timeline" @dblclick="scrollToToday" >

            <div class="month-wrap" :style="monthStyle" :key="index" v-for="( month, index ) in timeline" >

                <p class="month default-text">{{ month.name + ' ' + year }}</p>

                <div 
                
                    class="day-wrap"
                    :style="dayStyle" 
                    :key="index" 
                    v-for="( day, index ) in month.days"
                    :id="day === currentDay && month.id === currentMonth + 1 && year === currentYear ? 'today' : false"
                
                >
                    
                    <p class="day default-text">{{ day }}</p>

                </div>

            </div>

        </div>

        <p class="test">{{ timelineX }}</p>

    </div>

</template>

<script>

    export default {

        name: 'timeline',

        data() {
            return {

                windowWidth: 0,
                timelineX: 0,
                todayPosition: 0,

                today: new Date(),
                currentDay: new Date().getDate(),
                month: 0,
                currentMonth: new Date().getMonth(),
                year: new Date().getFullYear(),
                currentYear: new Date().getFullYear(),

                // Timeline
                timeline: [

                    {
                        id: 1,
                        name: 'January',
                        days: []
                    },

                    {
                        id: 2,
                        name: 'February',
                        days: []
                    },

                    {
                        id: 3,
                        name: 'March',
                        days: []
                    },

                    {
                        id: 4,
                        name: 'April',
                        days: []
                    },

                    {
                        id: 5,
                        name: 'May',
                        days: []
                    },

                    {
                        id: 6,
                        name: 'June',
                        days: []
                    },

                    {
                        id: 7,
                        name: 'July',
                        days: []
                    },

                    {
                        id: 8,
                        name: 'August',
                        days: []
                    },

                    {
                        id: 9,
                        name: 'September',
                        days: []
                    },

                    {
                        id: 10,
                        name: 'October',
                        days: []
                    },

                    {
                        id: 11,
                        name: 'November',
                        days: []
                    },

                    {
                        id: 12,
                        name: 'December',
                        days: []
                    }

                ],

                // Day Style Config
                dayWidth: 20,
                dayGap: 1,
            }
        },

        computed: {

            timelineStyle() {
                return {
                    width: this.windowWidth - 288 + 'px',
                    height: '100%',
                    overflow: 'hidden',
                    oveflowX: 'scroll'
                }
            },

            dayStyle() {
                return {
                    width: this.dayWidth + 'px',
                    height: '30px',
                    alignSelf: 'flex-end',
                    justifySelf: 'center',
                    display: 'grid',
                    alignItems: 'center',
                }
            },

            monthStyle() {
                return {
                    width: 'auto',
                    height: '60px',
                    display: 'grid',
                    gridAutoColumns: this.dayWidth + 'px',
                    gridAutoFlow: 'column',
                    gridTemplateRows: '60px',
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

        },

        mounted() {

            this.$nextTick(function() {
                window.addEventListener( 'resize', this.getWindowWidth ) // Listen for resize event
                document.getElementById( 'timeline' ).addEventListener( 'scroll', this.getScrollX ) // Listen for scroll on the timeline
                
                // Init
                this.getWindowWidth()
                this.getScrollX()

            })

            setTimeout(() => {
                document.getElementById('timeline').scrollLeft = 
                document.getElementById('today').offsetParent.offsetLeft + 
                document.getElementById('today').offsetLeft
            },10)
        },

        methods: {

            getWindowWidth() {
                this.windowWidth = document.documentElement.clientWidth
            },

            getScrollX() {
                this.timelineX = document.getElementById( 'timeline' ).scrollLeft
            },

            scrollToToday() {
                document.getElementById('timeline').scrollLeft = 
                document.getElementById('today').offsetParent.offsetLeft + 
                document.getElementById('today').offsetLeft
            }

        },

        beforeDestroy() {

            window.removeEventListener( 'resize', this.getWindowWidth ) // Remove the resize event
            document.getElementById( 'timeline' ).removeEventListener( 'scroll', this.getScrollX ) // Remove the Scroll event

        }

    }

</script>

<style>

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

    .month-wrap:nth-child(even) {

        background-color: rgba( 255, 255, 255, 0.03 );
    }

    .month {

        position: absolute;

        top: 8px;
        left: 50%;
        transform: translateX( -50% );
    }

    .day-wrap {

        background-color: var(--menu)
    }

    .day {

        font-size: 10px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50% );
    }

    #today {

        background-color: var(--blue);
    }

    .test {

        position: absolute;
        left: 50%;
        top: 40%;
    }

</style>
