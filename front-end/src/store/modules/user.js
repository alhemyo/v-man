import Vue from 'vue'

export default {

  state: {
    id: "",
    name: "Jane",
    surname: "Doe",
    phone: "",
    address: "",
    dashUsername: "",
    email: "",
    avatar: "../static/images/janeDoe.png",
    position: "DESIGN",
    status: "online",
    admin: true
  },

  getters: {
    id(state) { return state.id },
    name(state) { return state.name },
    surname(state) { return state.surname },
    phone(state) { return state.phone },
    address(state) { return state.address },
    dashUsername(state) { return state.dashUsername },
    email(state) { return state.email },
    avatar(state) { return state.avatar },
    position(state) { return state.position },
    status(state) { return state.status },
    admin(state) { return state.admin }
  },

  mutations: {
    updateId( state, id ) { state.id = id },
    updateName( state, name ) { state.name = name },
    updateSurname( state, surname ) { state.surname = surname },
    updatePhone( state, phone ) { state.phone = phone },
    updateAddress( state, address ) { state.address = address },
    updateDashUsername( state, dashUsername ) { state.dashUsername = dashUsername },
    updateEmail( state, email ) { return state.email = email },
    updateAvatar( state, avatar ) { return state.avatar = avatar },
    updatePosition( state, position ) { return state.position = position },
    updateStatus( state, status ) { return state.status = status },
    updateAdmin( state, admin ) { return state.admin = admin }
  }

}
