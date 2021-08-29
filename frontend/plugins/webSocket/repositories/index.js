// eslint-disable-next-line no-useless-return
import ActionCable from 'actioncable'
export default function (isHelper, resource) {
  const webSocket = new WebSocket(isHelper, resource)
  return webSocket
}

// _____________________________________________________________________________
//
class WebSocket {
  constructor(isHelper, resource) {
    this.isHelper = isHelper
    this.resource = resource
    this.cable = null
    this.channel = null
    this.receiveValue = null
    this.closure = null
  }

  connectAction() {
    if (this.cable !== null) return
    this.cable = ActionCable.createConsumer(
      `wss://${process.env.RAILS_DOMAIN}/cable`
    )
  }

  channelLink(options) {
    this.connectAction()
    if (this.channel !== null) return
    this.channel = this.cable.subscriptions.create(
      {
        channel: this.resource
      },
      options
    )
  }

  disconnectChannel() {
    if (this.channel === null) return
    this.channel.unsubscribe()
    this.channel = null
  }

  disconnectCable() {
    if (this.cable === null) return
    this.cable.disconnect()
    this.cable = null
  }

  disconnectSocket() {
    this.disconnectChannel()
    this.disconnectCable()
    // eslint-disable-next-line no-console
    console.log(`this.cable = ${this.cable} this.channel = ${this.channel}`)
  }
}
// _____________________________________________________________________________
//
