import WebSocket from './index'

export default class Client extends WebSocket {
  constructor() {
    super('client')
  }
}
