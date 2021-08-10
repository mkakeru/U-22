import WebSocket from './index'

// _____________________________________________________________________________
//
const resource = {
  help: 'HelpButtonChannel',
}
// _____________________________________________________________________________
//
// _____________________________________________________________________________
//
export default class ClientRepository extends WebSocket {
  constructor($store) {
    super('client')
    this.store = $store
    // room として サーバーサイドにuserIdを送信する
    // this.channel = this.webSocket.setChannel({
    //   channel: resource.help,
    //   room: userId,
    // })
  }

  _setChannel(userId) {
    // eslint-disable-next-line no-console
    console.log('setChannel', userId)
    this.setChannel(
      { channel: resource.help, room: userId },
      {
        connected: () => {
          this.channelConnected()
        },
        received: data => {
          this.helpChannelReceived(data)
        },
        disconnected: () => {
          // eslint-disable-next-line no-console
          console.log('bye bye')
        },
      }
    )
  }

  channelConnected() {
    // eslint-disable-next-line no-console
    console.log('nice to meet you websocket')
  }

  helpChannelReceived(data) {
    this.store.commit('client/setMessage', data)
    // return arg => {
    //   arg(data)
    // }
    // return this.channel.received(data => {
    //   arg(data)
    // })
  }

  socketClose() {
    // eslint-disable-next-line no-console
    this.disconnectAction()
  }
}
// _____________________________________________________________________________
//
