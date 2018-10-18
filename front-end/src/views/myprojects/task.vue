<template>
    
    <div class="task" :class="{ 'open-task' : active }" >

        <div class="header">

            <div class="task-priority" :class="{ mid : priority === 'mid' , high : priority === 'high' }" ></div>

            <p class="task-info task-name">{{ name }}</p>

            <p class="task-info">{{ state }}</p>

            <div></div>

            <p class="task-info"><span>●</span> {{ formatDeadline }}</p>

            <p class="task-info">{{ users.length }} {{ users.length === 1 ? 'user' : 'users' }}</p>

            <i class="fas fa-angle-down open-task-button" :class="{ 'fa-angle-up' : active }" @click="openTask" />

        </div>

        <div class="body">

            <div class="info">

                <div class="description">

                    <p>{{ description }}</p>

                </div>

                <div class="thumbnail">

                    <img :src="`/images/uploads/task/thumb_0${random}.jpg`" />

                </div>

            </div>

            <div class="notes">

                <loader 

                    :condition="notesLoading"
                    message="Fetching notes..."

                />

                <transition name="list">

                    <div v-if="notesEmpty" class="notes-empty">

                        <p>There are no notes for this task.</p>

                    </div>

                </transition>

                <div class="notes-list">

                    <transition-group name="notes">

                        <note 

                        v-if="!notesLoading"
                        :key="note.id" 
                        v-for="note in notes" 
                        :user="note.user"
                        :message="note.message"
                        :client="note.client"
                        :date="note.date"
                        
                        />

                    </transition-group>

                </div>

            </div>

        </div>

        <div class="footer">

            <div class="note-controls">

                <i class="far fa-image" @click="test" />

                <i class="fas fa-file-upload" />

                <p class="client" :class="{ 'client-on' : note.client }" @click="note.client = !note.client" >{{ client }}</p>

            </div>

            <input class="note-input" type="text" placeholder="Add note..." v-model="note.message" />

            <i class="far fa-comment-alt" @click="addNote" />

        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    const defaultNote = () => {
        return {
            client: false,
            message: '',
            user: localStorage.getItem('id')
        }
    }

    const note = defaultNote()

    export default {

        name: 'task',

        props: {

            id: Number,
            priority: String,
            name: String,
            state: String,
            deadline: String,
            created: String,
            users: Array,
            description: String,
            client: String,

            active: Boolean
        
        },

        components: { 
            note: () => import('./note'), 
            loader: () => import('../../components/widgets/loader')
        },

        data() {
            return {
                // notes
                notesLoading: true,
                notesEmpty: false,

                note
            }
        },

        computed: {

            // TASK
            random() { return Math.floor(Math.random() * (6 - 1)) + 1 },
            formatDeadline() { return moment(this.deadline).format("DD MMM YYYY") },

            //NOTES
            notes: { get() { return this.$store.state.notes.notes } }

        },

        methods: {

            openTask() {

                this.$emit( 'active', this.active ? false : this.id )

            },

            addNote() {

                let note = {
                    client: this.note.client,
                    message: this.note.message,
                    user: this.note.user,
                    date: new Date()
                }

                this.$store.dispatch( 'addNote', { note: note, id: this.id } )
                .then(() => {
                    Object.assign(this.note, defaultNote())
                    this.notesEmpty = false
                })
            },

            test() {
                this.$socket.emit( 'login', {'token' : localStorage.getItem('token'), 'socket_id' : this.$socket.id  } )
            }

        },

        watch: {

            active() {
                this.$store.commit( 'resetNotesState' )
                Object.assign( this.note, defaultNote() )
                if ( this.active ) {
                    this.$store.dispatch( 'getNotes', { id: this.id } )
                    .then( () => {
                        this.notesLoading = false
                        this.notes.length > 0 ? this.notesEmpty = false : this.notesEmpty = true
                    })
                }
                else {
                    Object.assign( this.note, defaultNote() )
                }
            }

        }

    }

</script>

<style scoped>

    /* TRANSITION */

    .notes-enter-active {

        transition: 0.2s ease;
    }

    .notes-leave-active  {

        transition: 0s;
    }

    .notes-move {

        transition: 0.3s ease;
    }

    .notes-enter, .notes-leave-to {

        transform: translateY( 30px );

        opacity: 0;
    }

    .note:nth-last-child(1) {

        border: none;
    }

    .notes-empty {

        font-size: 14px;
        color: var(--darkgray);
        white-space: nowrap;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );
    }

    /* TASK CSS */

    .task {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 4px;

        display: grid;
        grid-template-rows: 40px 400px 40px;

        transition: 0.3s ease;

        background-color: white;

        border-radius: 3px;

        overflow: hidden;
    }

    .open-task {

        height: 480px;

        z-index: 1;

        box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    }

    /* TASK HEADER */

    .header {

        height: 40px;

        position: relative;

        display: grid;
        grid-template-columns: 40px 250px 100px auto 120px 100px 60px;
        grid-template-rows: 40px;
        align-items: center;

        border-bottom: 1px solid var(--lightgray);
    }

    .task-priority {

        width: 4px;
        height: 14px;

        justify-self: center;

        background-color: var(--darkgray);
        border-radius: 4px;
    }

    .mid {

        background-color: var(--yellow);
    }

    .high {

        background-color: var(--red);
    }

    .task-info {

        font-size: 12px;
        text-align: center;
        color: var(--darkgray);

        padding: 0px 10px;
    }

    .task-info span {

        color: var(--red);
    }

    .task-name {

        text-align: left;
    }

    .open-task-button {

        padding: 12px;

        transition: 0.2s ease;
    }

    .open-task-button:hover {

        color: var(--darkgray);

        background-color: rgba(0,0,0,0.01);
    }

    /* TASK BODY */

    .body {

        display: grid;
        grid-template-columns: 290px auto 60px;
    }

    .info {

        display: grid;
        grid-template-rows: 200px 200px;

    }
    
    .description {

        padding: 20px 0px;

        overflow: hidden;
    }

    .description p {

        font-size: 12px;
        color: var(--darkgray);
        line-height: 1.3;

        width: calc( 100% + 17px );
        height: 160px;

        padding: 0px 20px;

        overflow-y: scroll;
    }

    .thumbnail {

        position: relative;

        background-color: black;

        border-top: 1px solid var(--lightgray);
    }

    .thumbnail img {

        max-width: 100%;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate( -50%, -50% );
    }

    .notes {

        width: 100%;
        height: 400px;

        position: relative;

        border-left: 1px solid var(--lightgray);
        border-right: 1px solid var(--lightgray);

        overflow: hidden;
    }

    .notes-list {

        width: calc( 100% + 17px );
        height: 400px;

        padding: 0px 20px;

        overflow: hidden;
        overflow-y: scroll;
    }

    /* TASK FOOTER */

    .footer {

        display: grid;
        grid-template-columns: 290px auto 60px;
        grid-template-rows: 40px;
        align-items: center;

        border-top: 1px solid var(--lightgray);
    }

    .note-controls {

        height: 40px;

        display: grid;
        grid-template-columns: 40px 40px 40px;
        grid-column-gap: 10px;
        align-items: center;
        justify-content: center;

        border-right: 1px solid var(--lightgray);
    }

    .client {

        font-size: 12px;
        font-weight: 500;
        color: var(--darkgray);
        text-align: center;

        width: 24px;
        height: 24px;

        justify-self: center;

        padding: 6px 0px;

        border-radius: 3px;

        cursor: pointer;
    }

    .client-on {

        color: white;
        
        background-color: var(--red);
    }

    .note-input {

        font-family: var(--main);
        font-size: 12px;
        color: gray;

        padding: 10px 10px;

        border: none;
    }

</style>
