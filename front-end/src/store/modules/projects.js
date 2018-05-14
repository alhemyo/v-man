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
    GET_PROJECTS({commit}) {
      Vue.http.get( this.state.testApi + 'projects' ).then(response => {
        commit('updateProjects', response.body)
      })
    }
  }

}
