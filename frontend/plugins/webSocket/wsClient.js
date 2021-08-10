import ClientRepository from '@/repositories/WebSocket/clientRepository'

export default function ({ store }, inject) {
  const wsClient = new ClientRepository(store)
  inject('wsClient', wsClient)
}
