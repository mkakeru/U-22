const state = () => ({
  lat: 0,
  lng: 0
})

const getters = {
  lat: state => state.lat,
  lng: state => state.lng
}

const mutations = {
  setPosition(state, { lat, lng }) {
    state.lat = lat
    state.lng = lng
  }
}

export default {
  state,
  getters,
  mutations
}
