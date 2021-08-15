import WsClient from './repositories/WsClient'

export default function (context, inject) {
  const _wsClient = new WsClient()
  inject('wsClient', _wsClient)
}
