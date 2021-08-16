// _____________________________________________________________________________
//
const state = () => ({
  userId: 'user-id',
  accountType: '',
  userName: '',
  gender: { id: 0, text: 'その他' },
  age: { id: 6, text: '未選択' },
  height: { id: null, text: '未選択' },
  helpList: [''],
  emergencyNameList: [''],
  emergencyTelList: [''],
  emergencyContactList: [{ name: '', tel: '' }],
  featureList: [''],
  featurePhoto: '',
  carrierWavePhoto: ''
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
  userId: state => state.userId,
  accountType: state => state.accountType,
  userName: state => state.userName,
  gender: state => state.gender,
  age: state => state.age,
  height: state => state.height,
  helpList: state => state.helpList,
  emergencyNameList: state => state.emergencyNameList,
  emergencyTelList: state => state.emergencyTelList,
  emergencyContactList: state => state.emergencyContactList,
  featureList: state => state.featureList,
  featurePhoto: state => state.featurePhoto,
  carrierWaveFormat: state => state.carrierWaveFormat
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
  setInputValues(state, { type, index, payload }) {
    if (
      type === STATE_TYPES_OF_USER.helpList ||
      type === STATE_TYPES_OF_USER.emergencyContactList ||
      type === STATE_TYPES_OF_USER.featureList
    ) {
      // state[`${type}`] = [...state[`${type}`], { ...payload }]
      state[`${type}`][index] = payload
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
  setFeaturePhoto(state, payload) {
    state.featurePhoto = payload.encodedData
    state.carrierWaveFormat = payload.carrierWave
  }
}
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
const actions = {
  action({ commit }, payload) {
    commit('add', payload)
  }
}
// _____________________________________________________________________________
//
export default {
  state,
  getters,
  mutations,
  actions
}
