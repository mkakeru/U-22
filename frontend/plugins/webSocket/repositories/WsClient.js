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

  setChannel(userId) {
    if (this.channel !== null) return
    // eslint-disable-next-line no-console
    console.log('setChannel')
    this.channel = this.cable.subscriptions.create(
      {
        channel: HELP_BUTTON_CHANNEL,
        room: userId,
      },
      {
        connected() {
          // eslint-disable-next-line no-console
          return console.log('nice to meet you websocket')
        },
        received: data => {
          return this._received(data)
        },
        disconnected() {
          return this.disconnectChannel()
        },
        sendToHelper() {
          return this._sendToHelper()
        },
      }
    )
  }

  _received(data) {
    // eslint-disable-next-line no-console
    return console.log(data)
  }

  // ヘルパーにuserIdを送信...?
  _sendToHelper(userId) {
    // eslint-disable-next-line no-console
    console.log(this.channel)
    return this.channel.perform('sendToHelper', { data: userId })
  }

  disconnectChannel() {
    this.disconnectAction()
  }
}
// _____________________________________________________________________________
//
