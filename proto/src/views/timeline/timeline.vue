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
                dayGap: 2,
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
                    height: '15px',
                    alignSelf: 'flex-end',
                    justifySelf: 'center',
                    display: 'grid',
                    alignItems: 'center',
                    borderRadius: '3px 3px 0px 0px'
                }
            },

            monthStyle() {
                return {
                    width: 'auto',
                    height: '60px',
                    display: 'grid',
                    gridAutoColumns: this.dayWidth + 16 + 'px',
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

        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX( -50% );
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
