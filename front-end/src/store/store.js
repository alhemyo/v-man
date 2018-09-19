import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './modules/auth'
import thisUser from './modules/thisUser'
import thisUserProjects from './modules/projects/thisUserProjects'
import tasks from './modules/projects/tasks'
import addTask from './modules/projects/addTask'
import users from './modules/users/users'
import projects from './modules/projects/projects'
import addUser from './modules/users/add-user'
import addProject from './modules/projects/addProject'

export default new Vuex.Store({

  modules: {
    auth,
    thisUser,
    thisUserProjects,
    tasks,
    users,
    addTask,
    projects,
    addUser,
    addProject
  },

  state: {

    // API
    api: "http://127.0.0.1:5000/",
    testApi: "http://127.0.0.1:3000/",

    // Regex
		regex: {

      login: /[~`<>|\n/\\//\\]+$/,
      letters: /^[\s/a-zA-Z]*$/,
      numbers: /^[\s/0-9.]+$/,
      alphanumeric: /^[\s/0-9a-zA-Z/ -]+$/,
      mail: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      
    },

    // UI controls

    miniSidebar: false, // Open / Close sidebar
    openTaskForm: false, // Open / Close add task form
    openUserForm: false, // Open / Close add user form
    openProjectForm: false, // Open / Close add project form

  },
  mutations: {

    updateMiniSidebar( state, mini ) { state.miniSidebar = mini },
    updateOpenTaskForm( state, openTaskForm ) { state.openTaskForm = openTaskForm },
    updateOpenUserForm( state, openUserForm ) { state.openUserForm = openUserForm },
    updateOpenProjectForm( state, openProjectForm ) { state.openProjectForm = openProjectForm }

  }
  
})
