import ActionCable from 'actioncable'

// _____________________________________________________________________________
//
export default class WebSocket {
  constructor(accountType) {
    this.accountType = accountType
    this.cable = ActionCable.createConsumer(`ws://127.0.0.1:3000/cable`)
  }

  setChannel(channelData) {
    // if (this.accountType === 'client' || this.accountType === 'helper') return
    // eslint-disable-next-line no-console
    console.log(this.accountType, channelData)
    // eslint-disable-next-line no-console
    console.log(this.cable)
    this.helpButtonChannel = this.cable.subscriptions.create(
      'HelpButtonChannel',
      {
        received: channelData => {
          return alert('test!')
        },
      }
    )
    return this.helpButtonChannel.perform('sendToHelper', {
      data: channelData,
    })
  }

  disconnectAction() {
    // eslint-disable-next-line no-console
    console.log(this.cable)
    this.cable.disconnect()
  }
}
// _____________________________________________________________________________
//
