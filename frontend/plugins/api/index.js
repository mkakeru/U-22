import user from './repositories/user'
import geolocation from './repositories/geolocation'

export default function (context, inject) {
  const { $axios, store, app } = context

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
  userAxios.onResponse(res => {
    // eslint-disable-next-line no-useless-return
    if (!res.headers['access-token']) return

    const authHeaders = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      uid: res.headers.uid
    }
    store.commit('authLine/setAuth', authHeaders)

    const session = app.$cookies.get('session')
    // eslint-disable-next-line no-useless-return
    if (!session) return
    session.tokens = authHeaders
    app.$cookies.set('session', session, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
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
    user: user(userAxios),
    geolocation: geolocation(geoAxios, store)
  }
  context.$api = api
  context.$user = api.user
  inject('api', api)
}
