import webSocket from '../repositories'

export default function (store) {
  const clientSocket = webSocket('client')
  const state = {
    channel: null,
    receiveValue: null,
    resource: 'HelpButtonChannel'
  }
  const wsClient = new WsClient(clientSocket, store, state)
  return wsClient
}
// _____________________________________________________________________________
//
class WsClient {
  constructor(webSocket, store, state) {
    this.webSocket = webSocket
    this.store = store
    this.channel = state.channel
    this.receiveValue = state.receiveValue
    this.resource = state.resource
  }

  clientChannelLink() {
    this.webSocket.reconnectAction()
    if (this.channel !== null) return
    // eslint-disable-next-line no-console
    console.log('setChannel')
    this.channel = this.webSocket.cable.subscriptions.create(
      {
        channel: this.resource
      },
      {
        connected() {
          // eslint-disable-next-line no-console
          return console.log('nice to meet you webSocket')
        },
        received: data => {
          return this._received(data)
        }
      }
    )
  }

  _received({ data }) {
    // eslint-disable-next-line no-console
    return console.log(`
    prop type ${typeof data}
    ${data}
    ${data.userId}
    ${data.lat}
    ${data.lng}
    `)
  }

  _sendToHelper(_userId) {
    if (this.channel === null) return
    const lat = this.store.getters['userPosition/lat']
    const lng = this.store.getters['userPosition/lng']
    return this.channel.perform('sendToHelper', {
      data: { userId: _userId, lat, lng }
    })
  }

  _disconnectAction() {
    if (this.channel === null) return
    this.channel.unsubscribe()
    this.channel = null
    // eslint-disable-next-line no-console
    console.log(this.channel)
    this.webSocket.disconnectAction()
  }
}
// _____________________________________________________________________________
//
