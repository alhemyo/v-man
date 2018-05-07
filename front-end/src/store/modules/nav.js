import Vue from 'vue'

export default {

  state: {
    settings: {
      active: false,
      defaultSrc: "/static/images/icons/navbar/default/menu_default.png",
      activeSrc: "/static/images/icons/navbar/active/menu_active.png"
    }
  },
  getters: {
    activeSettings(state) { return state.settings.active },
    defaultSettingSrc(state) { return state.settings.defaultSrc },
    activeSettingsSrc(state) { return state.settings.activeSrc }
  },
  mutations: {
    updateActiveSettings( state, activeSettings ) { state.settings.active = activeSettings }
  }

}
