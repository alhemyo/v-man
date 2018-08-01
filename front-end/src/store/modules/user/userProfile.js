const userProfileDefaultState = () => {

    userProfile: {}
}

const state = userProfileDefaultState()

export default {

    state,

    mutations: {

        updateUserProfile(state, userProfile) { state.userProfile = userProfile }
    },

    actions: {}
}

