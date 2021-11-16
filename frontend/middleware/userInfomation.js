export default async function ({ store, $user, redirect }) {
  const isUserId = store.getters['user/userId']
  if (isUserId !== false) return
  // _____________________________________________________________________________
  //
  const selectItems = ['gender', 'age', 'height']
  const inputArray = [
    'helpList',
    'emergencyNameList',
    'emergencyTelList',
    'featureList'
  ]
  function selectItemCommit(userInfo) {
    selectItems.forEach(_type => {
      const _payload = store.getters[`profileItems/${_type}Items`].filter(
        el => el.id === userInfo[_type]
      )
      store.commit('user/setSelectedItem', {
        type: _type,
        payload: _payload[0]
      })
    })
  }
  function inputArrayCommit(userInfo) {
    inputArray.forEach(_type => {
      store.commit('user/setArrayItem', {
        type: _type,
        payload: userInfo[_type].split(',')
      })
    })
  }
  // _____________________________________________________________________________
  //
  // _____________________________________________________________________________
  //
  try {
    const userName = await $user.getUserName()
    const { user, helps, emergency } = await $user.getUserInfomation()
    const { _user, _helps, _emergency } = {
      _user: user.data[0],
      _helps: helps.data[0],
      _emergency: emergency.data[0]
    }
    const userInfo = {
      id: _user.id,
      gender: _user.user_detail_gender,
      age: _user.user_detail_age,
      height: _user.user_detail_stature,
      helpList: _helps.help_content,
      emergencyNameList: _emergency.emergency_contact_name,
      emergencyTelList: _emergency.emergency_contact_tel,
      featureList: _user.user_detail_features,
      featurePhoto: _user.user_detail_image_path
    }
    store.commit('user/setInputValue', userName)
    store.commit('user/setUserId', userInfo.id)
    store.commit('user/setFeaturePhoto', {
      encodedData: `${process.env.OBJECT_URL}${userInfo.featurePhoto}`
    })
    selectItemCommit(userInfo)
    inputArrayCommit(userInfo)
    store.commit('user/mergeEmergencyList')
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.message)
    redirect('/sign_up')
  }
}
