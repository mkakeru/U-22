/* eslint-disable camelcase */
// factory
export default function ($axios, store, version) {
  const routes = {
    LINE_AUTH: `${version}/auth/line`,
    USER_DETAILS: `${version}/user_details`,
    USERS_SIGN_OUT: `${version}/users/sign_out`,
    USERS_UID: `${version}/users`,
    HELPS: `${version}/helps`,
    EMERGENCY_CONTACTS: `${version}/emergency_contacts`,
    PHONES: `${version}/phones`
  }

  const user = new User($axios, store, routes)
  return user
}

// repository
class User {
  constructor(userAxios, store, routes) {
    this.axios = userAxios
    this.store = store
    this.routes = routes
  }

  async postUserRegistory() {
    const _store = this.store
    const uid = _store.getters['authLine/auth'].uid

    const user_detail_gender = _store.getters['user/gender'].id
    const user_detail_stature = _store.getters['user/height'].id
    const user_detail_age = _store.getters['user/age'].id
    const user_detail_features = _store.getters['user/featureList']
    const user_detail_image_path = _store.getters['user/carrierWaveFormat']
    // ユーザーの通知設定
    const user_detail_notification_flag = true
    await this.axios.$post(this.routes.USER_DETAILS, {
      uid,
      user_detail_gender,
      user_detail_stature,
      user_detail_age,
      user_detail_features: user_detail_features.join(','),
      user_detail_image_path,
      user_detail_notification_flag
    })

    const help_content = _store.getters['user/helpList']
    await this.axios.$post(this.routes.HELPS, {
      uid,
      help_content: help_content.join(',')
    })

    const emergency_contact_name = _store.getters['user/emergencyNameList']
    const emergency_contact_tel = _store.getters['user/emergencyTelList']
    await this.axios.$post(this.routes.EMERGENCY_CONTACTS, {
      uid,
      emergency_contact_name: emergency_contact_name.join(','),
      emergency_contact_tel: emergency_contact_tel.join(',')
    })
  }

  async getUserName() {
    const { data } = await this.axios.$get(this.routes.USERS_UID)
    return data.name
  }

  async getUserInfomation() {
    const user = await this.axios.$get(this.routes.USER_DETAILS)
    const helps = await this.axios.$get(this.routes.HELPS)
    const emergency = await this.axios.$get(this.routes.EMERGENCY_CONTACTS)
    return {
      user,
      helps,
      emergency
    }
  }

  async updateUserDetails() {
    const _store = this.store
    const id = _store.getters['user/userId']
    const uid = _store.getters['authLine/auth'].uid

    const user_detail_gender = _store.getters['user/gender'].id
    const user_detail_stature = _store.getters['user/height'].id
    const user_detail_age = _store.getters['user/age'].id
    const user_detail_features = _store.getters['user/featureList']
    const user_detail_image_path = _store.getters['user/carrierWaveFormat']
    const user_detail_notification_flag = true
    await this.axios.$put(`${this.routes.USER_DETAILS}/${id}`, {
      uid,
      user_detail_gender,
      user_detail_stature,
      user_detail_age,
      user_detail_features: user_detail_features.join(','),
      user_detail_image_path,
      user_detail_notification_flag
    })

    const help_content = _store.getters['user/helpList']
    await this.axios.$post(this.routes.HELPS, {
      uid,
      help_content: help_content.join(',')
    })

    const emergency_contact_name = _store.getters['user/emergencyNameList']
    const emergency_contact_tel = _store.getters['user/emergencyTelList']

    await this.axios.$post(this.routes.EMERGENCY_CONTACTS, {
      uid,
      emergency_contact_name: emergency_contact_name.join(','),
      emergency_contact_tel: emergency_contact_tel.join(',')
    })
  }

  async sendSMS() {
    const uid = this.store.getters['authLine/auth'].uid
    await this.axios.$get(`${this.routes.PHONES}/${uid}/send_sms`)
  }

  async deleteAccount() {
    const uid = this.store.getters['authLine/auth'].uid
    await this.axios.$delete(`${this.routes.USERS_UID}/${uid}`)
  }

  async signOut() {
    await this.axios.$get(this.routes.USERS_SIGN_OUT)
  }
}
