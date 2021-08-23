export default function ($axios, store) {
  const geolocation = new Geolocation($axios, store)
  return geolocation
}

class Geolocation {
  constructor(geoAxios, store) {
    this.axios = geoAxios
    this.store = store
  }

  currentPosition() {
    if (!navigator.geolocation) alert('Not available. :(')
    const store = this.store
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude
        const lng = pos.coords.longitude
        store.commit('userPosition/setPosition', { lat, lng })
      },
      err => {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    )
  }
}
