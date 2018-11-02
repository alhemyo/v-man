<template>
    
    <template-view>

        <div slot="card" class="card timeline-card" >

            <p class="head-text">Timeline</p>

        </div>

        <div slot="nav" class="nav timeline-nav">Nav</div>

        <div slot="content" class="timeline">Content</div>

    </template-view>

</template>

<script>

    import { orderBy } from 'lodash'

    export default {

        name: 'timeline',

        components: {
            templateView: () => import('../../components/templates/viewTemplate.vue')
        },

        data() {
            return {

                currentYear: new Date().getFullYear(),

                months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],

                projects: [

                    {
                        name: 'Project 01',
                        prioirity: 3,
                        date_created: new Date( 2017, 11, 2 ),
                        deadline: new Date( 2018, 9, 6 )
                    },
                    {
                        name: 'Project 02',
                        prioirity: 2,
                        date_created: new Date( 2018, 3, 6 ),
                        deadline: new Date( 2018, 3, 28 )
                    },
                    {
                        name: 'Project 03',
                        prioirity: 1,
                        date_created: new Date( 2018, 2, 12 ),
                        deadline: new Date( 2018, 3, 10 )
                    },
                    {
                        name: 'Project 04',
                        prioirity: 2,
                        date_created: new Date( 2018, 11, 16 ),
                        deadline: new Date( 2019, 1, 3 )
                    }

                ]

            }
        },

        computed: {

            sortedProjects() { return orderBy( this.projects, 'date_created' ) }

        },

        watch: {

            sortedProjects: {
                immediate: true,
                handler: function() {

                    let projects = this.sortedProjects
                    let amount = projects.length
                    let range = projects[ amount - 1 ].deadline.getFullYear() - projects[0].date_created.getFullYear() + 1
                    let month = 0
                    let days = 0

                    for( let i = 1; i <= 12; i ++ ) {
                        
                        days = 32 - new Date( this.currentYear, month, 32 ).getDate()

                        month ++

                        console.log( days, range )

                    }

                }
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

</style>
