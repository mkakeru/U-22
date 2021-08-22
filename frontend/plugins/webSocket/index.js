import wsClient from './repositories/WsClient'

export default function ({ store }, inject) {
  const webSocket = {
    client: wsClient(store)
  }
  inject('webSocket', webSocket)
}
