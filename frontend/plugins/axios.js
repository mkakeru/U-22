export default function ({ $axios }, inject) {
  $axios.onError(error => {
    // eslint-disable-next-line no-console
    console.error(error)
  })
  inject('axios', $axios)
}
