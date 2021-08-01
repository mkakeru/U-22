// _____________________________________________________________________________
//
const state = () => ({
  accountType: '',
  userName: '',
  gender: { id: 0, text: 'その他' },
  age: { id: 6, text: '未選択' },
  height: { id: null, text: '未選択' },
  helpsList: [],
  emergencyContactsList: [],
  featuresList: [],
})
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
/* { state: 'state' }の形になるSTATE_TYPES_OF_USERを作成 */

const stateKeys = Object.keys(state())
const STATE_TYPES_OF_USER = {}
stateKeys.forEach(key => {
  STATE_TYPES_OF_USER[key] = key
})
export { STATE_TYPES_OF_USER }
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
const getters = {
  accountType: state => state.accountType,
  userName: state => state.userName,
  gender: state => state.gender,
  age: state => state.age,
  height: state => state.height,
  helpsList: state => state.helpsList,
  emergencyContactsList: state => state.emergencyContactsList,
  featuresList: state => state.featuresList,
}
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
const mutations = {
  setAccountType(state, type) {
    if (type === 'client' || type === 'helper') {
      state.accountType = type
    }
  },
  setInputValue(state, inputValue) {
    state.userName = inputValue
  },
  setInputValues(state, { type, payload }) {
    if (
      type === STATE_TYPES_OF_USER.helpsList ||
      type === STATE_TYPES_OF_USER.emergencyContactsList ||
      type === STATE_TYPES_OF_USER.featuresList
    ) {
      state[`${type}`] = [...state[`${type}`], { ...payload }]
    }
  },
  setSelectedItem(state, { type, payload }) {
    if (
      type === STATE_TYPES_OF_USER.gender ||
      type === STATE_TYPES_OF_USER.age ||
      type === STATE_TYPES_OF_USER.height
    ) {
      state[`${type}`] = { ...payload }
    }
  },
}
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
const actions = {
  action({ commit }, payload) {
    commit('add', payload)
  },
}
// _____________________________________________________________________________
//
export default {
  state,
  getters,
  mutations,
  actions,
}
