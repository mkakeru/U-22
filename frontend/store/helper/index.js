// _____________________________________________________________________________
//
const state = () => ({
  isHelpDistance: null,
  distance: null,
  tolerableDistance: 1
})
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
const getters = {
  distance: state => state.distance,
  isHelpDistance: state => state.isHelpDistance
}
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
const mutations = {
  setIsHelpDistance(state, bool) {
    state.isHelpDistance = bool
  },

  setDistance(state, number) {
    state.distance = number
  }
}

// _____________________________________________________________________________
//
const actions = {
  setDistanceAction({ commit, state }, distance) {
    const isHelp = distance < state.tolerableDistance
    commit('setIsHelpDistance', isHelp)
    commit('setDistance', distance)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
