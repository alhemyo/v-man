<template>
    
    <div class="timeline-wrap">

        <div class="timeline-card card"></div>

        <div v-dragscroll class="timeline">

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

                        <div class="marker"></div>

                        <div class="projects">

                            <div class="project"
                            
                                v-if="  project.date_created.getDate() === day.id && 
                                        project.date_created.getMonth() === month.id - 1 &&
                                        project.date_created.getFullYear() === year.name"

                                :style="{ top: 44 * index + 'px' }"

                                v-for="(project, index) in sortedProjects"
                                :key="index"
                                :id="project.id"
                            
                            >

                                <div class="priority" :class="{ mid: project.priority === 2, high: project.priority === 3 }" ></div>
                            
                                <p class="default-text" >{{ project.name }}</p>
                            
                            </div>

                        </div>
                    
                    </div>
                
                </div>
            
            </div>

        </div>

    </div>

</template>

<script>

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

                temp: document,

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
                        date_created: new Date( 2017, 0, 1 ),
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
                    }

                ]

            }
        },

        computed: {

            sortedProjects() { return orderBy( this.projects, ['date_created'],['asc'] ) }

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

            setWidth() {
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

                    findProject.style.width = projectWidth + 'px' // -------------------------------------------- Set width to ^

                }
            }

        },

        mounted() {
            this.setWidth()
        }

    }

</script>

<style>

    .timeline-wrap {
        display: grid;
        grid-template-rows: 160px calc( 100vh - 256px );
        grid-row-gap: 4px;
    }

    .timeline {
        width: calc( 100vw - 288px );
        display: grid;
        grid-auto-columns: min-content;
        grid-auto-flow: column;
        grid-column-gap: 4px;
        overflow: hidden;
        background: url('/images/assets/grid-01.png');
    }

    .year {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        grid-column-gap: 4px;
    }

    .month {
        display: grid;
        grid-template-rows: 30px auto;
        grid-column-gap: 3px;
    }

    .month p {
        text-align: center;
        align-self: center;
        padding: 10px;
        background-color: var(--background);
    }

    .day {

        width: 4px;

        display: grid;
        grid-template-rows: 30px auto;
        grid-row-gap: 4px;
    }

    .marker {

        background-color: var(--content);
    }

    .projects {

        display: grid;

        position: relative;
    }

    .project {

        width: 200px;
        height: 40px;

        position: absolute;

        display: grid;
        grid-template-columns: 20px auto;
        align-items: center;

        background-color: var(--content);
        border-radius: 3px;
    }

    .project p {

        text-align: left;
        background-color: transparent;
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

</style>
