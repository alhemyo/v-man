import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import dash from './modules/dash'

Vue.use(Vuex)

export const store = new Vuex.Store({

  modules: {
    login,
    dash
  }

})
