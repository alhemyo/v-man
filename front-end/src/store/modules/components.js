export default {

  state: {
    login: false,
    dashboard: true,
    currentProject: false,
    projects: false,
    userConfig: true,
    chat: false
  },

  getters: {
    login(state) { return state.login },
    dashboard(state) { return state.dashboard },
    currentProject(state) { return state.currentProject },
    userConfig(state) { return state.userConfig }
  },

  mutations: {
    updateLogin( state, login ) { state.login = login },
    updateDashboard( state, dashboard ) { state.dashboard = dashboard },
    updateCurrentProject( state, currentProject ) { state.currentProject = currentProject },
    updateUserConfig( state, userConfig ) { state.userConfig = userConfig }
  }

}