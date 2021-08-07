import ActionCable from 'actioncable'

// _____________________________________________________________________________
//
export default class WebSocket {
  constructor(accountType) {
    this.accountType = accountType
    this.cable = ActionCable.createConsumer(
      `ws://${process.env.RAILS_IP || '127.0.0.1'}:${
        process.env.RAILS_PORT || 3000
      }/cable`
    )
  }

  setChannel(channelData) {
    // eslint-disable-next-line no-console
    console.log(this.accountType, channelData)
    // if (this.accountType === 'client' || this.accountType === 'helper') return
    // eslint-disable-next-line no-console
    console.log(this.cable)
    return this.cable.subscriptions.create(channelData)
  }

  disconnectAction() {
    // eslint-disable-next-line no-console
    console.log(this.cable)
  }
}
// _____________________________________________________________________________
//
