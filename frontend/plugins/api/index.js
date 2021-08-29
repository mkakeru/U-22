import user from './repositories/user'
import helper from './repositories/helper'
import geolocation from './repositories/geolocation'

export default function (context, inject) {
  const { $userAxios, $geoAxios, store } = context

  const version = '/api/v1'
  const api = {
    user: user($userAxios, store, version),
    helper: helper($userAxios, store, version),
    geolocation: geolocation($geoAxios, store)
  }

  context.$api = api
  context.$user = api.user
  inject('api', api)
}
