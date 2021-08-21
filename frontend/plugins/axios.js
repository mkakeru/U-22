export default function ({ $axios, redirect }) {
  $axios.defaults.baseURL = 'https://hitokoe-backend.herokuapp.com/api/v1'
  $axios.defaults.withCredentials = 'include'
  $axios.onError(error => {
    // eslint-disable-next-line no-console
    console.error(error.response.data)
  })
}
