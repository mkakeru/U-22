import webSocket from '../repositories'

export default function (store, $geolocation, $helper) {
  const state = {
    isHelper: true,
    resource: 'HelpButtonChannel'
  }
  const helperSocket = webSocket(state.isHelper, state.resource)
  const wsHelper = new WsHelper(helperSocket, store, $geolocation, $helper)
  return wsHelper
}
// _____________________________________________________________________________
//
class WsHelper {
  constructor(webSocket, store, $geolocation, $helper) {
    this.webSocket = webSocket
    this.store = store
    this.$geolocation = $geolocation
    this.$helper = $helper
  }

  helperChannelLink() {
    this.webSocket.channelLink({
      connected() {
        // eslint-disable-next-line no-console
        return console.log('nice to meet you webSocket from helper')
      },
      received: data => {
        this.$geolocation.currentPosition()
        return this._received(data)
      }
    })
  }

  async _received(res) {
    if (res.data.is_helper === true) return

    const client = {
      lat: res.data.lat,
      lng: res.data.lng
    }
    // eslint-disable-next-line no-console
    console.log(`
    client.lat = ${client.lat}
    client.lng = ${client.lng}
    `)

    await this.$geolocation.currentPosition()

    const helper = {
      lat: this.store.getters['userLocation/lat'],
      lng: this.store.getters['userLocation/lng']
    }
    this.$geolocation.getUserDistance(helper, client)

    const isHelpDistance = this.store.getters['helper/isHelpDistance']
    const distance = this.store.getters['helper/distance']

    if (isHelpDistance === true) {
      const helperId = this.store.getters['user/userId']
      // eslint-disable-next-line no-console
      console.log(`
      helperId = ${helperId}
      client.lat = ${client.lat}
      client.lng = ${client.lng}
      isHelpDistance = ${isHelpDistance}
      distance = ${distance}
      `)
      await this.$helper.sendHelpMessage(helperId, client.lat, client.lng)
    }

    const data = {
      clientId: res.data.clientId,
      isHelpDistance: this.store.getters['helper/isHelpDistance']
    }
    this.webSocket.disconnectSocket()
    this.helperChannelLink()
    return data
  }
}
// _____________________________________________________________________________
//
