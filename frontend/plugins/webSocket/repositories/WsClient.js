import webSocket from '../repositories'

export default function (store) {
  const state = {
    receiveValue: null,
    isHelper: false,
    resource: 'HelpButtonChannel'
  }
  const clientSocket = webSocket(state.isHelper, state.resource)
  const wsClient = new WsClient(clientSocket, store, state.receiveValue)
  return wsClient
}
// _____________________________________________________________________________
//
class WsClient {
  constructor(webSocket, store, receiveValue) {
    this.webSocket = webSocket
    this.store = store
    this.receiveValue = receiveValue
  }

  clientChannelLink() {
    this.webSocket.channelLink({
      connected() {
        // eslint-disable-next-line no-console
        return console.log('nice to meet you webSocket from client')
      },
      received: async res => {
        return await this._received(res)
      }
    })
  }

  async _received(res) {
    const { message } = await Promise.resolve(res)
    const uid = this.store.getters['authLine/auth'].uid
    if (message.is_helper === true || message.clientUid !== uid) return
    this._disconnectAction()
    // eslint-disable-next-line no-console
    return console.log(`
    prop type ${typeof message}
    ${message}
    is_helper = ${message.is_helper}
    clientUid = ${message.clientUid}
    lat = ${message.lat}
    lng = ${message.lng}
    `)
  }

  async _sendToHelper(_lat, _lng) {
    if (this.webSocket.channel === null || this.webSocket.isHelper) return
    const uid = this.store.getters['authLine/auth'].uid
    return await Promise.resolve(
      this.webSocket.channel.perform('sendToHelper', {
        message: {
          clientUid: uid,
          lat: _lat,
          lng: _lng,
          is_helper: this.webSocket.isHelper
        }
      })
    )
  }

  _disconnectAction() {
    this.webSocket.disconnectSocket()
  }
}
// _____________________________________________________________________________
//
