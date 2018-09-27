<template>
    
    <div class="task" :class="{ 'task-open' : active }" >

        <div class="task-header">

            <div class="task-priority">

                <div class="priority" :class="{ mid : priority === 'mid', high : priority === 'high' }" ></div>

            </div>

            <p class="task-name" @click="openTask" >{{ name }}</p>

            <p>{{ state }}</p>

            <div></div>

            <p>{{ formatDeadline }}</p>

            <p>{{ '5 Users' }}</p>

            <div class="task-tools">

                <i class="material-icons" title="Assign user" >person_add</i>

                <i class="material-icons" title="Edit Task" >edit</i>

                <i class="material-icons" title="Delete Task" >delete</i>

            </div>

        </div> <!-- end .task-header -->

        <div class="task-body">
            
            <div class="task-info">

                <div class="task-description">

                    <p class="task-date">{{ createdDate + ' | ' + downloadedDate + ' | ' + finishedDate + ' | ' + uploadedDate }}</p>

                    <div class="description">

                        <p>{{ description }}</p>

                    </div>

                </div>

                <div class="task-thumbnail"></div>    
                
            </div>    
            
        </div> <!-- end .task-body -->

        <div class="task-footer"></div>

    </div>

</template>

<script>

    import moment from 'moment'

    export default {
    
        name: 'task',

        props: {

            name: String,
            state: String,
            id: Number,
            description: String,
            priority: String,
            created: String,
            downloaded: String,
            deadline: String,
            finished: String,
            uploaded:String,
            active: Boolean

        },

        computed: {

            formatDeadline() { return moment(this.deadline).format("DD MMM YYYY") },
            createdDate() { return moment(this.created).format('DD MMM YYYY') },
            downloadedDate() { return this.downloaded ?  moment(this.downloaded).format('DD MMM YYYY') : 'pending' },
            finishedDate() { return this.finished ?  moment(this.finished).format('DD MMM YYYY') : 'pending' },
            uploadedDate() { return this.uploaded ?  moment(this.uploaded).format('DD MMM YYYY') : 'pending' },

        },

        methods: {

            openTask(event) {

                //$('.task').not( $(event.currentTarget).parent().parent() ).removeClass('task-open')
                //$(event.currentTarget).parent().parent().toggleClass('task-open')

                this.$emit('active', this.active ? false : this.id)

            }

        }

    }

</script>

<style scoped>

    .task {

        width: 100%;
        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 40px auto 40px;

        transition: 0.3s ease;

        background-color: white;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        border-radius: 0px;

        overflow: hidden;
    }

    .task-open {

        height: 400px;

        z-index: 1;

        border-radius: 0px;

        box-shadow: 0px 0px 10px rgba( 0, 0, 0, 0.3 );
    }

    /* TASK HEADER CSS */

    .task-header {

        font-size: 12px;
        color: var(--dark);
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;

        display: grid;
        grid-template-columns: 20px 200px 100px auto 120px 100px 100px;
        grid-template-rows: 40px;
        align-items: center;

        border-bottom: 1px solid rgba( 0, 0, 0, 0.05 );
    }

    .task-priority {

        width: 20px;
        height: 40px;

        display: grid;
        align-items: center;
        justify-items: center;

        cursor: pointer;
    }

    .priority {

        width: 2px;
        height: 12px;

        background-color: gray;
        border-radius: 5px;
    }

    .mid { background-color: var(--yellow); }

    .high { background-color: var(--red); }

    .task-name {

        text-align: left;

        padding: 14px 0px;

        cursor: pointer;
    }

    .task-tools {

        display: grid;
        grid-template-columns: 19px 19px 19px;
        grid-template-rows: 19px;
        justify-content: center;
        grid-column-gap: 10px;
    }

    .task-tools > i {

        font-size: 19px;
        color: rgba( 0, 0, 0, 0.2 );

        cursor: pointer;
    }

    .task-tools > i:hover {

        color: rgba( 0, 0, 0, 0.5 );
    }

    /* TASK BODY CSS */

    .task-body {

        width: 100%;
        height: 320px;

        position: relative;

        padding: 20px;

        display: grid;
        grid-template-rows: 150px 150px;

        overflow: hidden;
    }

    .task-info { 

        font-size: 12px;
        font-weight: 400;
        line-height: 1.3;

        position: relative;
        
        padding-bottom: 10px;

        display: grid;
        grid-template-columns: auto 220px;
        grid-column-gap: 20px;

        border-bottom: 1px solid rgba( 0, 0, 0, 0.05 );

        overflow: hidden;
    }

    .task-description {

        display: grid;
        grid-template-rows: 20px 110px;
        grid-row-gap: 10px;
        align-items: center;

        overflow: hidden;
    }

    .description {

        width: calc( 100% + 17px );
        height: 110px;

        overflow: hidden;
        overflow-y: scroll;
    }

    .task-date {

        font-family: var(--mono-font);
        font-size: 10px;
    }

    /* TASK FOOTER CSS */

    .task-footer {

        border-top: 1px solid rgba( 0, 0, 0, 0.05 );
    }
    

</style>


