<template>
    
    <div class="task">

        <div class="header">

            <div 
            class="priority"
            :class="{

                mid : ( priority === 'mid' ),
                high : ( priority === 'high' )

            }"></div>

            <p @click="openTask" class="task-info name">{{ name }}</p>

            <p class="task-info state">{{ state }}</p>

            <div></div>

            <p class="task-info deadline">{{ deadline.split('T')[0] }}</p>

            <div class="task-nav">

                <i class="material-icons" title="assign user" >add_circle_outline</i>

                <i class="material-icons" title="edit task" >edit</i>

                <i class="material-icons" title="delete task" >delete_outline</i>

            </div>

        </div>

        <div class="task-body"></div>

        <div class="footer">

            <input class="note-input" type="text" placeholder="Write a note..." />

            <i class="material-icons" >notes</i>

        </div>

    </div>

</template>

<script>

    export default {
    
        name: 'task',

        props: {

            name: String,
            state: String,
            id: String,
            priority: String,
            deadline: String

        },

        methods: {

            openTask(event) {

                $('.task').not( $(event.currentTarget).parent().parent() ).removeClass('task-open')
                $(event.currentTarget).parent().parent().toggleClass('task-open')

            }

        }

    }

</script>

<style scoped>

    .task {

        width: 100%;
        height: 40px;

        position: relative;
        margin-top: 4px;

        padding: 0px 10px;

        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 40px auto 40px;

        transition: 0.3s ease;

        background-color: white;
        border-radius: 5px;

        overflow: hidden;
    }

    .task-open {

        height: 400px;
;
        border-radius: 5px;
    }

    .header {

        width: 100%;
        height: 40px;

        display: grid;
        grid-template-columns: 20px 200px 100px auto 100px 100px;
        grid-column-gap: 10px;
        grid-template-rows: 40px;
        align-items: center;
    }

    .task-open .header {

        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .priority {

        width: 2px;
        height: 10px;

        justify-self: center;

        background-color: gray;
        border-radius: 5px;
    }

    .high {

        background-color: var(--red);
    }

    .mid {

        background-color: var(--yellow);
    }

    .task-info {

        font-size: 12px;
        text-align: center;

        padding: 14px;

        cursor: pointer;
    }

    .name {

        text-align: left;

        padding-left: 0px;
        padding-right: 0px;
    }

    .task-nav {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
        justify-items: center;
    }

    .material-icons {

        font-size: 24px;
        color: rgba(0,0,0,0.3);

        cursor: pointer;
    }

    .material-icons:hover {

        color: rgba(0,0,0,0.5);
    }

    .footer {

        display: grid;
        grid-template-columns: auto 40px ;
        grid-template-rows: 40px;
        align-items: center;
        justify-items: center;

        border-top: 1px solid rgba(0,0,0,0.05);
    }

    .note-input {

        font-family: var(--default);
        font-size: 12px;
        font-weight: 500;
        color: var(--dark);

        width: 100%;
        height: 30px;

        padding: 0px 20px;

        background-color: rgba(0,0,0,0.05);
        border: none;
        border-radius: 3px;
    }

</style>


