import Vue from 'vue'

export default {

  state: {

    settings: {
      active: false,
      defaultSrc: "/static/images/icons/navbar/default/menu_default.png",
      activeSrc: "/static/images/icons/navbar/active/menu_active.png"
    },

    dashboard: {
      active: true,
      defaultSrc: "/static/images/icons/navbar/default/dashboard_default.png",
      activeSrc: "/static/images/icons/navbar/active/dashboard_active.png"
    },

    projects: {
      active: false,
      defaultSrc: "/static/images/icons/navbar/default/projects_default.png",
      activeSrc: "/static/images/icons/navbar/active/projects_active.png"
    },

    chat: {
      active: false,
      defaultSrc: "/static/images/icons/navbar/default/chat_default.png",
      activeSrc: "/static/images/icons/navbar/active/chat_active.png"
    }

  },

  getters: {

    // Settings getters
    activeSettings(state) { return state.settings.active },
    defaultSettingSrc(state) { return state.settings.defaultSrc },
    activeSettingsSrc(state) { return state.settings.activeSrc },

    // Dashboard getters
    activeDashboard(state) { return state.dashboard.active },
    defaultDashboardSrc(state) { return state.dashboard.defaultSrc },
    activeDashboardSrc(state) { return state.dashboard.activeSrc },

    // Projects getters
    activeProjects(state) { return state.projects.active },
    defaultProjectsSrc(state) { return state.projects.defaultSrc },
    activeProjectsSrc(state) { return state.projects.activeSrc },

    // Chat Getters
    activeChat(state) { return state.chat.active },
    defaultChatSrc(state) { return state.chat.defaultSrc },
    activeChatSrc(state) { return state.chat.activeSrc }
  },

  mutations: {

    // Settings mutation
    updateActiveSettings( state, activeSettings ) { state.settings.active = activeSettings },

    // Dashboard mutation
    updateActiveDashboard( state, activeDashboard ) { state.dashboard.active = activeDashboard },

    // Projects mutation
    updateActiveProjects( state, activeProjects ) { state.projects.active = activeProjects },

    // Chat mutation
    updateActiveChat( state, activeChat ) { state.chat.active = activeChat }
  }

}
