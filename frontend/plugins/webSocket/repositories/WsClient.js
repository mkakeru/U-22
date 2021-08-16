import WebSocket from './index'

// _____________________________________________________________________________
//
const HELP_BUTTON_CHANNEL = 'HelpButtonChannel'
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
export default class WsClient extends WebSocket {
  constructor() {
    super('client')
    this.channel = null
    this.receiveValue = null
  }

  clientChannelLink() {
    this.reconnectAction()
    if (this.channel !== null) return
    // eslint-disable-next-line no-console
    console.log('setChannel')
    this.channel = this.cable.subscriptions.create(
      {
        channel: HELP_BUTTON_CHANNEL,
      },
      {
        connected() {
          // eslint-disable-next-line no-console
          return console.log('nice to meet you websocket')
        },
        received: data => {
          return this._received(data)
        },
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
    return this.channel.perform('sendToHelper', {
      data: { userId: _userId, lat: 123, lng: 456 },
    })
  }

  _disconnectAction() {
    if (this.channel === null) return
    this.channel.unsubscribe()
    this.channel = null
    // eslint-disable-next-line no-console
    console.log(this.channel)
    this.disconnectAction()
  }
}
// _____________________________________________________________________________
//
