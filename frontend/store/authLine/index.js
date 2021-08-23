const state = () => ({
  isUser: null,
  auth: {}
})

const getters = {
  isUser: state => state.isUser,
  auth: state => state.auth
}

const mutations = {
  setUser(state, value) {
    state.isUser = value
  },
  setAuth(state, value) {
    state.auth = value
  }
}

export default {
  state,
  getters,
  mutations
}
