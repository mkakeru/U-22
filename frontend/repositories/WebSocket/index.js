import ActionCable from 'actioncable'
import client from '@/store/client'
import helper from '@/store/helper'

// _____________________________________________________________________________
//
export default class WebSocket {
  constructor(accountType) {
    this.accountType = accountType
    this.cable = ActionCable.createConsumer(
      `ws://${process.env.RAILS_IP}:${process.env.RAILS_PORT}/cable`
    )
    this.channel = ''
  }

  setClientChannel(channel) {
    if (this.accountType !== 'client') return
    this.channel = this.cable.subscriptions.create(channel, {
      received: data => {
        client.mutations.setMessage(data)
      },
    })
  }

  setHelperChannel(channel) {
    if (this.accountType !== 'helper') return
    this.channel = this.cable.subscriptions.create(channel, {
      received: data => {
        helper.mutations.setMessage(data)
      },
    })
  }

  // helpAction() {
  //   this.channel = this.cable.subscriptions.create('HelpButtonChannel', {

  //   })
  // }
}
// _____________________________________________________________________________
//
