// factory
export default function (userAxios, store, version) {
  const routes = {
    HELP_BUTTON: `${version}/help_button`
  }
  const helper = new Helper(userAxios, store, routes)
  return helper
}

// repository
class Helper {
  constructor(userAxios, store, routes) {
    this.axios = userAxios
    this.store = store
    this.routes = routes
  }

  async sendHelpMessage(helperId, clientLat, clientLng) {
    const uid = this.store.getters['authLine/auth'].uid
    await this.axios.$post(this.routes.HELP_BUTTON, {
      uid,
      helper_id: helperId,
      lat: clientLat,
      lng: clientLng
    })
  }
}
