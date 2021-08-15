import ActionCable from 'actioncable'

// _____________________________________________________________________________
//
export default class WebSocket {
  constructor(accountType) {
    this.accountType = accountType
    this.cable = ActionCable.createConsumer(
      `ws://${process.env.RAILS_IP}:${process.env.RAILS_PORT}/cable`
    )
  }

  reconnectAction() {
    if (this.cable !== null) return
    this.cable = ActionCable.createConsumer(
      `ws://${process.env.RAILS_IP}:${process.env.RAILS_PORT}/cable`
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
