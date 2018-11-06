import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import myProjects from './modules/myProjects'
import projects from './modules/projects'
import tasks from './modules/tasks'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    auth,
    myProjects,
    projects,
    tasks
  },

  state: {

    socket: {
      connect: false,
      task: {}
    },

    config: {
      api: 'http://127.0.0.1:5000/api/'
    },

    uiComponents: {
      sidebar: false
    },

    forms: {
      projectForm: false,
      userForm: false,
      taskForm: false
    },

    regex: {

      login: /[~`<>|\n/\\//\\]+$/,
      letters: /^[\s/a-zA-Z]*$/,
      numbers: /^[\s/0-9.]+$/,
      alphanumeric: /^[\s/0-9a-zA-Z/ -]+$/,
      mail: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      
    },

  },
  mutations: {

    // UI Components
    updateSidebar( state, sidebar ) { state.uiComponents.sidebar = sidebar },

    // Forms
    updateProjectForm( state, projectForm ) { state.forms.projectForm = projectForm },
    updateUserForm( state, userForm ) { state.forms.userForm = userForm },
    updateTaskForm( state, taskForm ) { state.forms.taskForm = taskForm },

    // Socket
    SOCKET_CONNECT( state )  { state.connect = true },
    SOCKET_TASK_CHANGED( state, task ) { state.socket.task = task }
  }

})
