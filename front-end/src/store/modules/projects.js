import Vue from 'vue'

export default {

  state: {
    projects: []
  },

  getters: {
    projects(state) { return state.projects }
  },

  mutations: {
    updateProjects(state, projects) { state.projects = projects }
  },

  actions: {
    GET_PROJECTS() {
      Vue.http.get( this.state.testApi + 'projects' ).then(response => {
        console.log(response.body)
      })
    }
  }

}
