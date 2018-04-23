export default {

  state: {
    admin: false,
    name: 'Jane',
    surname: 'Doe',
    pp: '/static/images/janeDoe.png',
    position: 'DESIGN',
    status: 'online'
  },

  getters: {
    admin(state) {
      return state.admin
    },
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
    updateAdmin( state, admin ) {
      state.admin = admin
    },
    updateName( state, name ) {
      state.name = name
    },
    updateSurname( state, surname ) {
      state.surname = surname
    },
    updatePosition( state, position ) {
      state.position = position
    },
    updateStatus( state, status ) {
      state.status = status
    }
  }

}
