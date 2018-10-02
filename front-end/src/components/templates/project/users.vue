<template>
    
    <div class="users">

        <div class="header">

            <p class="header-text">{{ assignedUsersLength }} Assigned Users</p>

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

        <div class="users-footer">

            <assign-button
            
            name="Assign Users"
            :button="true"
            :options="unassignedUsers"
            
             />

            <!--

            <div class="button" >

                <p>Assign user</p>

                <i class="material-icons">add</i>

            </div>

            -->

        </div>

    </div>

</template>

<script>

    import user from './user'
    import loader from '../../macro/loader'
    import assignButton from '../../macro/form/assign-button'

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
            loader,
            assignButton
        },

        computed: {

            project() {

                return this.$store.state.thisUserProjects.projects.find((project) => {

                    return project.id === Number( this.$route.params.id )

                })

            },

            users: { get() { return this.$store.state.users.users } },

            assignedUsers() { return this.users.filter(user => this.project.users.includes(user.umcn)) || [] },

            unassignedUsers() { return this.users.filter(user => !this.project.users.includes(user.umcn)) || [] },

            assignedUsersLength() { return this.assignedUsers.length || 0 },

            loading() { return this.assignedUsersLength > 0 ? false : true },

        },

        created() {

            this.$store.commit( 'resetUsersState' )
            this.$store.dispatch( 'GET_USERS' )

        }

    }

</script>

<style scoped>

    .users {

        height: calc( 100vh - 240px );

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto 60px;
    }

    .header {

        display: grid;
        align-items: center;

        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .header-text {

        text-align: center;
        font-size: 12px;
    }

    .user-list {

        width: calc( 100% + 17px );

        background-color: rgba(0,0,0,0.05);

        overflow: hidden;
        overflow-y: scroll;
    }

    .material-icons {

        color: rgba(0,0,0,0.5);

        justify-self: flex-start;

        cursor: pointer;
    }

    .users-footer {

        padding: 0px 20px;

        display: grid;
        grid-template-columns: min-content;
        justify-content: flex-end;
        align-items: center;

        border-top: 1px solid rgba(0,0,0,0.1);
    }

</style>


