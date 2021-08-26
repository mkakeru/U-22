// _____________________________________________________________________________
//
const initState = {
  userName: '',
  gender: { id: 0, text: 'その他' },
  age: { id: 6, text: '未選択' },
  height: { id: null, text: '未選択' },
  helpList: [''],
  emergencyNameList: [''],
  emergencyTelList: [''],
  featureList: ['']
}
const state = () => ({
  userId: false,
  accountType: '',
  requiredState: { ...initState },
  userName: '',
  gender: { id: 0, text: 'その他' },
  age: { id: 6, text: '未選択' },
  height: { id: null, text: '未選択' },
  helpList: [''],
  emergencyNameList: [''],
  emergencyTelList: [''],
  featureList: [''],
  emergencyContactList: [{ name: '', tel: '' }],
  featurePhoto: '',
  carrierWaveFormat: '',
  isComplete: { bool: false, errVal: '' }
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
  requiredState: state => state.requiredState,
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
  carrierWaveFormat: state => state.carrierWaveFormat,
  isComplete: state => state.isComplete,
  helpListLength: (state, getters) => getters.helpList.length,
  emergencyListLength: (state, getters) => getters.emergencyContactList.length,
  featureListLength: (state, getters) => getters.featureList.length,
  selectedValue: (state, getters) => {
    return {
      gender: getters.gender.text,
      age: getters.age.text,
      height: getters.height.text
    }
  }
}
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
const mutations = {
  setUserId(state, payload) {
    state.userId = payload
  },

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
      type === STATE_TYPES_OF_USER.emergencyNameList ||
      type === STATE_TYPES_OF_USER.emergencyTelList ||
      type === STATE_TYPES_OF_USER.featureList
    ) {
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
  },

  checkIsCompleate(state) {
    const _isComplete = {
      bool: false,
      errVal: ''
    }
    _isComplete.bool = Object.keys(state.requiredState).every(val => {
      const initValue =
        state.requiredState[val].text || state.requiredState[val][0]
      const currentValue = state[val].text || state[val][0]
      _isComplete.errVal = initValue !== currentValue ? '' : val
      return initValue !== currentValue
    })
    state.isComplete = _isComplete
  },

  mergeEmergencyList(state) {
    const mergencyList = state.emergencyNameList.map((el, i) => {
      return {
        tel: state.emergencyTelList[i],
        name: el
      }
    })
    state.emergencyContactList = mergencyList
  },

  setArrayItem(state, { type, payload }) {
    if (
      type === STATE_TYPES_OF_USER.helpList ||
      type === STATE_TYPES_OF_USER.emergencyNameList ||
      type === STATE_TYPES_OF_USER.emergencyTelList ||
      type === STATE_TYPES_OF_USER.featureList
    ) {
      state[type] = payload
    }
  },

  addListCount(state, { type }) {
    state[type] = [...state[type], '']
  }
}
// _____________________________________________________________________________
//
export default {
  state,
  getters,
  mutations
}
