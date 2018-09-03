<template>
    
    <div class="users">

        <div class="header">

            <p class="header-text">{{ usersLength }} Assigned Users</p>

            <i class="material-icons" title="assign user to project" >add</i>

        </div>

        <div class="user-list">

            <transition-group mode="out-in" name="list">

                <user 
                :key="user.umcn" 
                v-for="user in assignedUsers"
                :name="user.name + ' ' + user.surname"
                :avatar="user.gender === 'male' ? male : female" />

            </transition-group>

            <loader :condition="loading" />

        </div>

    </div>

</template>

<script>

    import user from './user'
    import loader from '../../widgets/loader'

    export default {
    
        name: 'users',

        data() {

            return {

                male: '/images/johnDoe.png',
                female: '/images/janeDoe.png'

            }

        },

        components: {

            user,
            loader
        },

        computed: {

            assignedUsers() {

                let project = this.$store.state.thisUserProjects.projects.find(( project ) => {

                    return project.id === Number( this.$route.params.id )

                })

                return this.$store.state.users.users.filter(( user, index ) => {

                    return user.id === project.users[index]

                }) || []

            },

            usersLength() { return this.assignedUsers.length || 0 },

            loading() { return this.assignedUsers.length === 0 ? true : false || false }

        },

        created() {

            this.$store.commit( 'resetUsersState' )
            this.$store.dispatch( 'GET_USERS' )

        }

    }

</script>

<style scoped>

    .users {

        height: calc( 100vh - 300px );

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto;
    }

    .header {

        display: grid;
        grid-template-columns: auto 40px;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .header-text {

        padding: 23px 20px;
    }

    .user-list {

        width: calc( 100% + 17px );

        padding: 10px 20px;

        overflow: hidden;
        overflow-y: scroll;
    }

    .material-icons {

        color: rgba(0,0,0,0.5);

        justify-self: flex-start;

        cursor: pointer;
    }

    .material-icons:hover {

        background-color: lightgray;
        border-radius: 30px;
    }

</style>


