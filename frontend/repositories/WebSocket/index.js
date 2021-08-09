import ActionCable from 'actioncable'

// _____________________________________________________________________________
//
export default class WebSocket {
  constructor(accountType) {
    this.accountType = accountType
    this.cable = ActionCable.createConsumer(`ws://127.0.0.1:3000/cable`)
  }

  setChannel() {
    // if (this.accountType === 'client' || this.accountType === 'helper') return
    // eslint-disable-next-line no-console
    const channelData = { userId: 1, lat: 10, lng: 10 }
    console.log(this.accountType, channelData)
    // eslint-disable-next-line no-console
    console.log(this.cable)
    console.log(channelData)
    this.helpButtonChannel = this.cable.subscriptions.create(
      'HelpButtonChannel',
      {
        received: data => {
          console.log('受信データ', data)
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
