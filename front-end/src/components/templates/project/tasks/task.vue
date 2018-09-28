<template>
    
    <div class="task" :class="{ 'task-open' : active }" >

        <div class="task-header">

            <div class="task-priority">

                <div class="priority" :class="{ mid : priority === 'mid', high : priority === 'high' }" ></div>

            </div>

            <p class="task-name" @click="openTask" >{{ name }} <i class="material-icons">{{ active ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</i></p>

            <p>{{ state }}</p>

            <div></div>

            <p class="task-deadline"><span>●</span> {{ formatDeadline }}</p>

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

                    <p class="task-date"><span>⯈ </span>{{ createdDate }} | <span>⯆ </span>{{ downloadedDate }} | <span>⯇ </span>{{ finishedDate }} | <span>⯅ </span>{{ uploadedDate }}</p>

                    <div class="description">

                        <p>{{ description }}</p>

                    </div>

                </div>

                <div class="task-thumbnail">

                    <img :src="`/images/uploads/task/thumb_0${random}.jpg`" />    
                    
                </div>    
                
            </div>

            <div class="task-notes">

                <div class="notes-list">

                    <note 

                    :key="index" 
                    v-for="(note, index) in notes"
                    :user="note.user"
                    :client="note.client"
                    :date="note.date"
                    :message="note.message"
                    :visible="active"
                    
                    />

                </div>
                
            </div> 
            
        </div> <!-- end .task-body -->

        <div class="task-footer">

            <input type="text" @focus="setNote" placeholder="Add note..." v-model="note" />

            <p class="client" @click="client = !client" :class="{ 'client-on' : client }" >{{ project.client }}</p>

            <i class="material-icons" @click="addNote" >notes</i>

        </div>

    </div>

</template>

<script>

    import moment from 'moment'
    import note from './note'

    export default {
    
        name: 'task',

        components: { note },

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

            random() { return Math.floor(Math.random() * (6 - 1)) + 1 },

            // TASK
            formatDeadline() { return moment(this.deadline).format("DD MMM YYYY") },
            createdDate() { return moment(this.created).format('DD MMM YYYY') },
            downloadedDate() { return this.downloaded ?  moment(this.downloaded).format('DD MMM YYYY') : 'pending' },
            finishedDate() { return this.finished ?  moment(this.finished).format('DD MMM YYYY') : 'pending' },
            uploadedDate() { return this.uploaded ?  moment(this.uploaded).format('DD MMM YYYY') : 'pending' },

            //ADD NOTE

            project() {

                return this.$store.state.thisUserProjects.projects.find((project) => {

                    return project.id === Number( this.$route.params.id )

                }) || {}

            },

            note: {

                get() { return this.$store.state.addNote.note },
                set(value) { this.$store.commit('updateAddNoteNote', value) }

            },

            client: {

                get() { return this.$store.state.addNote.client },
                set(client) { this.$store.commit( 'updateAddNoteClient', client ) }

            },

            // NOTE

            notes: { get() { return this.$store.state.notes.notes.Notes } }

        },

        methods: {

            openTask() {

                this.$emit('active', this.active ? false : this.id )

            },

            setNote() {

                this.$store.commit( 'updateAddNoteTaskId', this.id )

            },

            addNote() {

                this.$store.dispatch( 'ADD_NOTE' )

                .then(() => { this.$store.commit( 'resetAddNoteState' ) })

            }

        },

        watch: {

            active() {

                this.$store.commit( 'resetAddNoteState' )

                this.active ? this.$store.dispatch( 'GET_NOTES', { id: this.id } ) : null

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

        box-shadow: 0px 0px 50px rgba( 0, 0, 0, 0.2 );
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

        display: grid;
        grid-template-columns: auto 20px;
        align-items: center;

        cursor: pointer;
    }

    .task-name i {

        font-size: 16px;
        text-align: center;
        color: rgba( 0, 0, 0, 0.5 );

        transition: 0.2s ease;

        opacity: 0;
    }

    .task-name:hover i {

        opacity: 1;
    }

    .task-open i {

        opacity: 1;
    }

    .task-deadline span {

        color: var(--red);
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
        
        padding-bottom: 20px;

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
        height: 100px;

        overflow: hidden;
        overflow-y: scroll;
    }

    .task-date {

        font-family: var(--mono-font);
        font-size: 10px;
    }

    .task-date span:nth-child(1) {

        color: darkcyan;
    }

    .task-date span:nth-child(2) {

        color: var(--yellow);
    }

    .task-date span:nth-child(3) {

        color: var(--green);
    }

    .task-thumbnail {

        position: relative;

        background-color: black;
        border-radius: 3px;

        overflow: hidden;
    }

    .task-thumbnail img {

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );
    }

    /* TASK NOTES */

    .task-notes {

        width: 100%;
        height: 150px;

        position: relative;

        overflow: hidden;
    }

    .notes-list {

        width: calc( 100% + 17px );
        height: 150px;

        display: grid;
        grid-template-columns: auto;
        grid-auto-rows: auto;

        overflow-y: scroll;
    }

    /* TASK FOOTER CSS */

    .task-footer {

        text-align: center;

        display: grid;
        grid-template-columns: auto min-content 40px;
        align-items: center;

        border-top: 1px solid rgba( 0, 0, 0, 0.05 );
    }

    .client {

        font-size: 10px;

        padding: 7px 7px;

        border-radius: 3px;

        cursor: pointer;
    }

    .client:hover {

        background-color: rgba( 0, 0, 0, 0.05 );
    }

    .client-on {

        color: white;

        background-color: var(--red);
    }

    .client-on:hover {

        color: white;

        background-color: var(--red);
    }

    .task-footer input {

        font-size: 12px;

        padding: 10px 20px;

        border: none;


    }

    .task-footer i {

        font-size: 18px;
        color: rgba( 0, 0, 0, 0.5 );

        cursor: pointer;
    }
    

</style>


