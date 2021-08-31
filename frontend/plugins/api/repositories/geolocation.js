export default function ($axios, store) {
  const geolocation = new Geolocation($axios, store)
  return geolocation
}

class Geolocation {
  constructor(geoAxios, store) {
    this.axios = geoAxios
    this.store = store
    this.r = Math.PI / 180
    this.geoOptions = {
      enableHighAccuracy: true
    }
  }

  async currentPosition() {
    if (!navigator.geolocation) alert('Not available. :(')
    const store = this.store
    const location = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, this.geoOptions)
    })

    const lat = location.coords.latitude
    const lng = location.coords.longitude
    store.commit('userLocation/setPosition', { lat, lng })
  }

  getUserDistance(helper, client) {
    const helperLat = helper.lat * this.r
    const helperLng = helper.lng * this.r

    const clientLat = client.lat * this.r
    const clientLng = client.lng * this.r

    const distance =
      6371 *
      Math.acos(
        Math.cos(helperLat) *
          Math.cos(clientLat) *
          Math.cos(clientLng - helperLng) +
          Math.sin(helperLat) * Math.sin(clientLat)
      )
    this.store.dispatch('helper/setDistanceAction', distance)
  }
}
