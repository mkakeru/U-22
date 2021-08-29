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
      received: data => {
        return this._received(data)
      }
    })
  }

  _received(res) {
    const uid = this.store.getters['authLine/auth'].uid
    if (res.data.is_helper === true || res.data.clientUid !== uid) return
    // eslint-disable-next-line no-console
    return console.log(`
    prop type ${typeof res.data}
    ${res.data}
    is_helper = ${res.data.is_helper}
    clientUid = ${res.data.clientUid}
    lat = ${res.data.lat}
    lng = ${res.data.lng}
    `)
  }

  _sendToHelper(_lat, _lng) {
    if (this.webSocket.channel === null || this.webSocket.isHelper) return
    const uid = this.store.getters['authLine/auth'].uid
    return this.webSocket.channel.perform('sendToHelper', {
      data: {
        clientUid: uid,
        lat: _lat,
        lng: _lng,
        is_helper: this.webSocket.isHelper
      }
    })
  }

  _disconnectAction() {
    this.webSocket.disconnectSocket()
  }
}
// _____________________________________________________________________________
//
