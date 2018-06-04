export default {

  state: {
    login: false,
    dashboard: true,
    projects: false,
    chat: false
  },

  getters: {
    login(state) { return state.login },
    dashboard(state) { return state.dashboard }
  },

  mutations: {
    updateLogin( state, login ) { state.login = login },
    updateDashboard( state, dashboard ) { state.dashboard = dashboard }
  }

}