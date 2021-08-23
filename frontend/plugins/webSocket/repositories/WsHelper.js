import webSocket from '../repositories'

export default function (store) {
  const helperSocket = webSocket('helper')
  const state = {
    channel: null,
    receiveValue: null,
    resource: ''
  }
  const wsHelper = new WsHelper(helperSocket, store, state)
  return wsHelper
}
// _____________________________________________________________________________
//
class WsHelper {
  constructor(helperSocket, store, state) {
    this.webSocket = helperSocket
    this.store = store
    this.channel = state.channel
    this.receiveValue = state.receiveValue
    this.resource = state.resource
  }
}
// _____________________________________________________________________________
//
