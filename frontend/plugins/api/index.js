import user from './repositories/user'
import geolocation from './repositories/geolocation'

export default function (context, inject) {
  const { $axios, store } = context

  // _____________________________________________________________________________
  //
  const userAxios = $axios.create()
  userAxios.setBaseURL(`https://${process.env.RAILS_DOMAIN}`)
  userAxios.onRequest(config => {
    const headers = store.getters['authLine/auth']
    config.headers = {
      'Access-Token': headers['access-token'],
      client: headers.client,
      uid: headers.uid
    }
  })
  // _____________________________________________________________________________
  //
  // _____________________________________________________________________________
  //
  const geoAxios = $axios.create()
  geoAxios.setBaseURL(
    `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GEO_API_KEY}`
  )
  // _____________________________________________________________________________
  //
  const api = {
    user: user(userAxios, store),
    geolocation: geolocation(geoAxios, store)
  }
  context.$api = api
  context.$user = api.user
  inject('api', api)
}
