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

        <div class="task-body" >
            
            <div class="description">

                <p>{{ description }}</p>

            </div>

            <div class="task-thumbnail">

                <img :src="`/images/uploads/task/thumb_0${random}.jpg`" />

            </div>

            <div class="notes">

                <div class="notes-list">

                    <transition-group name="list">

                        <note 

                        v-for="(note, index) in notes"
                        :key="index" 
                        :user="note.user"
                        :client="note.client"
                        :clientName="project.client"
                        :date="note.date"
                        :message="note.message"
                        :visible="active"
                        
                        />

                    </transition-group>

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

            notes: { get() { return this.$store.state.notes.notes } }

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

                this.active ? this.$store.dispatch( 'GET_NOTES', { id: this.id } ) : this.$store.commit( 'resetNotesState' )

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

        border-bottom: 1px solid rgba( 0, 0, 0, 0.1 );
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

        display: grid;
        grid-template-columns: 350px auto;
        grid-template-rows: max-content auto;

        background-color: white;
    }

    /* TASK DESCRIPTION */

    .description {

        height: auto;
        max-height: 160px;

        padding: 20px 0px;

        overflow: hidden;
    }

    .description p {

        font-size: 12px;
        line-height: 1.5;
        color: rgba( 0, 0, 0, 0.5 );

        width: calc( 100% + 17px );
        height: auto;
        max-height: 120px;

        padding: 0px 20px;

        overflow-y: scroll;

        
    }

    .task-thumbnail {

        position: relative;

        background-color: black;
    }

    .task-thumbnail img {

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );
    }

    @media screen and ( min-width: 1700px ) {
        
        .task-body {

            grid-template-columns: 350px auto minmax( auto, 400px );
            grid-template-rows: 1fr;
        }

        .description {

            max-height: 320px;
        }

        .description p {

            max-height: 320px;
        }
        
    }

    /* TASK NOTES */

    .notes {

        height: 320px;

        grid-column: 2/3;
        grid-row: 1/3;

        background-color: var(--white);

        overflow: hidden;
    }

    .notes-list {

        width: calc( 100% + 17px );
        height: 320px;

        overflow-y: scroll;
    }

    /* TASK FOOTER CSS */

    .task-footer {

        text-align: center;

        display: grid;
        grid-template-columns: auto min-content 40px;
        align-items: center;

        z-index: 1;

        border-top: 1px solid rgba( 0, 0, 0, 0.1 );
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


