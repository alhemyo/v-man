import Vue from 'vue'

export default {

  state: {

    projects: [],
    userProjects: []

  },

  getters: {
    projects(state) {return state.projects },
    userProjects(state) { return state.userProjects }
  },

  mutations: {
    updateProjects( state, projects ) { state.projects = projects },
    updateUserProjects( state, userProjects ) { state.userProjects = userProjects }
  },

  actions: {
    FETCH_PROJECTS({commit}) {
      Vue.http.get( this.state.testApi + 'projects' ).then( response => {
        commit( 'updateProjects', response.body )
      }).catch( error => {
        console.log(error)
      })
    }
  }

}
