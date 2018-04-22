export default {

  state: {
    admin: true,
    name: 'Jane',
    surname: 'Doe',
    pp: '/static/images/janeDoe.png',
    position: 'DESIGN',
    status: 'online'
  },

  getters: {
    pp(state) {
      return state.pp // return profile picture
    },
    name(state) {
      return state.name
    },
    surname(state) {
      return state.surname
    },
    position(state) {
      return state.position
    },
    status(state) {
      return state.status
    }
  },

  mutations: {

  }

}
