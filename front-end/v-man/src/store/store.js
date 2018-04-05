import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    username: "",
    password: "",
    name: "Jane Doe",
    pass: "password",
    validation: "locked"
  },
  getters: {
    username(state) {
      return state.username
    },
    password(state) {
      return state.password
    },
    validation(state) {
      return state.validation
    }
  },
  mutations: {
    updateUsername (state, username){
      state.username = username
    },
    updatePassword (state, password){
      state.password = password
    },
    updateValidation (state, validation){
      state.validation = validation
    }
  }

})
