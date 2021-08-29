export default function (context, inject) {
  const { $axios, store } = context

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
  userAxios.onError(error => {
    // eslint-disable-next-line no-console
    console.error(error)
  })

  const geoAxios = $axios.create()
  geoAxios.setBaseURL(
    `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GEO_API_KEY}`
  )
  geoAxios.onError(error => {
    // eslint-disable-next-line no-console
    console.error(error)
  })

  $axios.onError(error => {
    // eslint-disable-next-line no-console
    console.error(error)
  })

  inject('userAxios', userAxios)
  inject('geoAxios', geoAxios)
}
