import ActionCable from 'actioncable'
export default function (accountType) {
  const webSocket = new WebSocket(accountType)
  return webSocket
}

// _____________________________________________________________________________
//
class WebSocket {
  constructor(accountType) {
    this.accountType = accountType
    this.cable = ActionCable.createConsumer(
      `wss://${process.env.RAILS_DOMAIN}/cable`
    )
  }

  reconnectAction() {
    if (this.cable !== null) return
    this.cable = ActionCable.createConsumer(
      `wss://${process.env.RAILS_DOMAIN}/cable`
    )
  }

  disconnectAction() {
    if (this.cable === null) return
    this.cable.disconnect()
    this.cable = null
    // eslint-disable-next-line no-console
    console.log(`this.cable = ${this.cable}`)
  }
}
// _____________________________________________________________________________
//
