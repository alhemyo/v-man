<template>

    <div class="timeline-wrap" >
    
        <div class="timeline-card card" >

            <p class="head-text">Timeline</p>

        </div>

        <div v-dragscroll.x="true" class="timeline" >

            <div class="timeline-nav" >

                <div 

                    class="year"
                    v-for="year in timeline"
                    :key="year.name"
                
                >

                    <div 
                
                        class="month"
                        :style="{ gridTemplateColumns: 'repeat( ' + month.days.length + ', 4px )' }"
                        v-for="(month, index) in year.months"
                        :key="index"
                    
                    >

                        <p 
                        
                            class="default-text"
                            :style="{ gridColumn: '1 / ' + ( month.days.length + 1 ) }"
                            
                        >

                            {{ month.name + ' ' + year.name }}
                         
                        </p>

                        <div 
                    
                            class="day"
                            v-for="(day, index) in month.days"
                            :key="index"
                            :id=" day.id + '-' + month.id + '-' + year.name "
                            ref="days"
                        
                        >

                            <div class="day-marker" ></div>

                        </div> <!-- end .day -->

                    </div> <!-- end .month -->

                </div> <!-- end .year -->

            </div>

            <div v-dragscroll.y="true" class="timeline-canvas" >


                <div 
                
                    class="project"
                    v-for="project in priorityProjects"
                    :key="project.id"
                    :id="project.id"
                
                >

                    <div 
                        
                        class="priority"
                        :class="{
                            mid: project.priority === 2,
                            high: project.priority === 3
                        }" 
                        
                    ></div>

                    <p class="default-text" >{{ project.name }}</p>

                    <div class="project-button" >

                        <i class="fas fa-angle-right" />

                    </div>

                </div> <!-- end .project -->

            </div> <!-- end .timeline-canvas -->

        </div>
    
    </div>    

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
        constructor( id, name ) {
            this.id = id
            this.name = name
        }
    }

    export default {

        name: 'timeline',

        data() {
            return {

                timeline: [],

                monthNames: [ 

                    'January', 
                    'February', 
                    'March', 
                    'April', 
                    'May', 
                    'June', 
                    'July', 
                    'August', 
                    'September', 
                    'October', 
                    'November', 
                    'December' 

                ],

                dayNames: [ 
                    
                    'Sunday', 
                    'Monday', 
                    'Tuesday', 
                    'Wednesday', 
                    'Thursday', 
                    'Friday', 
                    'Saturday'

                ],

                projects: [

                    {
                        id: 1,
                        name: 'Project 01',
                        priority: 3,
                        date_created: new Date( 2017, 0, 1 ),
                        deadline: new Date( 2017, 0, 31 )
                    },
                    {
                        id: 2,
                        name: 'Project 02',
                        priority: 2,
                        date_created: new Date( 2018, 3, 6 ),
                        deadline: new Date( 2018, 4, 15 )
                    },
                    {
                        id: 3,
                        name: 'Project 03',
                        priority: 1,
                        date_created: new Date( 2018, 2, 12 ),
                        deadline: new Date( 2018, 3, 10 )
                    },
                    {
                        id: 4,
                        name: 'Project 04',
                        priority: 2,
                        date_created: new Date( 2018, 11, 16 ),
                        deadline: new Date( 2019, 1, 3 )
                    },
                    {
                        id: 5,
                        name: 'Project 05',
                        priority: 3,
                        date_created: new Date( 2017, 0, 5 ),
                        deadline: new Date( 2017, 1, 15 )
                    },
                    {
                        id: 6,
                        name: 'Project 06',
                        priority: 2,
                        date_created: new Date( 2017, 1, 16 ),
                        deadline: new Date( 2017, 1, 31 )
                    },
                    {
                        id: 7,
                        name: 'Project 07',
                        priority: 1,
                        date_created: new Date( 2017, 3, 22 ),
                        deadline: new Date( 2017, 4, 20 )
                    },
                    {
                        id: 8,
                        name: 'Project 08',
                        priority: 2,
                        date_created: new Date( 2017, 5, 16 ),
                        deadline: new Date( 2017, 6, 20 )
                    },
                    {
                        id: 9,
                        name: 'Project 09',
                        priority: 3,
                        date_created: new Date( 2018, 10, 15 ),
                        deadline: new Date( 2019, 0, 5 )
                    },
                    {
                        id: 10,
                        name: 'Project 10',
                        priority: 2,
                        date_created: new Date( 2018, 6, 12 ),
                        deadline: new Date( 2018, 7, 10 )
                    },
                    {
                        id: 11,
                        name: 'Project 11',
                        priority: 2,
                        date_created: new Date( 2018, 8, 2 ),
                        deadline: new Date( 2018, 10, 22 )
                    },
                    {
                        id: 12,
                        name: 'Project 12',
                        priority: 3,
                        date_created: new Date( 2018, 6, 12 ),
                        deadline: new Date( 2018, 7, 10 )
                    },
                    {
                        id: 13,
                        name: 'Project 13',
                        priority: 1,
                        date_created: new Date( 2019, 1, 24 ),
                        deadline: new Date( 2019, 2, 18 )
                    },
                    {
                        id: 14,
                        name: 'Project 14',
                        priority: 2,
                        date_created: new Date( 2019, 3, 2 ),
                        deadline: new Date( 2019, 5, 22 )
                    },
                    {
                        id: 15,
                        name: 'Project 15',
                        priority: 3,
                        date_created: new Date( 2017, 9, 2 ),
                        deadline: new Date( 2017, 10, 24 )
                    },
                    {
                        id: 16,
                        name: 'Project 16',
                        priority: 2,
                        date_created: new Date( 2017, 8, 22 ),
                        deadline: new Date( 2017, 9, 30 )
                    },

                ],

                events: [

                    {
                        id: 1,
                        name: 'Event 01',
                        date_created: new Date( 2017, 10, 22 ),
                        date: new Date( 2017, 10, 22, 13, 30 ),
                        deadline: new Date( 2017, 10, 22, 15, 30 ),
                    },
                    {
                        id: 2,
                        name: 'Event 02',
                        date_created: new Date( 2017, 7, 12 ),
                        date: new Date( 2017, 7, 12, 10 ),
                        deadline: new Date( 2017, 7, 12, 12, 30 ),
                    },
                    {
                        id: 3,
                        name: 'Event 03',
                        date_created: new Date( 2018, 1, 14 ),
                        date: new Date( 2018, 1, 14, 9, 30 ),
                        deadline: new Date( 2018, 1, 14, 10 ),
                    }

                ]

            }
        },

        computed: {

            sortedProjects() { return orderBy( this.projects, [ 'date_created', 'priority' ],[ 'asc', 'asc' ] ) },
            priorityProjects() { return orderBy( this.sortedProjects, [ 'priority' ], [ 'desc' ] ) }

        },

        watch: {

            sortedProjects: {
                deep: true,
                immediate: true,
                handler() {

                    let projects = this.sortedProjects
                    let projectsAmount = projects.length
                    let firstYear = projects[0].date_created.getFullYear()
                    let lastYear = projects[ projectsAmount - 1 ].deadline.getFullYear()
                    let range = lastYear - firstYear

                    for( let year = 0; year <= range; year ++ ) { // --------------------------------------------------------------------------- Iterate trough the years in range

                        let months = [] // ----------------------------------------------------------------------------------------------------- Empty Array to collect the months

                        for( let month = 1; month <= 12; month ++ ) { // ----------------------------------------------------------------------- Iterate trough the months in a year

                            let days = [] // --------------------------------------------------------------------------------------------------- Empty Array to collect the days
                            let daysInMonth = 32 - new Date( firstYear, month - 1, 32 ).getDate() // ------------------------------------------- Get the right number of days in month

                            for( let day = 1; day <= daysInMonth; day ++ ) { // ---------------------------------------------------------------- Iterate trough the days in a month

                                days.push( new Day( day, this.dayNames[ new Date( firstYear, month - 1, day ).getDay() ] ) ) // ---------------- Create new Day object

                            }

                            months.push( new Month( month, this.monthNames[ month - 1 ], days ) ) // ------------------------------------------- Create new Month Object

                        }

                        this.timeline.push( new Year( firstYear, months ) ) // ----------------------------------------------------------------- Create new Year Object

                        firstYear ++ // -------------------------------------------------------------------------------------------------------- Increment the first year

                    }

                }
            }

        },

        methods: {

            alignProjects() {
                for( let project in this.sortedProjects ) { // -------------------------------------------------- Iterate trough the projects
                    
                    let created = document.getElementById( // --------------------------------------------------|
                        this.sortedProjects[project].date_created.getDate() + '-' + // -------------------------|
                        ( this.sortedProjects[project].date_created.getMonth() + 1 ) + '-' + // ----------------| Find Element with date_created ID
                        this.sortedProjects[project].date_created.getFullYear() // -----------------------------|
                    ) // ---------------------------------------------------------------------------------------|

                    let deadline = document.getElementById( // -------------------------------------------------|
                        this.sortedProjects[project].deadline.getDate() + '-' + // -----------------------------|
                        ( this.sortedProjects[project].deadline.getMonth() + 1 ) + '-' + // --------------------| Find Element with deadline ID
                        this.sortedProjects[project].deadline.getFullYear() // ---------------------------------|
                    ) // ---------------------------------------------------------------------------------------|

                    let projectWidth = ( deadline.offsetLeft + 4 ) - created.offsetLeft // ---------------------- Find distance between created and deadline Element

                    let findProject = document.getElementById( this.sortedProjects[project].id ) // ------------- Find Element with current project ID

                    created.firstChild.style.backgroundColor = 'white' // --------------------------------------- Asign color to days matching date_created

                    created.title = // -------------------------------------------------------------------------|
                    this.sortedProjects[project].name + ' / created - ' + // -----------------------------------| Add title to day created
                    moment(this.sortedProjects[project].date_created).format('DD MMM YYYY') // -----------------|

                    deadline.title = // ------------------------------------------------------------------------|
                    this.sortedProjects[project].name + ' / deadline - ' + // ----------------------------------| Add title to deadline day
                    moment(this.sortedProjects[project].deadline).format('DD MMM YYYY') // ---------------------|

                    deadline.firstChild.style.backgroundColor =        //
                    this.sortedProjects[project].priority === 3 ?      //  
                    'var(--blue)' :                                    // --------------------------------------- Assign color to days matching deadline
                    this.sortedProjects[project].priority === 2 ?      //
                    'var(--lightblue)' : 'var(--icon)'                 //

                    findProject.style.marginLeft = created.offsetLeft + 'px' // --------------------------------- Set position to ^
                    findProject.style.width = projectWidth + 'px' // -------------------------------------------- Set width to ^

                }
            }

        },

        mounted() {
            this.alignProjects()
        },

        beforeUpdate() {
            this.alignProjects()
        }

    }

</script>

<style>

    .timeline-wrap {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 160px auto;
        grid-row-gap: 4px;
    }

    .timeline-card {
        padding: 0px 20px;
        display: grid;
        align-items: center;
        background-color: var(--content);
        border-radius: 3px;
    }

    .timeline {
        width: calc( 100vw - 292px );
        height: calc( 100vh - 256px );
        position: relative;
        display: grid;
        grid-template-rows: 60px calc( 100vh - 320px );
        grid-row-gap: 4px;
        overflow: hidden;
    }

    .timeline-nav {
        padding: 0px 4px;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        grid-column-gap: 10px;
        background-color: var(--content);
        border-radius: 3px;
    }

    .year {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        grid-column-gap: 10px;
    }

    .month {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 4px;
        grid-template-rows: 30px 30px;
        grid-column-gap: 3px;
    }

    .month p {
        text-align: center;
        padding: 10px;
    }

    .day {
        grid-row: 2/3;
        display: grid;
    }

    .day-marker {
        background-color: var(--background);
    }

    .timeline-canvas {
        width: auto;
        height: calc( 100vh - 320px );
        padding: 4px 0px;
        display: grid;
        grid-auto-rows: min-content;
        grid-row-gap: 4px;
        background: url( "/images/assets/grid-02.png" );
        border-radius: 3px;
        overflow: hidden;
    }

    .timeline-canvas:hover {

        cursor: all-scroll;
    }

    .project {

        width: 200px;
        height: 40px;
        display: grid;
        grid-template-columns: 20px auto 20px;
        grid-template-rows: 40px;
        align-items: center;
        background-color: var(--content);
        border-radius: 3px;
        cursor: pointer;
        overflow: hidden;
    }

    .priority {
        width: 4px;
        height: 14px;
        justify-self: center;
        background-color: var(--icon);
        border-radius: 3px;
    }

    .mid { background-color: var(--lightblue); }

    .high { background-color: var(--blue); }

    .project-button {
        height: 40px;
        display: grid;
        align-items: center;
        background-color: rgba( 0,0,0,0.1 );
    }

    .project-button i {
        font-size: 14px;
    }

</style>
