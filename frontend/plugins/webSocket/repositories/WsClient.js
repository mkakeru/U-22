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

  clientChannelLink(_userId) {
    this.reconnectAction()
    if (this.channel !== null) return
    // eslint-disable-next-line no-console
    console.log('setChannel')
    this.channel = this.cable.subscriptions.create(
      {
        channel: HELP_BUTTON_CHANNEL,
        room: JSON.stringify({ userId: _userId, lat: 123, lng: 456 }),
      },
      {
        connected() {
          // eslint-disable-next-line no-console
          return console.log('nice to meet you websocket')
        },
        received: data => {
          const _data = JSON.parse(data)
          return this._received(_data)
        },
      }
    )
  }

  _received(data) {
    // eslint-disable-next-line no-console
    return console.log(`
    prop type ${typeof data}
    ${data}
    ${typeof data.userId}
    ${typeof data.lat}
    ${data.lng}
    `)
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
