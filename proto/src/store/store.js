import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

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
    }

  },
  mutations: {

    // UI Components
    updateSidebar( state, sidebar ) { state.uiComponents.sidebar = sidebar },

    // Forms
    updateProjectForm( state, projectForm ) { state.forms.projectForm = projectForm },
    updateUserForm( state, userForm ) { state.forms.userForm = userForm },
    updateTaskForm( state, taskForm ) { state.forms.taskForm = taskForm }
  }

})
