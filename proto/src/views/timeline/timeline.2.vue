<template>
    
    <template-view>

        <div slot="card" class="card timeline-card" >

            <p @click="test" class="head-text">Timeline</p>

        </div>

        <div slot="nav" v-dragscroll class="nav timeline-nav">

            <div
            
                class='year'
                :style="yearStyle"
                :id='year.name'
                :key='year.name'
                v-for='year in timeline'
            
            >

                <div
                
                    class="month"
                    :style="monthStyle"
                    :key='month.id'
                    :id="month.id"
                    v-for='month in year.months'
                
                >

                    <p 

                        class="default-text"
                        :style="{ gridColumn: '1 /' + month.days.length }"

                    > 
                    
                        {{ month.name + ' ' + year.name }} 
                        
                    </p>

                    <div
                    
                        class="day"
                        :class="{ 
                            hasProject: day.projects[0],
                            today: day.id === currentDay && month.id - 1 === currentMonth && year.name === currentYear
                        }"
                        :style="dayStyle"
                        :key="index"
                        :id="month.id + 'd' + day.id + 'y' + year.name"
                        v-for="(day, index) in month.days"
                        ref="days"
                
                    >
                    
                    </div>

                </div>

            </div>

        </div>

        <div slot="content" v-dragscroll class="timeline">

            <div
            
                class="timeline-project"
                :key="project.id"
                :style="{
                    marginLeft: '25px'
                }"
                v-for="project in sortedProjects"

            >

                <p class="default-text">{{ project.name }}</p>

            </div>

        </div>

    </template-view>

</template>

<script>

    import moment from 'moment'
    import { orderBy } from 'lodash'

    class Year {
        constructor( name, months ) {
            this.name = name
            this.months = months
        }
    }

    class Month {
        constructor( id, name, days ) {
            this.id = id
            this.name = name
            this.days = days
        }
    }

    class Day {
        constructor( id, name, projects ) {
            this.id = id
            this.name = name
            this.projects = projects
        }
    }

    export default {

        name: 'timeline',

        components: {
            templateView: () => import('../../components/templates/viewTemplate.vue')
        },

        data() {
            return {

                temp: document,

                timeline: [],

                currentDay: new Date().getDate(),
                currentMonth: new Date().getMonth(),
                currentYear: new Date().getFullYear(),

                months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
                days: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],

                projects: [

                    {
                        id: 1,
                        name: 'Project 01',
                        prioirity: 3,
                        date_created: new Date( 2017, 0, 1 ),
                        deadline: new Date( 2018, 9, 6 )
                    },
                    {
                        id: 2,
                        name: 'Project 02',
                        prioirity: 2,
                        date_created: new Date( 2018, 3, 6 ),
                        deadline: new Date( 2018, 3, 28 )
                    },
                    {
                        id: 3,
                        name: 'Project 03',
                        prioirity: 1,
                        date_created: new Date( 2018, 2, 12 ),
                        deadline: new Date( 2018, 3, 10 )
                    },
                    {
                        id: 4,
                        name: 'Project 04',
                        prioirity: 2,
                        date_created: new Date( 2018, 11, 16 ),
                        deadline: new Date( 2019, 1, 3 )
                    },
                    {
                        id: 5,
                        name: 'Project 05',
                        prioirity: 3,
                        date_created: new Date( 2017, 0, 1 ),
                        deadline: new Date( 2018, 9, 6 )
                    }

                ],

                dayWidth: 4,
                dayGap: 2

            }
        },

        computed: {

            yearStyle() {
                return {
                    display: 'grid',
                    gridAutoColumns: 'max-content',
                    gridColumnGap: 4 + 'px',
                    gridTemplateRows: '60px',
                    gridAutoFlow: 'column'
                }
            },

            monthStyle() {
                return {
                    display: 'grid',
                    gridAutoColumns: this.dayWidth + 'px',
                    gridTemplateRows: '30px 30px',
                    gridColumnGap: this.dayGap + 'px',
                    gridAutoFlow: 'column'
                }
            },

            dayStyle() {
                return {
                    height: '30px',
                    gridRow: '2/3'
                }
            },

            sortedProjects() { return orderBy( this.projects, 'date_created' ) }

        },

        watch: {

            sortedProjects: {
                immediate: true,
                handler: function() {

                    let projects = this.sortedProjects
                    let amount = projects.length
                    let firstYear = projects[0].date_created.getFullYear()
                    let lastYear = projects[ amount - 1 ].deadline.getFullYear()
                    let range = lastYear - firstYear
                    let days = 0

                    for( let year = 0; year <= range; year ++ ) { //---------------------------------------------------------------------------- Create new Year in timeline for every year in range
                        
                        let newYear = [] // ---------------------------------------------------------------------------------------------------- Empty array for the new Year

                        for( let i = 1; i <= 12; i ++ ) { // ----------------------------------------------------------------------------------- Create 12 new Months in the new Year
                        
                            days = 32 - new Date( firstYear, i - 1, 32 ).getDate() //----------------------------------------------------------- Find the exact number of days in each month

                            let daysCollection = [] // ----------------------------------------------------------------------------------------- Empty array to collect new Days

                            for( let day = 1; day <= days; day ++ ) {

                                let dayProjects = [] // ---------------------------------------------------------------------------------------- Empty array to collect this day projects ids

                                let findProjects = projects.filter( project => // -------------------------------------------------------------|
                                    moment(project.date_created).format("DD MM YYYY") === // --------------------------------------------------| Find projects that are created on this day
                                    moment( new Date( firstYear, i - 1, day ) ).format("DD MM YYYY") ) // -------------------------------------|

                                if( findProjects.length > 0 ) {
                                    for( let item in findProjects ) {
                                        dayProjects.push( findProjects[item].id ) // ----------------------------------------------------------- Collect this day projects ids
                                    }
                                }

                                daysCollection.push( new Day( day, this.days[ new Date( firstYear, i - 1, day ).getDay() ], dayProjects ) ) //-- Create new Day

                            }

                            let newMonth = new Month( i, this.months[ i - 1 ], daysCollection ) // --------------------------------------------- Create new Month
                            newYear.push(newMonth) // ------------------------------------------------------------------------------------------ Push the new Month in the Year object

                        }

                        this.timeline.push( new Year( firstYear, newYear ) ) // ---------------------------------------------------------------- Add the new Year to the timeline

                        firstYear ++

                    }
                    
                }
            },

        },

        methods: {
            test() {
                console.log(this.$refs.days)
            }
        }

    }

</script>

<style>

    .timeline-card {
        padding: 0px 20px;
        display: grid;
        align-items: center;
    }

    .timeline-nav {
        width: calc( 100vw - 288px );
        display: grid;
        grid-auto-columns: min-content;
        grid-template-rows: 60px;
        grid-column-gap: 4px;
        grid-auto-flow: column;
        overflow: hidden;
    }

    /*

    .month:nth-child(even) .day {

        background-color: rgba( 255, 255, 255, 0.08 );
    }

    */

    .month p {
        text-align: center;
        white-space: nowrap;
        grid-row: 1 / 2;
        align-self: center;
        user-select: none;
    }

    .day {
        background-color: var(--background);
    }

    .today {

        background-color: white;
    }

    .hasProject {
        background-color: var(--blue);
    }

    .timeline {
        width: calc( 100vw - 288px );
        display: grid;
        grid-auto-rows: 40px;
        grid-row-gap: 4px;
        overflow: hidden;
    }

    .timeline-project {
        width: 200px;
        height: 40px;
        position: relative;
        padding: 0px 20px;
        display: grid;
        grid-template-columns: 100px auto;
        align-items: center;
        background-color: var(--content);
    }

</style>
