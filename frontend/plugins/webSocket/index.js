import wsClient from './repositories/WsClient'
import wsHelper from './repositories/WsHelper'

export default function (context, inject) {
  const { store, $api } = context
  const webSocket = {
    client: wsClient(store),
    helper: wsHelper(store, $api.geolocation, $api.helper)
  }
  inject('webSocket', webSocket)
}
